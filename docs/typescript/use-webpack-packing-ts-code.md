---
title: "通过webpack打包ts文件"
date: 2022-03-30 11:16:00
sidebar: "auto"
categories:
  - 语言基础
tags:
  - TypeScript
---

> 要想创建对象，必须要先定义类，类可以理解为对象的模型，程序中可以根据类创建指定类型的对象。



<!-- more -->



1. 下载依赖

   ```bash
   npm init -y
   yarn add -D typescript
   yarn add -D webpack webpack-cli  // webpack打包工具
   yarn add -D webpack-dev-server  // 热重载
   yarn add -D html-webpack-plugin   // 打包自动引入的html模板
   yarn add -D clean-webpack-plugin // 每次打包都会清空之前的打包文件
   yarn add -D ts-loader  // 将webpack和typescript进行整合，让他们成为一体
   yarn add -D cross-env  // 全局设置env
   ```

2. 添加配置文件，设置打包配置

   ```javascript
   // webpack.congif.js
   // 引入一个路径包
   const path = require('path')
   
   const HTMLWebpackPlugin = require('html-webpack-plugin')
   const { CleanWebpackPlugin } = require('clean-webpack-plugin')
   
   const isProd = process.env.NODE_ENV === 'production' // 是否生产环境
   
   // 配置信息
   module.exports = {
     // 指定打包环境
     mode: isProd ? 'production' : 'development',
   
     // 入口文件
     entry: "./src/index.ts",
   
     // 指定打包文件所在目录
     output: {
       // 指定打包文件的目录
       path: path.resolve(__dirname, 'dist'),
   
       // 打包后文件的文件
       filename: "bundle.js",
   
       environment: {
         arrowFunction: false,  // 若需要兼容的浏览器不支持箭头函数，要加上这一句告诉webpack不使用
       }
     },
   
     // 指定webpack打包时要使用到的模块
     module: {
       // 指定loader的加载规则
       rules: [
         {
           // test指定规则生效的文件, 为正则表达式·
           test: /\.ts$/,
           // 要使用的loader, 从下向上加载
           use: [
             {
               // 指定加载器
               loader: "babel-loader",
               // 配置babel
               options: {
                 // 设置预定义的环境
                 presets: [
                   [
                     // 指定环境插件
                     "@babel/preset-env",
                     // 配置信息
                     {
                       // 要兼容的目标浏览器
                       // targets: { "chrome": "88" },
                       targets: { "browsers": ["ie >= 8"] },
   
                       // 指定corejs的版本
                       "corejs": "3",
                       // 使用corejs的方式， usage 表示按需加载
                       "useBuiltIns": "usage"
                     }
                   ]
                 ]
               }
   
             },
             "ts-loader"
           ],
           // 要排除的文件
           exclude: /node-modules/
         }
       ]
     },
   
     // 配置webpack的插件
     plugins: [
       // 会在打包目录下自动生成一个html文件，并引入相关文件
       new HTMLWebpackPlugin({
         // title: '自定义title' // 自定义html文件的title
         template: './src/index.html', // 指定html的生成模板
       }),
       new CleanWebpackPlugin(),
     ],
   
     // 设置引用模块（哪些文件可以被引用) 
     resolve: {
       extensions: ['.ts', '.js']
     },
   
     devServer: {
       host: 'localhost', // 主机名
       stats: 'errors-only', // 打包日志输出输出错误信息
       port: 8081,
       open: true
     },
   }
   ```

3. 为兼容老版本浏览器，引入babel-loader(新语法转旧语法，支持新技术)

   ```bash
   yarn add -D @babel/core @babel/preset-env babel-loader core-js
   // preset-env 预设环境
   // core-js 模拟js运行环境
   ```
   ```json
   {
     // 指定加载器
     loader: "babel-loader",
     // 配置babel
     options: {
       // 设置预定义的环境
       presets: [
         [
           // 指定环境插件
           "@babel/preset-env",
           // 配置信息
           {
             // 要兼容的目标浏览器
             // targets: { "chrome": "88" },
             targets: { "browsers": ["ie >= 8"] },
   
             // 指定corejs的版本
             "corejs": "3",
             // 使用corejs的方式， usage 表示按需加载
             "useBuiltIns": "usage"
           }
         ]
       ]
   
     }
   }
   ```
   配置tsconfig.json文件

   ```json
   {
     "compilerOptions": {
       "target": "ES2015",
       "module": "ES2015",
       "strict": true,
     }
   }
   ```

4. 配置打包命令

   ```json
   "dev": "cross-env NODE_ENV=development webpack-dev-server --config build/webpack.config.js",
   "build": "cross-env NODE_ENV=production webpack --config build/webpack.config.js"
   ```

5. 运行与打包

   ```bash
   yarn dev
   yarn build
   ```
