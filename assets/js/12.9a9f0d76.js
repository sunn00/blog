(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{596:function(t,a,s){"use strict";s.r(a);var n=s(9),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("使用纯CSS实现一个炫酷的动态倒数，在这篇文章中你可以学习到CSS的@property属性，可以将CSS变量设置成动画，就像颜色变化一样；CSS计数器可以随意改变字符类型还可以自定义最后一帧的字符。")])]),t._v(" "),s("h2",{attrs:{id:"基本概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),s("h3",{attrs:{id:"css自定义属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css自定义属性"}},[t._v("#")]),t._v(" CSS自定义属性")]),t._v(" "),s("p",[t._v("自定义属性是由开发者定义的可以在文档中重复使用的一个变量，由"),s("code",[t._v("--")]),t._v("标记符定义（eg. "),s("code",[t._v("--main-color: black;")]),t._v("）；由"),s("code",[t._v("var()")]),t._v("函数来获取值（eg. "),s("code",[t._v("color: var(--main-color);")]),t._v("），函数的第一个参数是自定义属性的名称。如果提供了第二个参数，则表示备用值。")]),t._v(" "),s("h3",{attrs:{id:"css计数器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css计数器"}},[t._v("#")]),t._v(" CSS计数器")]),t._v(" "),s("p",[t._v("使用计数器可以根据内容在文档的位置调整其显示逻辑，例如自动为网页标题编号或更改有序列表的编号。")]),t._v(" "),s("p",[t._v("本质上 CSS 计数器是由 CSS 维护的变量，这些变量可能根据 CSS 规则跟踪使用次数以递增或递减。你可以自定义一个计数器，也可以修改 "),s("code",[t._v("list-item")]),t._v(" 这一默认生成的应用于所有有序列表的计数器。")]),t._v(" "),s("h4",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),s("p",[t._v("在使用计数器之前，必须使用 "),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/counter-reset",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("counter-reset")]),s("OutboundLink")],1),t._v(" 属性初始化计数器的值。计数器可通过 "),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/counter-increment",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("counter-increment")]),s("OutboundLink")],1),t._v(" 属性指定其值为递增或递减。当前计数器的值可通过 "),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/counter",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("counter()")]),s("OutboundLink")],1),t._v(" 或 "),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/counters",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("counters()")]),s("OutboundLink")],1),t._v(" 函数显示出来，这"),s("strong",[t._v("通常会在"),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements",target:"_blank",rel:"noopener noreferrer"}},[t._v("伪元素"),s("OutboundLink")],1),t._v("的 "),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/content",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("content")]),s("OutboundLink")],1),t._v(" 属性中使用。")])]),t._v(" "),s("p",[s("code",[t._v("counter-reset")]),t._v("：给计数器初始化值")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("counter-reset: section; // 将名为 section 的计数器初始化为默认值（0）\ncounter-reset: section page 3 topic; // 将名为 section 和 topic 的计数器初始化为默认值，并将 page 计数器的初始值指定为 3\n")])])]),s("p",[s("code",[t._v("counter-increment")]),t._v("：指定计数器为递增或递减。在计数器的名称后可以指定单次递增或递减的值（正数或负数）。")]),t._v(" "),s("p",[s("code",[t._v("counter() counters()")]),t._v("：使计数器的值显示在content属性中。")]),t._v(" "),s("p",[t._v("当不需要包含父级上下文的编号，而仅需要嵌套内容的编号时，应使用 "),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/counter",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("counter()")]),s("OutboundLink")],1),t._v(" 函数。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("1 One\n  1 Nested one\n  2 Nested two\n2 Two\n  1 Nested one\n  2 Nested two\n  3 Nested three\n3 Three\n")])])]),s("p",[t._v("当需要同时包含父级上下文和嵌套内容的编号时，应使用 "),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/counters",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("counters()")]),s("OutboundLink")],1),t._v(" 函数。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("1 One\n  1.1 Nested one\n  1.2 Nested two\n2 Two\n  2.1 Nested one\n  2.2 Nested two\n  2.3 Nested three\n3 Three\n")])])]),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/counter",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("counter()")]),s("OutboundLink")],1),t._v(" 函数有两种形式： "),s("code",[t._v("counter(<counter-name>)")]),t._v(" 和 "),s("code",[t._v("counter(<counter-name>, <counter-style>)")]),t._v("。生成的文本是伪元素范围内指定名称的最内层计数器的值。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/counters",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("counters()")]),s("OutboundLink")],1),t._v(" 函数也同样有两种形式："),s("code",[t._v("counters(<counter-name>, <separator>)")]),t._v(" 和 "),s("code",[t._v("counters(<counter-name>, <separator>, <counter-style>)")]),t._v("。生成的文本由在伪元素范围内所有指定名称的计数器的值组成。这些值从最外层到最内层，使用指定的字符串（"),s("code",[t._v("<separator>")]),t._v("）分隔。")]),t._v(" "),s("h4",{attrs:{id:"反向计数器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#反向计数器"}},[t._v("#")]),t._v(" 反向计数器")]),t._v(" "),s("p",[t._v("反向计数器是一种用于递减（而非递增）的计数器。反向计数器可以通过在 "),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/counter-reset",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("counter-reset")]),s("OutboundLink")],1),t._v(" 属性中将计数器的名称使用 "),s("code",[t._v("reversed()")]),t._v(" 函数包裹来创建。")]),t._v(" "),s("p",[t._v("反向计数器的默认初始值与元素的数量相同（不同于常规的默认初始值为 0 的计数器）。这使得实现从元素数量为初始值倒数到 1 的计数器变得更加容易。")]),t._v(" "),s("h4",{attrs:{id:"列表计数器-list-item"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#列表计数器-list-item"}},[t._v("#")]),t._v(" 列表计数器（list-item）")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("ol")]),t._v("元素创建的有序列表，会自动应用名为 "),s("code",[t._v("list-item")]),t._v(" 的计数器。")]),t._v(" "),s("h3",{attrs:{id:"css动画"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css动画"}},[t._v("#")]),t._v(" CSS动画")]),t._v(" "),s("p",[t._v("动画分为CSS补间动画与JS帧动画：")]),t._v(" "),s("p",[s("strong",[t._v("帧动画")]),t._v("：使用定时器，每隔一段时间，更改当前的元素")]),t._v(" "),s("p",[s("strong",[t._v("补间动画：")]),t._v(" 过渡（加过渡只要状态发生改变产生动画）动画(多个节点来控制动画)性能会更好")]),t._v(" "),s("h4",{attrs:{id:"transition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transition"}},[t._v("#")]),t._v(" transition")]),t._v(" "),s("p",[t._v("当监听的属性发生变化时触发过渡，通常搭配事件触发使用，只有首尾两个阶段的过渡，较为单一。")]),t._v(" "),s("h5",{attrs:{id:"属性值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性值"}},[t._v("#")]),t._v(" 属性值")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("描述")]),t._v(" "),s("th",[t._v("属性")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("transition-property")]),t._v(" "),s("td",[t._v("需要过渡的属性，也可以是all，不能用block，none等")])]),t._v(" "),s("tr",[s("td",[t._v("transition-duration")]),t._v(" "),s("td",[t._v("指定从一个属性到另一个属性过渡所要花费的时间。默认值为0，为0时，表示变化是瞬时的，看不到过渡效果")])]),t._v(" "),s("tr",[s("td",[t._v("transiton-timing-function")]),t._v(" "),s("td",[t._v("就是过渡的动画类型。可用的类型有liner（匀速）、ease-in(减速)、ease-out（加速）ease-in-out（先加速再减速）、cubic-bezier：三次贝塞尔曲线，可以定制")])]),t._v(" "),s("tr",[s("td",[t._v("transition-delay")]),t._v(" "),s("td",[t._v("指定检测到过渡行为之后延迟一定时间后才开始进行执行")])])])]),t._v(" "),s("h5",{attrs:{id:"特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[t._v("#")]),t._v(" 特性")]),t._v(" "),s("ul",[s("li",[t._v("需要事件触发，不能在网页加载时自动触发")]),t._v(" "),s("li",[t._v("只有开始结束两个状态")]),t._v(" "),s("li",[t._v("只能过渡一次，不能重复过渡")]),t._v(" "),s("li",[t._v("一条transition只能定义一个属性")])]),t._v(" "),s("h4",{attrs:{id:"animation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#animation"}},[t._v("#")]),t._v(" animation")]),t._v(" "),s("h5",{attrs:{id:"属性值-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性值-2"}},[t._v("#")]),t._v(" 属性值")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("animation-name")]),t._v(" "),s("td",[t._v("用来调用@keyframes定义好的动画，与@keyframes定义的动画名称一致")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("animation-duration")]),t._v(" "),s("td",[t._v("规定动画完成一个周期所花费的秒或毫秒。默认是 0")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("animation-timing-function")]),t._v(" "),s("td",[t._v("速度曲线，和transition-timing-function一样，可用的类型有liner（匀速）、ease-in(减速)、ease-out（加速）ease-in-out（先加速再减速）、cubic-bezier：三次贝塞尔曲线，可以定制")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("animation-delay")]),t._v(" "),s("td",[t._v("规定动画何时开始，默认是 0")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("animation-iteration-count")]),t._v(" "),s("td",[t._v("规定动画被播放的次数。默认是 1")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("animation-direction")]),t._v(" "),s("td",[t._v("normal 默认值，如果设置为normal时，动画每次循环都是向前（即按顺序）播放，alternate（轮流），动画播放在第偶数次向前播放，第奇数次向反方向播放（animation-iteration-count取值大于1时设置有效）")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("animation-play-state")]),t._v(" "),s("td",[t._v("running，可以通过该值将暂停的动画重新播放，这里的重新播放不是从元素动画的开始播放，而是从暂停的那个位置开始播放，paused，暂停播放")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("animation-fill-mode")]),t._v(" "),s("td",[t._v("默认情况下，动画结束后，元素的样式将回到起始状态，animation-fill-mode属性可以控制动画结束后元素的样式。主要具有四个属性值：none（默认，回到动画没开始时的状态。），forwards（动画结束后动画停留在结束状态），backwords（动画回到第一帧的状态），both（根据animation-direction轮流应用forwards和backwards规则）")])])])]),t._v(" "),s("h4",{attrs:{id:"transition-animation-区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transition-animation-区别"}},[t._v("#")]),t._v(" transition && animation 区别")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("区别")]),t._v(" "),s("th",[t._v("transition")]),t._v(" "),s("th",[t._v("animation")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("是否能自动执行")]),t._v(" "),s("td",[t._v("不能，需要事件触发，比如hover")]),t._v(" "),s("td",[t._v("能")])]),t._v(" "),s("tr",[s("td",[t._v("能否重复发生")]),t._v(" "),s("td",[t._v("不能，除非在一次触发")]),t._v(" "),s("td",[t._v("能")])]),t._v(" "),s("tr",[s("td",[t._v("能否包含多个状态")]),t._v(" "),s("td",[t._v("不能，只有开始和结束状态")]),t._v(" "),s("td",[t._v("能，比如从0% 到100%，任意指定过渡状态")])]),t._v(" "),s("tr",[s("td",[t._v("能否暂停")]),t._v(" "),s("td",[t._v("不能，一次性")]),t._v(" "),s("td",[t._v("能，比如hover事件触发暂停")])]),t._v(" "),s("tr",[s("td",[t._v("能否定义速度曲线")]),t._v(" "),s("td",[t._v("能")]),t._v(" "),s("td",[t._v("能")])]),t._v(" "),s("tr",[s("td",[t._v("能否定义某个属性值过渡")]),t._v(" "),s("td",[t._v("能")]),t._v(" "),s("td",[t._v("能")])])])]),t._v(" "),s("h3",{attrs:{id:"property"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#property"}},[t._v("#")]),t._v(" "),s("code",[t._v("@property")])]),t._v(" "),s("p",[s("code",[t._v("@property")]),t._v(" 规则提供了一个直接在样式表中注册自定义属性的方式，而无需运行任何 JS 代码。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token atrule"}},[s("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@property")]),t._v(" --property-name")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("syntax")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<color>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("inherits")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" false"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("initial-value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #c0ffee"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n// syntax 和 inherits 描述符是必需的"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" 如果其中任何一项缺失，整条规则都将失效并且会被忽略。\n")])])]),s("h3",{attrs:{id:"counter-style"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#counter-style"}},[t._v("#")]),t._v(" @counter-style")]),t._v(" "),s("p",[s("code",[t._v("@counter-style")]),t._v("让开发者可以自定义 counter 的样式。 一个 "),s("code",[t._v("@counter-style")]),t._v(" 定义了如何把一个计数器的值转化为字符串表示。")]),t._v(" "),s("h2",{attrs:{id:"实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),s("p",[t._v("demo: https://codepen.io/sunn00/pen/ExEaJrx")]),t._v(" "),s("p",[t._v("HTML")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("count-down")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("count-down")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("CSS")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token atrule"}},[s("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@property")]),t._v(" --t")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("syntax")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<integer>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("inherits")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" false"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("initial-value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token atrule"}},[s("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@counter-style")]),t._v(" stop")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("system")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cyclic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("symbols")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Let\'s Start~"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" infinite 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("html,\nbody")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #ff9671"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("place-content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("count-down")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-items")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("justify-content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Consolas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Monaco"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" monospace"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("count-down::after")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("--t")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("--dur")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("counter-reset")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" time "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("var")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("--t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("counter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #fff"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" count "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("calc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("var")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("--t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" * "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("var")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("--dur"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" * 1s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("var")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("--t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" forwards"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    shark "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("calc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("var")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("--dur"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" * 1s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("calc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("var")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("--dur"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" * 0.8s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("calc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("var")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("--t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token atrule"}},[s("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@keyframes")]),t._v(" count")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("to")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("--t")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token atrule"}},[s("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@keyframes")]),t._v(" shark")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("0%")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("opacity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("translateY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scale")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("1.5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("20%")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("opacity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("translateY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("21%")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("translateY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scale")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0.5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("count-down:active::after")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);