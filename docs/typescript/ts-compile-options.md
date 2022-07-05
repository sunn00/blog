---
title: "tsconfig.json 配置文件"
date: 2022-03-30 11:16:00
sidebar: "auto"
categories:
  - 语言基础
tags:
  - TypeScript
---

> 要想创建对象，必须要先定义类，类可以理解为对象的模型，程序中可以根据类创建指定类型的对象。



<!-- more -->

## 编译选项

### 自动编译文件

编译文件时，使用`-w`指令，TS编译器会自动监视文件变化，并在文件发生变化时重新编译

`tsc xxx.ts -w`



### 编译模块

在该项目下新建一个`tsconfig.json`文件

执行`tsc`，会依据config配置文件进行编译



#### 配置选项

- include
  - 定义希望被编译文件所在目录
  - 默认值`["\*\*/\*"]`
  - 示例：
    - `"include": ["src/*\*/\*",  "tests/\*\*/\*"]`
    - 上述示例中，所有src目录和tests目录下的文件都会被编译
  
- exclude
  - 定义需要排除在外的目录
  - 默认值`["node_modules", "bower_components",  "jspm_packages"]`
  - 示例：
    - `"exclude": ["./src/hello/\*\*/\*"]`
    - src下hello目录下的文件都不会被编译
  
- extends
  - 定义被继承的配置文件
  - 示例
    - `"extends": "./config/base"`
    - 当前配置文件中会自动包含config目录下base.json中所有配置信息
  
- files
  - 指定被编译文件中列表，只有需要编译的文件少时才会用到
  
- compilerOptions
  - 编译选项时配置文件中非常重要也比较复杂的配置选项
    - 项目选项
      - target
        - 设置ts代码编译的目标版本
        - 可选值：
          - "ES3"（默认）, "ES5", "ES6", "ES2015", "ES2016", "ES2017", "ES2018", "ES2019", "ES2020", "ES2021", "ES2022", "ESNext"
      
      - lib
        - 指定代码运行时所包含的库（宿主环境）
        - 可选值：
          - "ES5", "ES6", "ES2015", "ES2015.Collection", "ES2015.Core", "ES2015.Generator", "ES2015.Iterable", "ES2015.Promise", "ES2015.Proxy"...
      
      - module
        - 设置编译后代码使用的模块化系统
        - 可选值：
          - "CommonJS", "AMD", "System", "UMD", "ES6", "ES2015", "ES2020", "ESNext", "None", "ES2022", "Node12", "NodeNext"
      
      - outDir
        - 编译后文件所在目录，默认情况下，编译后的js文件会和ts文件位于相同的目录，设置outDir后可以改变编译后文件的位置
      
      - outFile
        - 将编译后代码合并为一个文件
      
      - allowJs
        - 是否对js文件进行编译，默认为false
      
      - checkJs
        - 是否检查js代码是否符合语法规范，默认为false
      
      - removeComments
        - 是否移除注释，默认为true
      
      - noEmit
        - 不生成编译后的文件
      
      - noEmitOnError
        - 在报错后不生成
      
      - alwaysStrict
      
        - 用来设置编译后的文件是否使用严格模式，默认为false
      
      - noImplicitAny
      
        - 不允许隐式any类型，默认为false
      
          ```typescript
          function fn(a, b) {
          	return a + b;  // 会报错
          }
          
          function fn(a: number, b: number) {
          	return a + b;  // 不会报错
          }
          ```
      
      - noImplicitThis
      
        - 不允许指向不明确类型的this，默认为false
      
          ```typescript
          function fn() {
          	alert(this)  // 会报错
          }
          
          function fn(this: Window) {
          	alert(this)  // 不会报错
          }
          ```
      
      - strictNullChecks
      
        - 严格检查空值
      
          ```typescript
          let box1 = document.getElementById('box1');
          box1.addEventListener('click', function() { alert('hello') }); // 此时box1不确定是否存在
          
          if (box1 !== null) {
            box1.addEventListener('click', function() { alert('hello') }); // 不会报错
          }
          // or
          box1?.addEventListener('click', function() { alert('hello') }); // 不会报错
          ```
      
      - strict
      
        - 所有严格检查的总开关



## vscode自动编译

1. 执行 `tsc --init`， 创建tsconfig.json文件

2. 使用vscode打开项目文件夹，运行 终端 -> 运行任务 -> 选择里面的tsc:监视

   ![20190625153821419](/Users/sunruonan/Typora_pic/20190625153821419.png)

   选择完成后，在vscode 终端内会有以下显示，此时我们在编写.ts文件时便会自动编译成 js 