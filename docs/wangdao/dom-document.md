---
title: "dom节点 --  document"
date: 2022-03-24 17:23:00
sidebar: "auto"
categories:
  - 基础三剑客
tags:
  - JavaScript
---

## 文档状态属性

### document.hidden

`document.hidden`属性返回一个布尔值，表示当前页面是否可见。如果窗口最小化、浏览器切换了 Tab，都会导致导致页面不可见，使得`document.hidden`返回`true`。

这个属性是 Page Visibility API 引入的，一般都是配合这个 API 使用。

### document.visibilityState

`document.visibilityState`返回文档的可见状态。

它的值有四种可能。

> - `visible`：页面可见。注意，页面可能是部分可见，即不是焦点窗口，前面被其他窗口部分挡住了。
> - `hidden`：页面不可见，有可能窗口最小化，或者浏览器切换到了另一个 Tab。
> - `prerender`：页面处于正在渲染状态，对于用户来说，该页面不可见。
> - `unloaded`：页面从内存里面卸载了。

**这个属性可以用在页面加载时，防止加载某些资源；或者页面不可见时，停掉一些页面功能。**

### document.readyState

`document.readyState`属性返回当前文档的状态，共有三种可能的值。

- `loading`：加载 HTML 代码阶段（尚未完成解析）
- `interactive`：加载外部资源阶段
- `complete`：加载完成

这个属性变化的过程如下。

1. 浏览器开始解析 HTML 文档，`document.readyState`属性等于`loading`。
2. 浏览器遇到 HTML 文档中的`<script>`元素，并且没有`async`或`defer`属性，就暂停解析，开始执行脚本，这时`document.readyState`属性还是等于`loading`。
3. HTML 文档解析完成，`document.readyState`属性变成`interactive`。
4. 浏览器等待图片、样式表、字体文件等外部资源加载完成，一旦全部加载完成，`document.readyState`属性变成`complete`。

## document 获取 dom 节点的方法

### document.querySelector()，document.querySelectorAll()

- `document.querySelector`方法接受一个 CSS 选择器作为参数，返回匹配该选择器的元素节点。如果有多个节点满足匹配条件，则返回第一个匹配的节点。如果没有发现匹配的节点，则返回`null`。

- `document.querySelectorAll`方法与`querySelector`用法类似，区别是返回一个`NodeList`对象，包含所有匹配给定选择器的节点。
- `querySelectorAll`的返回结果不是动态集合，**不会实时反映元素节点的变化**。

> 这两个方法的参数，可以是逗号分隔的多个 CSS 选择器，返回匹配其中一个选择器的元素节点，这与 CSS 选择器的规则是一致的。
>
> 但是，它们不支持 CSS 伪元素的选择器（比如`:first-line`和`:first-letter`）和伪类的选择器（比如`:link`和`:visited`），即无法选中伪元素和伪类。

### document.getElementsByTagName()

`document.getElementsByTagName()`方法搜索 HTML 标签名，返回符合条件的元素。它的返回值是一个类似数组对象（`HTMLCollection`实例），**可以实时反映 HTML 文档的变化**。如果没有任何匹配的元素，就返回一个空集。另外，返回结果中，各个成员的顺序就是它们在文档中出现的顺序。

### document.getElementsByClassName()

- `document.getElementsByClassName()`方法返回一个类似数组的对象（`HTMLCollection`实例），包括了所有`class`名字符合指定条件的元素，**元素的变化实时反映在返回结果中**。
- 当参数为多个类名时，返回同时具有这些类名的的元素

### document.getElementsByName()

用于选择拥有`name`属性的 HTML 元素（比如`<form>`、`<radio>`、`<img>`、`<frame>`、`<embed>`和`<object>`等），返回一个类似数组的的对象（`NodeList`实例），因为`name`属性相同的元素可能不止一个。

### document.getElementById()

匹配指定`id`属性的元素节点。如果没有发现匹配的节点，则返回`null`。

> `document.getElementById()`比`document.querySelector()`效率高得多。

### document.elementFromPoint()，document.elementsFromPoint()

`document.elementFromPoint()`方法返回位于页面指定位置最上层的元素节点。

```js
// 选中在(50, 50)这个坐标位置的最上层的那个 HTML 元素。
var element = document.elementFromPoint(50, 50);
```

## 创建 dom 节点的方法

### document.createElement()

用来生成元素节点，并返回该节点。参数为元素的标签名，即元素节点的`tagName`属性，也可以是自定义的标签名。

### document.createTextNode()

用来生成文本节点（`Text`实例），并返回该节点。它的参数是文本节点的内容。

> 这个方法可以确保返回的节点，被浏览器当作文本渲染，而不是当作 HTML 代码渲染。因此，可以用来展示用户的输入，避免 XSS 攻击。

### document.createDocumentFragment()

生成一个空的文档片段对象

> `DocumentFragment`是一个存在于内存的 DOM 片段，不属于当前文档，常常用来生成一段较复杂的 DOM 结构，然后再插入当前文档。这样做的好处在于，因为`DocumentFragment`不属于当前文档，对它的任何改动，都不会引发网页的重新渲染，比直接修改当前文档的 DOM 有更好的性能表现。

### document.createEvent()

`document.createEvent`方法生成一个事件对象（`Event`实例），该对象可以被`element.dispatchEvent`方法使用，触发指定事件。

`document.createEvent`方法的参数是事件类型，比如`UIEvents`、`MouseEvents`、`MutationEvents`、`HTMLEvents`。

## 其他方法

### document.hasFocus()

返回一个布尔值，表示当前文档之中是否有元素被激活或获得焦点。

### document.adoptNode()，document.importNode()

`document.adoptNode`方法将某个节点及其子节点，从原来所在的文档或`DocumentFragment`里面移除，归属当前`document`对象，返回插入后的新节点。插入的节点对象的`ownerDocument`属性，会变成当前的`document`对象，而`parentNode`属性是`null`。

`document.importNode`方法则是从原来所在的文档或`DocumentFragment`里面，拷贝某个节点及其子节点，让它们归属当前`document`对象。拷贝的节点对象的`ownerDocument`属性，会变成当前的`document`对象，而`parentNode`属性是`null`。

这两个方法只是改变了节点的归属，这时该节点的父节点是`null`。下一步还必须将这个节点插入当前文档树。
