(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{620:function(t,s,a){"use strict";a.r(s);var n=a(9),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("节点都是单个对象，有时需要一种数据结构，能够容纳多个节点。DOM 提供两种节点集合，用于容纳多个节点："),a("code",[t._v("NodeList")]),t._v("和"),a("code",[t._v("HTMLCollection")]),t._v("。两者区别在于，"),a("code",[t._v("NodeList")]),t._v("可以包含各种类型的节点，"),a("code",[t._v("HTMLCollection")]),t._v("只能包含 HTML 元素节点。")]),t._v(" "),a("h2",{attrs:{id:"nodelist-接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodelist-接口"}},[t._v("#")]),t._v(" NodeList 接口")]),t._v(" "),a("h3",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),a("p",[a("code",[t._v("NodeList")]),t._v("实例是一个类数组对象，它的成员是节点对象。通过以下方法可以得到"),a("code",[t._v("NodeList")]),t._v("实例。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Node.childNodes")])]),t._v(" "),a("li",[a("code",[t._v("document.querySelectorAll()")]),t._v("等节点搜索方法")])]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("注意")])]),t._v(" "),a("p",[t._v("NodeList 实例可能是动态集合，也可能是静态集合。所谓动态集合就是一个活的集合，DOM 删除或新增一个相关节点，都会立刻反映在 NodeList 实例。目前，只有"),a("code",[t._v("Node.childNodes")]),t._v("返回的是一个动态集合，其他的 NodeList 都是静态集合。")])]),t._v(" "),a("h3",{attrs:{id:"属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),a("h4",{attrs:{id:"length"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#length"}},[t._v("#")]),t._v(" length")]),t._v(" "),a("p",[a("code",[t._v("length")]),t._v("属性返回 NodeList 实例包含的节点数量。对于那些不存在的 HTML 标签，"),a("code",[t._v("length")]),t._v("属性返回"),a("code",[t._v("0")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),a("h4",{attrs:{id:"foreach"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#foreach"}},[t._v("#")]),t._v(" forEach()")]),t._v(" "),a("p",[a("code",[t._v("forEach")]),t._v("方法用于遍历 NodeList 的所有成员。它接受一个回调函数作为参数，每一轮遍历就执行一次这个回调函数，用法与数组实例的"),a("code",[t._v("forEach")]),t._v("方法完全一致。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 回调函数f的三个参数依次是当前成员、位置和当前 NodeList 实例。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// forEach方法的第二个参数，用于绑定回调函数内部的this，该参数可省略。")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" children "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("childNodes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nchildren"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" list")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"item"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#item"}},[t._v("#")]),t._v(" item()")]),t._v(" "),a("p",[a("code",[t._v("item")]),t._v("方法接受一个整数值作为参数，表示成员的位置，返回该位置上的成员。")]),t._v(" "),a("p",[t._v("如果参数值大于实际长度，或者索引不合法（比如负数），"),a("code",[t._v("item")]),t._v("方法返回"),a("code",[t._v("null")]),t._v("。如果省略参数，"),a("code",[t._v("item")]),t._v("方法会报错。")]),t._v(" "),a("p",[t._v("与[]运算符功能相同，一般是用方括号运算符。")]),t._v(" "),a("h4",{attrs:{id:"keys-、values-、entries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keys-、values-、entries"}},[t._v("#")]),t._v(" keys()、values()、entries()")]),t._v(" "),a("p",[t._v("这三个方法都返回一个 ES6 的遍历器对象，可以通过"),a("code",[t._v("for...of")]),t._v("循环遍历获取每一个成员的信息。区别在于，"),a("code",[t._v("keys()")]),t._v("返回键名的遍历器，"),a("code",[t._v("values()")]),t._v("返回键值的遍历器，"),a("code",[t._v("entries()")]),t._v("返回的遍历器同时包含键名和键值的信息。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" children "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("childNodes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" key "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("keys")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" value "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// #text")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// <script>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" entry "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("entries")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("entry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Array [ 0, #text ]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Array [ 1, <script> ]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n")])])]),a("h2",{attrs:{id:"htmlcollection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#htmlcollection"}},[t._v("#")]),t._v(" HTMLCollection")]),t._v(" "),a("h3",{attrs:{id:"概述-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述-2"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),a("p",[a("code",[t._v("HTMLCollection")]),t._v("是一个节点对象的集合，只能包含元素节点（element），不能包含其他类型的节点。它的返回值是一个类似数组的对象，但是与"),a("code",[t._v("NodeList")]),t._v("接口不同，"),a("code",[t._v("HTMLCollection")]),t._v("没有"),a("code",[t._v("forEach")]),t._v("方法，只能使用"),a("code",[t._v("for")]),t._v("循环遍历。")]),t._v(" "),a("p",[t._v("返回"),a("code",[t._v("HTMLCollection")]),t._v("实例的，主要是一些"),a("code",[t._v("Document")]),t._v("对象的集合属性，比如"),a("code",[t._v("document.links")]),t._v("、"),a("code",[t._v("document.forms")]),t._v("、"),a("code",[t._v("document.images")]),t._v("等。"),a("code",[t._v("HTMLCollection")]),t._v("实例都是"),a("strong",[t._v("动态集合")]),t._v("，节点的变化会实时反映在集合中。")]),t._v(" "),a("p",[t._v("如果元素节点有"),a("code",[t._v("id")]),t._v("或"),a("code",[t._v("name")]),t._v("属性，那么"),a("code",[t._v("HTMLCollection")]),t._v("实例上面，可以使用"),a("code",[t._v("id")]),t._v("属性或"),a("code",[t._v("name")]),t._v("属性引用该节点元素。如果没有对应的节点，则返回"),a("code",[t._v("null")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// HTML 代码如下")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// <img id="pic" src="http://example.com/foo.jpg">')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" pic "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pic"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("images"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pic "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" pic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),a("h3",{attrs:{id:"属性-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性-2"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),a("h4",{attrs:{id:"length-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#length-2"}},[t._v("#")]),t._v(" length")]),t._v(" "),a("p",[a("code",[t._v("length")]),t._v("属性返回"),a("code",[t._v("HTMLCollection")]),t._v("实例包含的成员数量。")]),t._v(" "),a("h3",{attrs:{id:"方法-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法-2"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),a("h4",{attrs:{id:"item-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#item-2"}},[t._v("#")]),t._v(" item()")]),t._v(" "),a("p",[t._v("同 NodeList")]),t._v(" "),a("h4",{attrs:{id:"nameditem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nameditem"}},[t._v("#")]),t._v(" namedItem()")]),t._v(" "),a("p",[a("code",[t._v("namedItem")]),t._v("方法的参数是一个字符串，表示"),a("code",[t._v("id")]),t._v("属性或"),a("code",[t._v("name")]),t._v("属性的值，返回当前集合中对应的元素节点。如果没有对应的节点，则返回"),a("code",[t._v("null")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// HTML 代码如下")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// <img id="pic" src="http://example.com/foo.jpg">')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" pic "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pic"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("images"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("namedItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pic"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("images"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" pic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);