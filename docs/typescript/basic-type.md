---
title: "ts的基本类型"
date: 2022-03-30 15:30:00
sidebar: "auto"
categories:
  - 语言基础
tags:
  - TypeScript
---

> ts中可以使用的基本类型



<!-- more -->

## 基本类型

| 类型    | 例子              | 描述                               |
| ------- | ----------------- | ---------------------------------- |
| number  | 1, -33, 2.5       | 任意数字                           |
| string  | "hi", "123"       | 任意字符串                         |
| boolean | true, false       |                                    |
| 字面量  | 其本身            | 限制变量的值就是该字面量的值       |
| any     |                   | 任意类型（危险！少用）             |
| unknown |                   | 类型安全的any，表示未知类型        |
| void    | 空值（undefined） | 没有值，或undefined                |
| never   | 没有值            | 不能是任何值,例如throw Error       |
| object  | {name: "孙悟空"}  | 任意JS对象                         |
| array   | [1, 2, 3]         | 任意JS的数组                       |
| tuple   | [4, 5]            | 元素，TS新增类型，**固定长度数组** |
| enum    | enum{A, B}        | 枚举，TS新增类型                   |

> 如果变量的声明和赋值是同时进行的，TS可以自动对变量进行类型检查
>
> 若只声明变量没有指定类型，则默认为any类型



#### any和unknow

```typescript
let s: string;
let any: any;
let unknown: unknown;

s = any; // any类型的变量可以赋值给任意变量

s = unknown; // unknow类型的变量赋值给其他变量会报错

// 如果想将其赋值给其他变量，
// 1. 添加类型判断
if(typeof unknown === "string") {
  s = unknown
}

// 2. 类型断言, 用来告诉解析器变量的实际类型
// 语法：
// 变量 as 类型
// <类型>变量
s = unknown as string
// s = <string>unknown
```



#### object

```typescript
// object, 常用于当你希望某个对象有什么属性时使用
let object: {name: string};
// object = {}
object = { name: "sunn" }

// 属性通过 ? 可以作为可选
let obj1: { name: string, age?: number };
obj1 = {name: "sunn"}
obj1 = {name: "sunn", age: 18}

// 想要对象里只要有某几个属性就可以， 其他属性随意
let obj2: {name: string, [propName: string]: any};
obj2 = { name: "123", gender: "male", age: 18 }
```



### array

语法： 类型[]、Array<类型>

```typescript
let arr: string[];
let arr1: Array<string>; // 两种写法等价

arr = ["123", "234"]
// arr = ["123", "234", 1]
```



### enum

```typescript
enum Gender {
  Male,
  Female
}
let person: {name: string, gender: Gender};

person = {
  name: "sunn",
  gender: Gender.Female
}

console.log(person.gender === Gender.Female)
```



### 类型的别名

```typescript
type customeType = 1 | 2 | 3 | 4
let b: customeType;
b = 1;
// b = 5;
```

