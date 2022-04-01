---
title: "事件循环机制 -- Promise"
date: 2022-03-24 17:19:00
sidebar: "auto"
categories:
  - 网道js入门
tags:
  - 异步操作
---

## 概述

Promise 对象是 JavaScript 的异步操作解决方案，为异步操作提供统一接口。它起到代理作用（proxy），充当异步操作与回调函数之间的中介，使得异步操作具备同步操作的接口。是为了解决“**回调地狱**”而产生的

Promise 的设计思想是，所有异步任务都返回一个 Promise 实例。Promise 实例有一个`then`方法，用来指定下一步的回调函数。

## Promise 对象的状态

Promise 对象通过自身的状态，来控制异步操作。Promise 实例具有三种状态。

- 异步操作未完成（pending）
- 异步操作成功（fulfilled）
- 异步操作失败（rejected）

`fulfilled`和`rejected`合在一起称为`resolved`（已定型）。

Promise 状态的变化途径只有两种，状态一旦改变，就不会再有新的状态变化。

- `pending` ----> `fulfilled`
- `pending` ----> `rejected`

因此，Promise 的最终结果只有两种。

- 异步操作成功，Promise 实例传回一个值（value），状态变为`fulfilled`。
- 异步操作失败，Promise 实例抛出一个错误（error），状态变为`rejected`。

## Promise 构造函数

JavaScript 提供原生的`Promise`构造函数，用来生成 Promise 实例。

```js
var promise = new Promise(function (resolve, reject) {
  // ...

  if (/* 异步操作成功 */){
    resolve(value);
  } else { /* 异步操作失败 */
    reject(new Error());
  }
});
```

`resolve`函数的作用是，将`Promise`实例的状态从“未完成”变为“成功”（即从`pending`变为`fulfilled`），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去。`reject`函数的作用是，将`Promise`实例的状态从“未完成”变为“失败”（即从`pending`变为`rejected`），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

## Promise.prototype.then()

Promise 实例的`then`方法，用来添加回调函数。

`then`方法可以接受两个回调函数，第一个是异步操作成功时（变为`fulfilled`状态）的回调函数，第二个是异步操作失败（变为`rejected`）时的回调函数（该参数可以省略）。一旦状态改变，就调用相应的回调函数。

```js
var p1 = new Promise(function (resolve, reject) {
  resolve("成功");
});
p1.then(console.log, console.error);
// "成功"

var p2 = new Promise(function (resolve, reject) {
  reject(new Error("失败"));
});
p2.then(console.log, console.error);
// Error: 失败
```

> then 方法可以链式调用
>
> Promise 对象的报错具有传递性。

## then()用法解析

```js
f1()
  .then(function () {
    return f2();
  })
  .then(f3);
// f3回调函数的参数是f2参数的运行结果

f1()
  .then(function () {
    f2();
  })
  .then(f3);
// 没有返回值，所以f3回调函数的参数为undefined

f1().then(f2()).then(f3);
// f3回调函数的参数，是f2函数返回的函数的运行结果。

f1().then(f2).then(f3);
// 写法四与写法一只有一个差别，那就是f2会接收到f1()返回的结果。
```

## 实例：图片加载

```js
var preloadImage = function (path) {
  return new Promise(function (resolve, reject) {
    var image = new Image();
    image.onload = resolve;
    image.onerror = reject;
    image.src = path;
  });
};
```

使用：

```js
preloadImage("https://example.com/my.jpg")
  .then(function (e) {
    document.body.append(e.target);
  })
  .then(function () {
    console.log("加载成功");
  });
```

## 微任务

Promise 的回调函数属于异步任务，会在同步任务之后执行。

> 但是，Promise 的回调函数不是正常的异步任务，而是微任务（microtask）。它们的区别在于，正常任务追加到下一轮事件循环，微任务追加到本轮事件循环。这意味着，微任务的执行时间一定早于正常任务。

```js
setTimeout(function () {
  console.log(1);
}, 0);

new Promise(function (resolve, reject) {
  resolve(2);
}).then(console.log);

console.log(3);
// 3
// 2
// 1
```

上面代码的输出结果是`321`。这说明`then`的回调函数的执行时间，早于`setTimeout(fn, 0)`。**因为`then`是本轮事件循环执行，`setTimeout(fn, 0)`在下一轮事件循环开始时执行。**
