---
title: "浏览器的 EventLoop"
date: 2022-07-03 21:43:00
sidebar: "auto"
categories:
  - 基础三剑客
tags:
  - JavaScript
---



#### 浏览器的 EventLoop

***

##### 异步实现

宏观：浏览器多线程

微观：EventLoop， 事件循环



<img src="/Users/sunruonan/Typora_pic/image-20211203133011630.png" alt="image-20211203133011630" style="zoom:67%;" />

异步任务分为两类：宏任务与微任务。

宏任务： script全局执行、定时器、setImmediate（nodejs）、 I/O操作、UI渲染

微任务：Promise、Object.observe（监听对象变化的方法）、MutationObserve（监听dom结构变化的API）、postMessage（window对象间通信方法）



##### 执行过程

<img src="/Users/sunruonan/Typora_pic/image-20211203133647167.png" alt="image-20211203133647167" style="zoom:67%;" />



##### EventLoop处理模型

<img src="/Users/sunruonan/Typora_pic/image-20211203134029909.png" alt="image-20211203134029909" style="zoom:50%;" />

一个Event Loop有一个或多个task queue，每个event loop有一个microtask queue



##### 举例

```js
console.log("start");

setTimeout(() => {
  console.log("setTimeout");
  new Promise(resolve => {
    console.log("promise inner1");
    resolve();
  }).then(() => {
    console.log("promise then1");
  });
}, 0)

new Promise(resolve => {
    console.log("promise inner2");
    resolve();
}).then(() => {
    console.log("promise then2");
})

// 输出
// start
// promise inner2   //注意start与promise inner2是同步执行的，then才是回调函数异步执行的
// promise then2
// setTimeout
// promise inner1
// promise then1
```

