---
title: "函数式编程"
date: 2022-03-28 11:18:00
sidebar: "auto"
categories:
  - 基础三剑客
tags:
  - JavaScript
---

> 学习函数式编程只是为了让你在开发过程中多一个编程范式的选择，大多时候我们无法将所有函数写成纯函数的形式，但是我们仍可以学习函数式编程的不依赖外部状态、不改写数据的做法，通过减少共享的数据来减少开发过程的 bug 数。



[原文地址]: https://jelly.jd.com/article/622dece7fec023019a310fa0



<!-- more -->

## 举例说明

有一个数据转换的需求，需要将 `['tom', 'bob', 'alice']` 转换为 `[{name: 'Tom'}, {name: 'Bob'}, {name: 'Alice'}]`。

解析一下功能点：

- 字符串数组转 `key` 为 `name` 数组对象；
- `name` 字符串转换为首字符大写。



### 命令式编程

命令式编程实现该需求，实现思路如下：

- 声明临时变量 `arr2` 存放新数组；
- 声明临时变量 `first`、`rest` 存放字符串，并进行转首字母大写的操作；
- 通过 [array.map ](http://array.map/)得到新数组，赋值给 `arr2`。

实现代码如下：

```javascript
const arr = ['tom', 'bob', 'alice']
const arr2 = arr.map(i => {
 const first = i.substring(0, 1)
 const rest = i.substring(1, i.length)
 return {
  name: first.toUpperCase() + rest.toLowerCase()
 }
})
```



### 函数式编程

函数式编程实现该需求，实现思路如下：

- 字符串转首字母大写的函数；
- 字符串生成对象的函数；
- 字符串转指定格式对象的函数；
- 数组转数组对象的函数。

实现代码如下：

```javascript
const { curry, compose, map } = require('ramda')

// 首字符大写
const capitalize = (x) => x[0].toUpperCase() + x.slice(1).toLowerCase()

// 字符串生成对象
const genObj = curry((key, x) => {
  let obj = {}
  obj[key] = x
  return obj
})

// 字符串转对象，ex：'tom' => { name: 'Tom' }
const convert2Obj = compose(genObj('name'), capitalize)

// 数组转数组对象，ex：['tom'] => [{ name: 'Tom' }]
const convertName = map(convert2Obj)

console.log(convertName(['tom', 'bob', 'alice']))
```

> 这儿使用到了 [ramda ](https://ramda.cn/)包中的 `curry` 和 `compose` 函数。

从上面例子可知，函数式编程就是通过函数的组合变换去解决问题的一种编程方式。

------



## 函数式编程的特点

- 声明式函数

  函数式编程大多时候都是在声明我需要做什么，而非怎么去做。

  声明式编程具有以下优点：

  - **简化开发者的工作**
  - **减少重复工作**
  - **留下改进的空间**
  - **提供全局协调能力**

- 纯函数

  函数式编程使用**纯函数**组合变换计算，纯函数指的是**相同的输入，永远会得到相同的输出**。

  纯函数有以下特征：

  - **不依赖外部状态**，例如全局变量，this等，只依赖于传入的参数

  - **数据不可变**：纯函数不修改全局变量，不修改入参，不修改对象，当需要修改一个对象时，应该创建一个新的对象用来修改，而不是修改已有的对象。

  - **无副作用**：副作用是在计算结果的过程中，系统状态的一种变化，或者与外部世界进行的可观察的交互。

    > 副作用可能包含，但不限于：更改文件系统、往数据库插入记录、发送一个 http 请求、可变数据、打印/log、获取用户输入、DOM 查询、访问系统状态等。

------



## 如何使用函数式编程

函数式编程中，函数是一等公民，那么怎么把一个复杂函数转换成多个单元函数，然后怎么把多个单元函数组合起来按顺序依次执行呢，这时候就需要用到**柯里化（curry）和函数组合（compose）**了。

### 柯里化curry

柯里化的就是将一个多元函数，转换成一个依次调用的单元函数。

```javascript
f(a,b,c) → f(a)(b)(c)
```

##### 举例： curry化的加法函数

```javascript
var add = function(x) {
  return function(y) {
    return x + y;
  };
};

var increment = add(1);
var addTen = add(10);

increment(2);
// 3

addTen(2);
// 12
```



### 函数组合compose

函数组合就是将多个函数组合成一个函数。

```javascript
const compose = require('ramda')

const f = x => x + 1;
const g = x => x * 2;
const fg = compose(f, g);
fg(1) //3
```

函数组合让代码变得简单而富有可读性，同时通过不同的组合方式，我们可以轻易组合出其他常用函数，让我们的代码更具表现力。