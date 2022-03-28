---
title: "事件循环机制 --  概述"
date: 2022-03-24 17:14:00
sidebar: "auto"
categories:
  - 网道js入门
tags:
  - 异步操作
---

## 事件循环机制

> 很多时候 CPU 是闲着的，因为 IO 操作（输入输出）很慢（比如 Ajax 操作从网络读取数据），不得不等着结果出来，再往下执行。这时 CPU 完全可以不管 IO 操作，挂起处于等待中的任务，先运行排在后面的任务。等到 IO 操作返回了结果，再回过头，把挂起的任务继续执行下去。
>
> 这种机制就是 JavaScript 内部采用的“事件循环”机制（Event Loop）。

## 异步操作的模式

### 回调函数

```js
function f1(callback) {
  // ...
  callback();
}

function f2() {
  // ...
}

f1(f2);
```

优点：简单，易理解和实现

缺点：不利于代码阅读与维护，各个部分高度耦合，使得程序结构混乱，流程难以追踪

### 事件监听

采用事件驱动模式，异步任务的执行不取决于代码的顺序，而取决于某个事件是否发生。

```js
f1.on("done", f2);

function f1() {
  setTimeout(function () {
    // ...
    f1.trigger("done");
  }, 1000);
}
```

优点：比较容易理解，可以绑定多个事件，每个事件可以指定多个回调函数，可以“去耦合”，有利于实现模块化。

缺点：整个程序都要变成事件驱动型，运行流程会变得很不清晰。阅读代码的时候，很难看出主流程。

### 发布/订阅模式

> 事件完全可以理解成“信号”，如果存在一个“信号中心”，某个任务执行完成，就向信号中心“发布”（publish）一个信号，其他任务可以向信号中心“订阅”（subscribe）这个信号，从而知道什么时候自己可以开始执行。

以 jQuery 的 Tiny Pub/Sub 为例

```js
// f2向信号中心 jQuery 订阅 done 信号
jQuery.subscribe("done", f2);

// f1执行后，向信号中心发布 done信号，从而引发f2的执行
function f1() {
  setTimeout(function () {
    // ...
    jQuery.publish("done");
  }, 1000);
}
```

优点：与“事件监听”相似，但是可以通过查看“消息中心”，了解存在多少信号、每个信号有多少订阅者，从而监控程序的运行。

## 异步操作的流程控制

如果有多个异步操作，就存在一个流程控制的问题：如何确定异步操作执行的顺序，以及如何保证遵守这种顺序。

### 串行执行

编写一个流程控制函数，让他控制异步任务，一个任务完成以后再执行另一个。

```js
var items = [1, 2, 3, 4, 5, 6];
var results = [];

function async(arg, callback) {
  console.log("参数为 " + arg + " , 1秒后返回结果");
  setTimeout(function () {
    callback(arg * 2);
  }, 1000);
}

function final(value) {
  console.log("完成: ", value);
}

function series(item) {
  if (item) {
    async(item, function (result) {
      results.push(result);
      return series(items.shift());
    });
  } else {
    return final(results[results.length - 1]);
  }
}

series(items.shift()); // 耗时： 6s
```

它会依次执行异步任务，所有任务都完成后，才会执行`final`函数。`items`数组保存每一个异步任务的参数，`results`数组保存每一个异步任务的运行结果。

### 并行执行

即所有异步任务同时执行，等到全部完成以后，才执行`final`函数。

```js
var items = [1, 2, 3, 4, 5, 6];
var results = [];

function async(arg, callback) {
  console.log("参数为 " + arg + " , 1秒后返回结果");
  setTimeout(function () {
    callback(arg * 2);
  }, 1000);
}

function final(value) {
  console.log("完成: ", value);
}

items.forEach(function (item) {
  async(item, function (result) {
    results.push(result);
    if (results.length === items.length) {
      final(results[results.length - 1]);
    }
  });
});
// 耗时：1s
```

并行执行的效率较高，比起串行执行一次只能执行一个任务，较为节约时间。但是问题在于如果并行的任务较多，很容易耗尽系统资源，拖慢运行速度。

### 并行与串行的结合

所谓并行与串行的结合，就是设置一个门槛，**每次最多只能并行执行`n`个异步任务**，这样就避免了过分占用系统资源。

```js
var items = [1, 2, 3, 4, 5, 6];
var results = [];
var running = 0;
var limit = 2;

function async(arg, callback) {
  console.log("参数为 " + arg + " , 1秒后返回结果");
  setTimeout(function () {
    callback(arg * 2);
  }, 1000);
}

function final(value) {
  console.log("完成: ", value);
}

function launcher() {
  while (running < limit && items.length > 0) {
    var item = items.shift();
    async(item, function (result) {
      results.push(result);
      running--;
      if (items.length > 0) {
        launcher();
      } else if (running == 0) {
        final(results);
      }
    });
    running++;
  }
}

launcher(); // 耗时：3s
```

变量`running`记录当前正在运行的任务数，只要低于门槛值，就再启动一个新的任务，如果等于`0`，就表示所有任务都执行完了，这时就执行`final`函数。
