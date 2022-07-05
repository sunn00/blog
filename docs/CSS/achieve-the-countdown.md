---
title: "用纯CSS实现炫酷的倒数样式"
date: 2022-06-29 22:53:00
sidebar: "auto"
categories:
  - 基础三剑客
tags:
  - CSS
---

> 使用纯CSS实现一个炫酷的动态倒数，在这篇文章中你可以学习到CSS的@property属性，可以将CSS变量设置成动画，就像颜色变化一样；CSS计数器可以随意改变字符类型还可以自定义最后一帧的字符。

<!-- more -->



## 基本概念

### CSS自定义属性

自定义属性是由开发者定义的可以在文档中重复使用的一个变量，由`--`标记符定义（eg. `--main-color: black;`）；由`var()`函数来获取值（eg. `color: var(--main-color);`），函数的第一个参数是自定义属性的名称。如果提供了第二个参数，则表示备用值。



### CSS计数器

使用计数器可以根据内容在文档的位置调整其显示逻辑，例如自动为网页标题编号或更改有序列表的编号。

本质上 CSS 计数器是由 CSS 维护的变量，这些变量可能根据 CSS 规则跟踪使用次数以递增或递减。你可以自定义一个计数器，也可以修改 `list-item` 这一默认生成的应用于所有有序列表的计数器。

#### 使用

在使用计数器之前，必须使用 [`counter-reset`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/counter-reset) 属性初始化计数器的值。计数器可通过 [`counter-increment`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/counter-increment) 属性指定其值为递增或递减。当前计数器的值可通过 [`counter()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/counter) 或 [`counters()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/counters) 函数显示出来，这**通常会在[伪元素](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements)的 [`content`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/content) 属性中使用。**



`counter-reset`：给计数器初始化值

```
counter-reset: section; // 将名为 section 的计数器初始化为默认值（0）
counter-reset: section page 3 topic; // 将名为 section 和 topic 的计数器初始化为默认值，并将 page 计数器的初始值指定为 3
```



` counter-increment`：指定计数器为递增或递减。在计数器的名称后可以指定单次递增或递减的值（正数或负数）。



`counter() counters()`：使计数器的值显示在content属性中。

当不需要包含父级上下文的编号，而仅需要嵌套内容的编号时，应使用 [`counter()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/counter) 函数。

```
1 One
  1 Nested one
  2 Nested two
2 Two
  1 Nested one
  2 Nested two
  3 Nested three
3 Three
```

当需要同时包含父级上下文和嵌套内容的编号时，应使用 [`counters()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/counters) 函数。

```
1 One
  1.1 Nested one
  1.2 Nested two
2 Two
  2.1 Nested one
  2.2 Nested two
  2.3 Nested three
3 Three
```

[`counter()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/counter) 函数有两种形式： `counter(<counter-name>)` 和 `counter(<counter-name>, <counter-style>)`。生成的文本是伪元素范围内指定名称的最内层计数器的值。

[`counters()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/counters) 函数也同样有两种形式：`counters(<counter-name>, <separator>)` 和 `counters(<counter-name>, <separator>, <counter-style>)`。生成的文本由在伪元素范围内所有指定名称的计数器的值组成。这些值从最外层到最内层，使用指定的字符串（`<separator>`）分隔。



#### 反向计数器

反向计数器是一种用于递减（而非递增）的计数器。反向计数器可以通过在 [`counter-reset`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/counter-reset) 属性中将计数器的名称使用 `reversed()` 函数包裹来创建。

反向计数器的默认初始值与元素的数量相同（不同于常规的默认初始值为 0 的计数器）。这使得实现从元素数量为初始值倒数到 1 的计数器变得更加容易。



#### 列表计数器（list-item）

使用 `ol`元素创建的有序列表，会自动应用名为 `list-item` 的计数器。



### CSS动画

动画分为CSS补间动画与JS帧动画：

**帧动画**：使用定时器，每隔一段时间，更改当前的元素 

**补间动画：** 过渡（加过渡只要状态发生改变产生动画）动画(多个节点来控制动画)性能会更好

#### transition

当监听的属性发生变化时触发过渡，通常搭配事件触发使用，只有首尾两个阶段的过渡，较为单一。

##### 属性值

