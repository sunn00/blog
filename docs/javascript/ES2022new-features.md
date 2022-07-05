---
title: "ECMA2022新特性"
date: 2022-07-03 21:43:00
sidebar: "auto"
categories:
  - 基础三剑客
tags:
  - JavaScript
---



## Top-level Await

顶层 `await` 允许我们在 `async` 函数外面使用 `await` 关键字。它允许模块充当大型异步函数，通过顶层 `await`，这些 `ECMAScript` 模块可以等待资源加载。这样其他导入这些模块的模块在执行代码之前要等待资源加载完再去执行。

example：

```javascript
  // a.js
  const resp = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = resp.json();
  export { users};

  // usingAwait.js
  import {users} from './a.mjs';

  console.log(users);
  console.log('usingAwait module');
```

#### 实际场景应用

##### 动态加载模块

```js
 const strings = await import(`/i18n/${navigator.language}`);
```

##### 资源初始化

```js
const connection = await dbConnector();
```

##### 依赖回退

```js
let translations;
try {
  translations = await import('https://app.fr.json');
} catch {
  translations = await import('https://fallback.en.json');
}
```

#### 兼容性

![图片](/Users/sunruonan/sunrn_blog/docs/.vuepress/public/img/640-20220701230447133.png)



## Object.hasOwn

`Object.hasOwn` 特性是一种更简洁、更可靠的检查属性是否直接设置在对象上的方法，与`Object.prototype.hasOwnProperty()`功能一样。

```js
const example = {
  property: '123'
};

console.log(Object.prototype.hasOwnProperty.call(example, 'property'));
console.log(Object.hasOwn(example, 'property'));
```

#### 兼容性

![图片](/Users/sunruonan/sunrn_blog/docs/.vuepress/public/img/640-20220701230459835.png)



## at()

`at()` 是一个数组方法，用于通过给定索引来获取数组元素。当给定索引为正时，这种新方法与使用括号表示法访问具有相同的行为。当给出负整数索引时，就会从数组的最后一项开始检索。



## error.cause

在 ECMAScript 2022 规范中，`new Error()` 中可以指定导致它的原因。



## 正则表达式匹配索引 /d

```js
const matchObj = /(a+)(b+)/d.exec('aaaabb');

console.log(matchObj[1]) // 'aaaa'
console.log(matchObj[2]) // 'bb'
```

由于 `/d` 标识的存在，`matchObj`还有一个属性`.indices`，它用来记录捕获的每个编号组：

```js
console.log(matchObj.indices[1])  // [0, 4]
console.log(matchObj.indices[2])  // [4, 6]
```



我们还可以使用命名组：

```js
const matchObj = /(?<as>a+)(?<bs>b+)/d.exec('aaaabb');

console.log(matchObj.groups.as);  // 'aaaa'
console.log(matchObj.groups.bs);  // 'bb'
```

这里给两个字符匹配分别命名为`as`和`bs`，然后就可以通过`groups`来获取到这两个命名分别匹配到的字符串。

它们的索引存储在 `matchObj.indices.groups` 中：

```js
console.log(matchObj.indices.groups.as);  // [0, 4]
console.log(matchObj.indices.groups.bs);  // [4, 6]
```



## 类

#### 公共实例字段

公共类字段语法允许我们直接将实例属性作为属性添加到类上，而无需使用构造函数方法。

> 它现在还不是标准的 ECMAScript，默认是不开启的，如果使用 `create-react-app` 创建 React 项目，那么它默认是启用的，否则我们必须使用正确的babel插件才能正常使用（`@babel/preset-env`）。

##### 注意事项：

- 公共实例字段存在于每个创建的类实例上。它们要么是在`Object.defineProperty()`中添加，要么是在基类中的构造时添加（构造函数主体执行之前执行），要么在子类的`super()`返回之后添加：

```js
class Incrementor {
  count = 0
}

const instance = new Incrementor();
console.log(instance.count); // 0
```

- 未初始化的字段会自动设置为 `undefined`

- 可以进行字段的计算：

  ```js
  const PREFIX = 'main';
  
  class Incrementor {
    [`${PREFIX}Count`] = 0   // 用中括号包裹起来
  }
  
  const instance = new Incrementor();
  console.log(instance.mainCount);   // 0
  ```

  

#### 私有实例字段、方法和访问器

默认情况下，ES6 中所有属性都是公共的，可以在类外绕过setter进行检查或修改。私有类字段将使用哈希`#`前缀定义，可以修改它以包含私有类字段，以防止在类方法之外更改属性。还可以将方法或 `getter/setter` 设为私有，只需要给这些方法名称前面加`#`即可。

```js
class TimeTracker {
  name = 'zhangsan';
  project = 'blog';
  #hours = 0;   // 私有类字段

  set #addHours(hour) {
    this.#hours += hour;
  }

  get #timeSheet() {
    return `${this.name} works ${this.#hours || 'nothing'} hours on ${this.project}`;
  }

  constructor(hours) {
    this.#addHours = hours;
    console.log(this.#timeSheet);
  }
}

let person = new TimeTracker(4); // zhangsan works 4 hours on blog
```



#### 静态公共字段

静态公共字段：不能在类的每个实例中访问静态字段或方法，**只能在原型中访问**。

ES 2022 提供了一种在 JavaScript 中使用 `static` 关键字声明静态类字段的方法。

- 静态字段只能通过静态方法访问。
- 静态字段和方法是从父类继承的。

```js
class Shape {
  static color = 'blue';

  static getColor() {
    return this.color;
  }

  getMessage() {
    return `color：${this.color}` ;
  }
}

console.log(Shape.color); // blue
console.log(Shape.getColor()); // blue
console.log('color' in Shape); // true
console.log('getColor' in Shape); // true
console.log('getMessage' in Shape); // false

const shapeInstance = new Shape();
console.log(shapeInstance.color); // undefined
console.log(shapeInstance.getColor); // undefined
console.log(shapeInstance.getMessage());// color：undefined


console.log(Shape.getColor()); // blue
console.log(Shape.getMessage()); //TypeError: Shape.getMessage is not a function
// 解决
// getMessage() {
//   return `color：${Shape.color}` ;
// }
```



### 静态私有字段和方法

与私有实例字段和方法一样，静态私有字段和方法也使用哈希 (#) 前缀来定义。

私有静态字段有一个限制：只有定义私有静态字段的类才能访问该字段。

