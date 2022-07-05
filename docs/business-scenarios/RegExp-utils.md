---
title: "整理正则表达式的常用应用场景"
date: 2022-03-24 15:06:33
sidebar: "auto"
categories:
  - 业务场景
  - 前端工具
tags:
  - RegExp
---



#### 格式化货币（三位分隔）

```js
const formatMoney = (money) => {
  return money.replace(new RegExp(`(?!^)(?=(\\d{3})+${money.includes('.') ? '\\.' : '$'})`, 'g'), ',')  
}

formatMoney('123456789') // '123,456,789'
formatMoney('123456789.123') // '123,456,789.123'
formatMoney('123') // '123'
```

#### 获取路由参数

```js
const getQueryByName = (name) => {
  const queryNameRegex = new RegExp(`[?&]${name}=([^&]*)(&|$)`)
  const queryNameMatch = window.location.search.match(queryNameRegex)
  // Generally, it will be decoded by decodeURIComponent
  return queryNameMatch ? decodeURIComponent(queryNameMatch[1]) : ''
}

const name = getQueryByName('name')
const age = getQueryByName('age')

console.log(name, age) // fatfish, 100
```

#### 转义HTML（防止XSS攻击）

```js
const escape = (string) => {
  const escapeMaps = {
    '&': 'amp',
    '<': 'lt',
    '>': 'gt',
    '"': 'quot',
    "'": '#39'
  }
  // The effect here is the same as that of /[&amp;<> "']/g
  const escapeRegexp = new RegExp(`[${Object.keys(escapeMaps).join('')}]`, 'g')
  return string.replace(escapeRegexp, (match) => `&${escapeMaps[match]};`)
}

console.log(escape(`
  <div>
    <p>hello world</p>
  </div>
`))
/*
&lt;div&gt;
  &lt;p&gt;hello world&lt;/p&gt;
&lt;/div&gt;
*/
```

#### 反转义HTML

```js
const unescape = (string) => {
  const unescapeMaps = {
    'amp': '&',
    'lt': '<',
    'gt': '>',
    'quot': '"',
    '#39': "'"
  }
  const unescapeRegexp = /&([^;]+);/g
  return string.replace(unescapeRegexp, (match, unescapeKey) => {
    return unescapeMaps[ unescapeKey ] || match
  })
}

console.log(unescape(`
  &lt;div&gt;
    &lt;p&gt;hello world&lt;/p&gt;
  &lt;/div&gt;
`))
/*
<div>
  <p>hello world</p>
</div>
*/
```

#### 检查URL的前缀是否以HTTPS或HTTP开头

```js
const checkProtocol = /^https?:/

console.log(checkProtocol.test('https://medium.com/')) // true
console.log(checkProtocol.test('http://medium.com/')) // true
console.log(checkProtocol.test('//medium.com/')) // false
```

#### 按照3-4-4格式划分电话号码

```js
let mobile = '18379836654' 
let mobileReg = /(?=(\d{4})+$)/g 

console.log(mobile.replace(mobileReg, '-')) // 183-7983-6654
```

