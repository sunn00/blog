(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{621:function(e,t,_){"use strict";_.r(t);var v=_(9),n=Object(v.a)({},(function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h2",{attrs:{id:"属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[e._v("#")]),e._v(" 属性")]),e._v(" "),_("h3",{attrs:{id:"nodetype"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#nodetype"}},[e._v("#")]),e._v(" nodeType")]),e._v(" "),_("p",[_("code",[e._v("nodeType")]),e._v("属性返回一个整数值，表示节点的类型。")]),e._v(" "),_("p",[e._v("Node 对象定义了几个常量，对应这些类型值。")]),e._v(" "),_("p",[e._v("不同节点的"),_("code",[e._v("nodeType")]),e._v("属性值和对应的常量如下。")]),e._v(" "),_("ul",[_("li",[e._v("文档节点（document）：9，对应常量"),_("code",[e._v("Node.DOCUMENT_NODE")])]),e._v(" "),_("li",[e._v("元素节点（element）：1，对应常量"),_("code",[e._v("Node.ELEMENT_NODE")])]),e._v(" "),_("li",[e._v("属性节点（attr）：2，对应常量"),_("code",[e._v("Node.ATTRIBUTE_NODE")])]),e._v(" "),_("li",[e._v("文本节点（text）：3，对应常量"),_("code",[e._v("Node.TEXT_NODE")])]),e._v(" "),_("li",[e._v("文档片断节点（DocumentFragment）：11，对应常量"),_("code",[e._v("Node.DOCUMENT_FRAGMENT_NODE")])]),e._v(" "),_("li",[e._v("文档类型节点（DocumentType）：10，对应常量"),_("code",[e._v("Node.DOCUMENT_TYPE_NODE")])]),e._v(" "),_("li",[e._v("注释节点（Comment）：8，对应常量"),_("code",[e._v("Node.COMMENT_NODE")])])]),e._v(" "),_("h3",{attrs:{id:"nodename"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#nodename"}},[e._v("#")]),e._v(" nodeName")]),e._v(" "),_("p",[_("code",[e._v("nodeName")]),e._v("属性返回节点的名称。")]),e._v(" "),_("p",[e._v("不同节点的"),_("code",[e._v("nodeName")]),e._v("属性值如下。")]),e._v(" "),_("ul",[_("li",[e._v("文档节点（document）："),_("code",[e._v("#document")])]),e._v(" "),_("li",[e._v("元素节点（element）：大写的标签名")]),e._v(" "),_("li",[e._v("属性节点（attr）：属性的名称")]),e._v(" "),_("li",[e._v("文本节点（text）："),_("code",[e._v("#text")])]),e._v(" "),_("li",[e._v("文档片断节点（DocumentFragment）："),_("code",[e._v("#document-fragment")])]),e._v(" "),_("li",[e._v("文档类型节点（DocumentType）：文档的类型")]),e._v(" "),_("li",[e._v("注释节点（Comment）："),_("code",[e._v("#comment")])])]),e._v(" "),_("h3",{attrs:{id:"nodevalue"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#nodevalue"}},[e._v("#")]),e._v(" nodeValue")]),e._v(" "),_("p",[_("code",[e._v("nodeValue")]),e._v("属性返回一个字符串，表示当前节点本身的文本值，该属性可读写。")]),e._v(" "),_("p",[e._v("只有文本节点（text）、注释节点（comment）和属性节点（attr）有文本值，因此这三类节点的"),_("code",[e._v("nodeValue")]),e._v("可以返回结果，其他类型的节点一律返回"),_("code",[e._v("null")]),e._v("。同样的，也只有这三类节点可以设置"),_("code",[e._v("nodeValue")]),e._v("属性的值，其他类型的节点设置无效。")]),e._v(" "),_("h3",{attrs:{id:"textcontent"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#textcontent"}},[e._v("#")]),e._v(" textContent")]),e._v(" "),_("p",[_("code",[e._v("textContent")]),e._v("属性返回当前节点和它的"),_("strong",[e._v("所有后代节点")]),e._v("的文本内容。")]),e._v(" "),_("p",[e._v("对于文本节点（text）、注释节点（comment）和属性节点（attr），"),_("code",[e._v("textContent")]),e._v("属性的值与"),_("code",[e._v("nodeValue")]),e._v("属性相同。对于其他类型的节点，该属性会将每个子节点（不包括注释节点）的内容连接在一起返回。如果一个节点没有子节点，则返回空字符串。")]),e._v(" "),_("p",[e._v("该属性是可读写的，设置该属性的值，会用一个新的文本节点，替换所有原来的子节点。它还有一个好处，就是自动对 HTML 标签转义。这很适合用于用户提供的内容。")]),e._v(" "),_("div",{staticClass:"language-js extra-class"},[_("pre",{pre:!0,attrs:{class:"language-js"}},[_("code",[e._v("document"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[e._v("getElementById")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),_("span",{pre:!0,attrs:{class:"token string"}},[e._v('"foo"')]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("textContent "),_("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<p>GoodBye!</p>"')]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 上面代码在插入文本时，会将<p>标签解释为文本，而不会当作标签处理。")]),e._v("\n")])])]),_("blockquote",[_("p",[e._v("文档节点（document）和文档类型节点（doctype）的"),_("code",[e._v("textContent")]),e._v("属性为"),_("code",[e._v("null")]),e._v("。")]),e._v(" "),_("p",[e._v("如果要读取整个文档的内容，可以用"),_("code",[e._v("document.documentElement.textContent")]),e._v("。")])]),e._v(" "),_("h3",{attrs:{id:"baseuri"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#baseuri"}},[e._v("#")]),e._v(" baseURI")]),e._v(" "),_("p",[_("code",[e._v("baseURI")]),e._v("属性返回一个字符串，表示当前网页的绝对路径。浏览器根据这个属性，计算网页上的相对路径的 URL。该属性为只读。")])])}),[],!1,null,null,null);t.default=n.exports}}]);