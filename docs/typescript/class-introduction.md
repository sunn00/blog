---
title: "类的简介"
date: 2022-03-30 16:16:00
sidebar: "auto"
categories:
  - 语言基础
tags:
  - TypeScript
---

> 要想创建对象，必须要先定义类，类可以理解为对象的模型，程序中可以根据类创建指定类型的对象。



<!-- more -->



## 定义类

模板

```typescript
class 类名 {
  属性名: 类型;

  constructor(参数: 类型) {
    this.属性名 = 参数;
  }

  方法名() {
    ...
  }
}
```



示例

```typescript
class Person{
  name: string;
  age: number;

  constructor(name:string, age:number) {
    this.name = name;
    this.age = age
  }

  sayHello() {
    alert(`hi, i am ${this.name}`)
  }
}
```

