---
title: "事件循环机制 -- 定时器"
date: 2022-03-24 17:20:00
sidebar: "auto"
categories:
  - 网道js入门
tags:
  - 异步操作
---

## setTimeout()

`setTimeout`函数用来指定某个函数或某段代码，在多少毫秒之后执行。它**返回一个整数，表示定时器的编号**，以后可以用来取消这个定时器。

```js
var timerId = setTimeout(func|code, delay = 0, [args...]);
```

> **注意：**
>
> 如果回调函数是对象的方法，那么`setTimeout`使得方法内部的`this`关键字指向全局环境，而不是定义时所在的那个对象。

## setInterval()

`setInterval`函数的用法与`setTimeout`完全一致，区别仅仅在于`setInterval`指定某个任务每隔一段时间就执行一次，也就是**无限次的定时执行**。

`setInterval`的常见用途有：网页动画、轮询

example

```js
var div = document.getElementById("someDiv");
var opacity = 1;
var fader = setInterval(function () {
  opacity -= 0.1;
  if (opacity >= 0) {
    div.style.opacity = opacity;
  } else {
    clearInterval(fader);
  }
}, 100);
```

> **注意：**
>
> `setInterval`指定的是“开始执行”之间的间隔，并不考虑每次任务执行本身所消耗的时间。因此实际上，两次执行之间的间隔会小于指定的时间。
>
> 为了确保两次执行之间有固定的间隔，可以不用`setInterval`，而是每次执行结束后，使用`setTimeout`指定下一次执行的具体时间。

```js
// 下一次执行总是在本次执行结束之后的2000毫秒开始。
var timer = setTimeout(function f() {
  // ...
  timer = setTimeout(f, 2000);
}, 2000);
```

## clearTimeout()、clearInterval()

`setTimeout`和`setInterval`函数，都返回一个整数值，表示计数器编号。将该整数传入`clearTimeout`和`clearInterval`函数，就可以取消对应的定时器。

`setTimeout`和`setInterval`返回的整数值是连续的，也就是说，第二个`setTimeout`方法返回的整数值，将比第一个的整数值大 1。利用这一点，可以写一个函数，取消当前所有的`setTimeout`定时器。

```js
(function () {
  // 每轮事件循环检查一次
  var gid = setInterval(clearAllTimeouts, 0);

  function clearAllTimeouts() {
    // 设置一个空的定时器，并获取当前id
    var id = setTimeout(function () {}, 0);
    // 循环取消定时器，id--
    while (id > 0) {
      if (id !== gid) {
        clearTimeout(id);
      }
      id--;
    }
  }
})();
```

## 实例：debounce 函数

```js
$("textarea").on("keydown", debounce(ajaxAction, 2500));

function debounce(fn, delay) {
  var timer = null; // 声明计时器
  return function () {
    var context = this;
    var args = arguments;
    // 每次调用都会取消定时
    clearTimeout(timer);
    // 仅当delay毫秒后才会执行fn(注意this指向绑定)
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}
```

## 定时器运行机制

`setTimeout`和`setInterval`的运行机制，是将指定的代码移出本轮事件循环，等到下一轮事件循环，再检查是否到了指定时间。如果到了，就执行对应的代码；如果不到，就继续等待。

这意味着，`setTimeout`和`setInterval`指定的回调函数，必须**等到本轮事件循环的所有同步任务都执行完，才会开始执行**。由于前面的任务到底需要多少时间执行完，是不确定的，所以没有办法保证，`setTimeout`和`setInterval`指定的任务，一定会按照预定时间执行。

## setTimeout(f, 0)

### 含义

`setTimeout(f, 0)`会在本轮同步任务执行结束，下一轮事件循环一开始就执行。

总之，`setTimeout(f, 0)`这种写法的目的是，尽可能早地执行`f`，但是并不能保证立刻就执行`f`。

> 实际上，`setTimeout(f, 0)`不会真的在 0 毫秒之后运行，不同的浏览器有不同的实现。以 Edge 浏览器为例，会等到 4 毫秒之后运行。如果电脑正在使用电池供电，会等到 16 毫秒之后运行；如果网页不在当前 Tab 页，会推迟到 1000 毫秒（1 秒）之后运行。这样是为了节省系统资源。

### 应用

#### 调整事件的发生顺序

比如，网页开发中，某个事件先发生在子元素，然后冒泡到父元素，即子元素的事件回调函数，会早于父元素的事件回调函数触发。如果，想让父元素的事件回调函数先发生，就要用到`setTimeout(f, 0)`。

```js
// HTML 代码如下
// <input type="button" id="myButton" value="click">

var input = document.getElementById("myButton");

input.onclick = function A() {
  setTimeout(function B() {
    input.value += " input";
  }, 0);
};

document.body.onclick = function C() {
  input.value += " body";
};
```

#### 用户自定义的回调函数，通常在浏览器的默认动作之前触发

比如，用户在输入框输入文本，`keypress`事件会在浏览器接收文本之前触发。因此，下面的回调函数是达不到目的的。

```js
document.getElementById("input-box").onkeypress = function () {
  var self = this;
  setTimeout(function () {
    self.value = self.value.toUpperCase();
  }, 0);
};
```

> `setTimeout(f, 0)`实际上意味着，将任务放到浏览器最早可得的空闲时段执行，所以那些计算量大、耗时长的任务，常常会被放到几个小部分，分别放到`setTimeout(f, 0)`里面执行。

另一个使用这种技巧的例子是**代码高亮的处理**。如果代码块很大，一次性处理，可能会对性能造成很大的压力，那么将其分成一个个小块，一次处理一块，比如写成`setTimeout(highlightNext, 50)`的样子，性能压力就会减轻。
