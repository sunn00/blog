---
title: "标准库 -- String"
date: 2022-03-24 17:25:00
sidebar: "auto"
categories:
  - 基础三剑客
tags:
  - JavaScript
---

## 静态方法

### String.fromCharCode()

该方法的参数是一个或多个数值，代表 Unicode 码点，返回值是这些码点组成的字符串。

```javascript
String.fromCharCode(); // ""
String.fromCharCode(97); // "a"
String.fromCharCode(104, 101, 108, 108, 111);
// "hello"
```

## 实例属性

### String.prototype.length

返回字符串实例的长度

## 实例方法

### String.prototype.charAt()

返回指定位置的字符，参数是从`0`开始编号的位置。可以直接使用下标代替.

如果参数为负数，或大于等于字符串的长度，`charAt`返回空字符串。

```js
var s = new String("abc");

s.charAt(1); // "b"
s.charAt(s.length - 1); // "c"

// 等同于
s[1]; // "b"
```

### charCodeAt()

返回字符串指定位置的 Unicode 码点（十进制表示），相当于`String.fromCharCode()`的逆操作。

如果没有任何参数，`charCodeAt`返回首字符的 Unicode 码点。

如果参数为负数，或大于等于字符串的长度，`charCodeAt`返回`NaN`。

### concat()

用于连接两个字符串，**返回一个新字符串**，**不改变原字符串**。该方法可以接受多个参数。如果参数不是字符串，`concat`方法会将其先转为字符串，然后再连接。

### slice()

用于从原字符串取出子字符串并返回，不改变原字符串。它的第一个参数是子字符串的开始位置，第二个参数是子字符串的结束位置（不含该位置）。
