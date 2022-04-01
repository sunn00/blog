---
title: "html2canvas的使用"
date: 2022-03-28 10:30:00
sidebar: "auto"
categories:
  - Business Scenarios
tags:
  - html
  - canvas
---

> html2canvas是一个非常流行的前端开源工具，在GitHub上已有25k+的stars。在项目开发中，我们经常使用他来实现一些生成截图的需求。html2canvas的主要功能是将前端页面中的HTML按照一定规则绘制在Canvas中，之后我们可以对Canvas进行读取和导出，从而达到类似于截图的效果。



<!-- more -->



## How to use

1. 安装

   ```bash
   npm i html2canvas
   or
   yarn add html2canvas
   ```

2. 引入

   ```javascript
   import html2canvas from 'html2canvas';
   ```

3. 截图并下载

   html2canvas就是一个函数，在页面渲染完成之后直接调用即可。

   ```
   视图渲染完成的事件：
   1. Angular的ngAfterViewInit方法
   2. React的componentDidMount方法
   3. Vue的mounted方法
   ```

   可以只传一个参数，就是你要截图的DOM元素，该函数返回一个Promise对象，在它的then方法中可以获取到绘制好的canvas对象，通过调用canvas对象的toDataURL方法就可以将其转换成图片。

   拿到图片的URL之后，我们可以

   1. 将其放到`<img>`标签的src属性中，让其显示在网页中；
   2. 也可以将其放到`<a>`标签的href属性中，将该图片下载到本地磁盘中。

   ```javascript
   html2canvas(document.querySelector('.main')).then(canvas => {
     const link = document.createElement('a'); // 创建一个超链接对象实例
     const event = new MouseEvent('click'); // 创建一个鼠标事件的实例
     link.download = 'Button.png'; // 设置要下载的图片的名称
     link.href = canvas.toDataURL(); // 将图片的URL设置到超链接的href中
     link.dispatchEvent(event); // 触发超链接的点击事件
   });
   
   ```

------



## 参数

```typescript
html2canvas(element: HTMLElement, options: object): Promise<HTMLCanvasElement>
```

该函数的第二个参数为`options`，`options`对象可选的值如下：

| **Name**               | **Default**               | **Description**                                              |
| ---------------------- | ------------------------- | ------------------------------------------------------------ |
| allowTaint             | `false`                   | 是否允许跨域图像污染画布                                     |
| backgroundColor        | `#ffffff`                 | 画布背景颜色，如果在DOM中没有指定，设置“null”（透明）        |
| canvas                 | `null`                    | 使用现有的“画布”元素，用来作为绘图的基础                     |
| foreignObjectRendering | `false`                   | 是否使用ForeignObject渲染（如果浏览器支持的话）              |
| imageTimeout           | `15000`                   | 加载图像的超时时间(毫秒)，设置为“0”以禁用超时                |
| ignoreElements         | `(element) => false`      | 从呈现中移除匹配元素                                         |
| logging                | `true`                    | 为调试目的启用日志记录                                       |
| onclone                | `null`                    | 回调函数，当文档被克隆以呈现时调用，可以用来修改将要呈现的内容，而不影响原始源文档。 |
| proxy                  | `null`                    | 用来加载跨域图片的代理URL，如果设置为空（默认），跨域图片将不会被加载 |
| removeContainer        | `true`                    | 是否清除html2canvas临时创建的克隆DOM元素                     |
| scale                  | `window.devicePixelRatio` | 用于渲染的缩放比例，默认为浏览器设备像素比                   |
| useCORS                | `false`                   | 是否尝试使用CORS从服务器加载图像                             |
| width                  | `Element` width           | `canvas`的宽度                                               |
| height                 | `Element` height          | `canvas`的高度                                               |
| x                      | `Element` x-offset        | `canvas`的x轴位置                                            |
| y                      | `Element` y-offset        | `canvas`的y轴位置                                            |
| scrollX                | `Element` scrollX         | 渲染元素时使用的x轴位置(例如，如果元素使用`position: fixed`) |
| scrollY                | `Element` scrollY         | 渲染元素时使用的y轴位置(例如，如果元素使用`position: fixed`) |
| windowWidth            | `Window.innerWidth`       | 渲染元素时使用的窗口宽度，这可能会影响诸如媒体查询之类的事情 |
| windowHeight           | `Window.innerHeight`      | 渲染元素时使用的窗口高度，这可能会影响诸如媒体查询之类的事情 |

> options有一个`ignoreElements`参数可以用来忽略某些元素，从渲染过程中移除，除了设置该参数外，还有一种忽略元素的方法，就是在需要忽略的元素上增加`data-html2canvas-ignore`属性。

------



## 基本原理概述

html2canvas的基本原理是对页面中已渲染的DOM元素的结构与样式信息进行解析，并且根据这些信息生成层叠结构，最后根据这些层叠结构按照顺序一层一层地在Canvas上绘制各个元素。

我将这一过程分为以下三个阶段

- 解析原始DOM为`ElementContainer`（与原始DOM层级结构类似）
- 解析`ElementContainer`为一组树状的层叠上下文（stackingContext，与原始DOM层级结构区别较大）
- 从最上层的层叠上下文开始，**递归地**对层叠上下文各层中的**节点和子层叠上下文**进行解析并按顺序绘制在Canvas上，针对要绘制的每个节点，主要有以下两个过程：
  - 解析节点的”效果“（变换、剪切、透明度）并应用于Canvas上
  - 在Canvas上绘制

------