| 描述                      | 属性                                                         |
| ------------------------- | ------------------------------------------------------------ |
| transition-property       | 需要过渡的属性，也可以是all，不能用block，none等             |
| transition-duration       | 指定从一个属性到另一个属性过渡所要花费的时间。默认值为0，为0时，表示变化是瞬时的，看不到过渡效果 |
| transiton-timing-function | 就是过渡的动画类型。可用的类型有liner（匀速）、ease-in(减速)、ease-out（加速）ease-in-out（先加速再减速）、cubic-bezier：三次贝塞尔曲线，可以定制 |
| transition-delay          | 指定检测到过渡行为之后延迟一定时间后才开始进行执行           |

##### 特性

- 需要事件触发，不能在网页加载时自动触发
- 只有开始结束两个状态
- 只能过渡一次，不能重复过渡
- 一条transition只能定义一个属性



#### animation

##### 属性值

| 属性                      | 描述                                                         |
| :------------------------ | ------------------------------------------------------------ |
| animation-name            | 用来调用@keyframes定义好的动画，与@keyframes定义的动画名称一致 |
| animation-duration        | 规定动画完成一个周期所花费的秒或毫秒。默认是 0               |
| animation-timing-function | 速度曲线，和transition-timing-function一样，可用的类型有liner（匀速）、ease-in(减速)、ease-out（加速）ease-in-out（先加速再减速）、cubic-bezier：三次贝塞尔曲线，可以定制 |
| animation-delay           | 规定动画何时开始，默认是 0                                   |
| animation-iteration-count | 规定动画被播放的次数。默认是 1                               |
| animation-direction       | normal 默认值，如果设置为normal时，动画每次循环都是向前（即按顺序）播放，alternate（轮流），动画播放在第偶数次向前播放，第奇数次向反方向播放（animation-iteration-count取值大于1时设置有效） |
| animation-play-state      | running，可以通过该值将暂停的动画重新播放，这里的重新播放不是从元素动画的开始播放，而是从暂停的那个位置开始播放，paused，暂停播放 |
| animation-fill-mode       | 默认情况下，动画结束后，元素的样式将回到起始状态，animation-fill-mode属性可以控制动画结束后元素的样式。主要具有四个属性值：none（默认，回到动画没开始时的状态。），forwards（动画结束后动画停留在结束状态），backwords（动画回到第一帧的状态），both（根据animation-direction轮流应用forwards和backwards规则） |



#### transition && animation 区别

| 区别                   | transition                    | animation                             |
| ---------------------- | ----------------------------- | ------------------------------------- |
| 是否能自动执行         | 不能，需要事件触发，比如hover | 能                                    |
| 能否重复发生           | 不能，除非在一次触发          | 能                                    |
| 能否包含多个状态       | 不能，只有开始和结束状态      | 能，比如从0% 到100%，任意指定过渡状态 |
| 能否暂停               | 不能，一次性                  | 能，比如hover事件触发暂停             |
| 能否定义速度曲线       | 能                            | 能                                    |
| 能否定义某个属性值过渡 | 能                            | 能                                    |



### `@property`

`@property` 规则提供了一个直接在样式表中注册自定义属性的方式，而无需运行任何 JS 代码。

```css
@property --property-name {
  syntax: '<color>';
  inherits: false;
  initial-value: #c0ffee;
}
// syntax 和 inherits 描述符是必需的; 如果其中任何一项缺失，整条规则都将失效并且会被忽略。
```



### @counter-style

`@counter-style`让开发者可以自定义 counter 的样式。 一个 `@counter-style` 定义了如何把一个计数器的值转化为字符串表示。



## 实现

demo: https://codepen.io/sunn00/pen/ExEaJrx

HTML

```html
<count-down></count-down>
```

CSS

```css
@property --t {
  syntax: "<integer>";
  inherits: false;
  initial-value: 0;
}
@counter-style stop {
  system: cyclic;
  symbols: "Let's Start~";
  range: infinite 0;
}
html,
body {
  margin: 0;
  height: 100%;
  display: grid;
  background-color: #ff9671;
  place-content: center;
}
count-down {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Consolas, Monaco, monospace;
  font-size: 100px;
}
count-down::after {
  --t: 5;
  --dur: 1;
  counter-reset: time var(--t);
  content: counter(time, stop);
  color: #fff;
  animation: count calc(var(--t) * var(--dur) * 1s) steps(var(--t)) forwards,
    shark calc(var(--dur) * 1s) calc(var(--dur) * 0.8s) calc(var(--t));
}
@keyframes count {
  to {
    --t: 0;
  }
}
@keyframes shark {
  0% {
    opacity: 1;
    transform: translateY(0), scale(1.5);
  }

  20% {
    opacity: 0;
    transform: translateY(100px);
  }
  21% {
    transform: translateY(-100px) scale(0.5);
  }
}

count-down:active::after {
  animation: none;
}
```

