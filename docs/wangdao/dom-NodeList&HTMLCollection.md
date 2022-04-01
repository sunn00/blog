---
title: "dom节点 -- NodeList & HTMLCollection"
date: 2022-03-24 17:24:00
sidebar: "auto"
categories:
  - 网道js入门
tags:
  - dom
---

节点都是单个对象，有时需要一种数据结构，能够容纳多个节点。DOM 提供两种节点集合，用于容纳多个节点：`NodeList`和`HTMLCollection`。两者区别在于，`NodeList`可以包含各种类型的节点，`HTMLCollection`只能包含 HTML 元素节点。

<!-- more -->

## NodeList 接口

### 概述

`NodeList`实例是一个类数组对象，它的成员是节点对象。通过以下方法可以得到`NodeList`实例。

- `Node.childNodes`
- `document.querySelectorAll()`等节点搜索方法

> **注意**
>
> NodeList 实例可能是动态集合，也可能是静态集合。所谓动态集合就是一个活的集合，DOM 删除或新增一个相关节点，都会立刻反映在 NodeList 实例。目前，只有`Node.childNodes`返回的是一个动态集合，其他的 NodeList 都是静态集合。

### 属性

#### length

`length`属性返回 NodeList 实例包含的节点数量。对于那些不存在的 HTML 标签，`length`属性返回`0`。

### 方法

#### forEach()

`forEach`方法用于遍历 NodeList 的所有成员。它接受一个回调函数作为参数，每一轮遍历就执行一次这个回调函数，用法与数组实例的`forEach`方法完全一致。

```js
// 回调函数f的三个参数依次是当前成员、位置和当前 NodeList 实例。
// forEach方法的第二个参数，用于绑定回调函数内部的this，该参数可省略。

var children = document.body.childNodes;
children.forEach(function f(item, i, list) {
  // ...
}, this);
```

#### item()

`item`方法接受一个整数值作为参数，表示成员的位置，返回该位置上的成员。

如果参数值大于实际长度，或者索引不合法（比如负数），`item`方法返回`null`。如果省略参数，`item`方法会报错。

与[]运算符功能相同，一般是用方括号运算符。

#### keys()、values()、entries()

这三个方法都返回一个 ES6 的遍历器对象，可以通过`for...of`循环遍历获取每一个成员的信息。区别在于，`keys()`返回键名的遍历器，`values()`返回键值的遍历器，`entries()`返回的遍历器同时包含键名和键值的信息。

```js
var children = document.body.childNodes;

for (var key of children.keys()) {
  console.log(key);
}
// 0
// 1
// ...

for (var value of children.values()) {
  console.log(value);
}
// #text
// <script>
// ...

for (var entry of children.entries()) {
  console.log(entry);
}
// Array [ 0, #text ]
// Array [ 1, <script> ]
// ...
```

## HTMLCollection

### 概述

`HTMLCollection`是一个节点对象的集合，只能包含元素节点（element），不能包含其他类型的节点。它的返回值是一个类似数组的对象，但是与`NodeList`接口不同，`HTMLCollection`没有`forEach`方法，只能使用`for`循环遍历。

返回`HTMLCollection`实例的，主要是一些`Document`对象的集合属性，比如`document.links`、`document.forms`、`document.images`等。`HTMLCollection`实例都是**动态集合**，节点的变化会实时反映在集合中。

如果元素节点有`id`或`name`属性，那么`HTMLCollection`实例上面，可以使用`id`属性或`name`属性引用该节点元素。如果没有对应的节点，则返回`null`。

```js
// HTML 代码如下
// <img id="pic" src="http://example.com/foo.jpg">

var pic = document.getElementById("pic");
document.images.pic === pic; // true
```

### 属性

#### length

`length`属性返回`HTMLCollection`实例包含的成员数量。

### 方法

#### item()

同 NodeList

#### namedItem()

`namedItem`方法的参数是一个字符串，表示`id`属性或`name`属性的值，返回当前集合中对应的元素节点。如果没有对应的节点，则返回`null`。

```js
// HTML 代码如下
// <img id="pic" src="http://example.com/foo.jpg">

var pic = document.getElementById("pic");
(document.images.namedItem("pic") === document.images.pic) === pic; // true
```
