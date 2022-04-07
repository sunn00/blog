---
title: "面试题--Vue系列一"
date: 2022-04-07 17:02:00
sidebar: "auto"
categories:
  - interviews
tags:
  - vue
---

<!-- more -->



## Vue是什么？有什么特性？

Vue.js是一个用于**创建用户界面的开源JavaScript框架**，也是一个**创建单页应用的Web应用框架**。

Vue所关注的核心是**MVC模式中的视图层**，同时，它也能方便地**获取数据更新**，并通过组件内部特定的方法**实现视图与模型的交互**。



#### Vue是数据驱动型（MVVM）

> MVVM（model-view-viewmodel），其中模型层：负责处理业务逻辑以及和服务器端进行交互；视图层：负责将（~~数据~~）数据模型（~~渲染~~）转化为UI页面上；视图模型层：是视图层与模型层之间的桥梁，负责二者间的通信。

![image-20220406113417349](/img/image-20220406113417349.png)



#### Vue是组件化的

组件化：在vue中每一个vue文件都可以视为一个组件，组件化是把图形、非图形的各种逻辑均抽象为一个统一的概念来实现开发的模式。

> 组件化的优点在于低耦合、可维护、方便调试。



#### Vue是指令系统

指令系统：指令 (Directives) 是带有 v- 前缀的特殊属性作用：当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM

***



## 说说你对SPA的理解

1. #### 什么是SPA

   `SPA`是一种网络应用程序或网站的模型，**它通过动态重写当前页面来与用户交互，这种方法避免了页面之间切换打断用户体验**。在单页应用中，所有必要的代码（`HTML`、`JavaScript`和`CSS`）都通过单个页面的加载而检索，或者根据需要（通常是为响应用户操作）动态装载适当的资源并添加到页面，**页面在任何时间点都不会重新加载**。



2. #### SPA与MPA的区别

   |                 | SPA                      | MPA                                 |
   | --------------- | ------------------------ | ----------------------------------- |
   | 组成            | 一个主页面与多个页面片段 | 多个主页面                          |
   | 刷新方式        | 局部刷新                 | 整页刷新                            |
   | url模式         | 哈希模式                 | 历史模式                            |
   | SEO搜索引擎优化 | 难实现，可用ssr改善      | 容易实现                            |
   | 数据传递        | 易实现                   | 通过url、cookie、localStorage等传递 |
   | 页面切换        | 速度快，用户体验好       | 切换加载资源，速度慢，用户体验差    |
   | 维护成本        | 相对容易                 | 相对复杂                            |



3. #### SPA的优缺点

   优点：

   - 具有桌面应用的即时性、网站的可移植性和可访问性
   - 用户体验好、快，内容的改变不需要重新加载整个页面
   - 良好的前后端分离，分工更明确

   缺点：

   - 不利于搜索引擎的抓取
   - 首次渲染速度相对较慢

***



## 实现一个SPA（vue-router的实现）

### 原理

1. 监听地址栏中`hash`变化驱动界面变化
2. 用`pushstate`记录浏览器的历史，驱动界面发送变化

![image-20220406113431111](/img/image-20220406113431111.png)

### 实现

##### `hash` 模式

核心通过监听`url`中的`hash`来进行路由跳转

```js
// 定义 Router  
class Router {  
    constructor () {  
        this.routes = {}; // 存放路由path及callback  
        this.currentUrl = '';  
          
        // 监听路由change调用相对应的路由回调  
        window.addEventListener('load', this.refresh, false);  
        window.addEventListener('hashchange', this.refresh, false);  
    }  
      
    route(path, callback){  
        this.routes[path] = callback;  
    }  
      
    push(path) {  
        this.routes[path] && this.routes[path]()  
    }  
}  
  
// 使用 router  
window.miniRouter = new Router();  
miniRouter.route('/', () => console.log('page1'))  
miniRouter.route('/page2', () => console.log('page2'))  
  
miniRouter.push('/') // page1  
miniRouter.push('/page2') // page2  
```



##### `history`模式

`history` 模式核心借用 `HTML5 history api`，`api` 提供了丰富的 `router` 相关属性先了解一个几个相关的api

- `history.pushState` 浏览器历史纪录添加记录
- `history.replaceState`修改浏览器历史纪录中当前纪录
- `history.popState` 当 `history` 发生变化时触发

```js
// 定义 Router  
class Router {  
    constructor () {  
        this.routes = {};  
        this.listerPopState()  
    }  
      
    init(path) {  
        history.replaceState({path: path}, null, path);  
        this.routes[path] && this.routes[path]();  
    }  
      
    route(path, callback){  
        this.routes[path] = callback;  
    }  
      
    push(path) {  
        history.pushState({path: path}, null, path);  
        this.routes[path] && this.routes[path]();  
    }  
      
    listerPopState () {  
        window.addEventListener('popstate' , e => {  
            const path = e.state && e.state.path;  
            this.routers[path] && this.routers[path]()  
        })  
    }  
}  
  
// 使用 Router  
  
window.miniRouter = new Router();  
miniRouter.route('/', ()=> console.log('page1'))  
miniRouter.route('/page2', ()=> console.log('page2'))  
  
// 跳转  
miniRouter.push('/page2')  // page2  
```

***



## 如何给SPA做SEO

1. ##### 使用SSR服务端渲染

   将组件或页面通过服务器生成html，再返回给浏览器，如`nuxt.js`

2. ##### 静态化

   目前主流的静态化主要有两种：

   （1）一种是通过程序将动态页面抓取并保存为静态页面，这样的页面的实际存在于服务器的硬盘中

   （2）另外一种是通过WEB服务器的 `URL Rewrite`的方式，它的原理是通过web服务器内部模块按一定规则将外部的URL请求转化为内部的文件地址，一句话来说就是**把外部请求的静态地址转化为实际的动态页面地址**，而静态页面实际是不存在的。这两种方法都达到了实现URL静态化的效果

3. ##### 使用`Phantomjs`针对爬虫处理

   原理是通过`Nginx`配置，判断访问来源是否为爬虫，如果是则搜索引擎的爬虫请求会转发到一个`node server`，再通过`PhantomJS`来解析完整的`HTML`，返回给爬虫。下面是大致流程图

   <img src="/img/image-20220406113441153.png" alt="image-20220406113441153" style="zoom:67%;" />

***



## v-if与v-show

#### 相同点

我们都知道在 `vue` 中 `v-show` 与 `v-if` 的作用效果是相同的(不含v-else)，都能控制元素在页面是否显示

在用法上也是相同的

```js
<Model v-show="isShow" />
<Model v-if="isShow" />
```

- 当表达式为`true`的时候，都会占据页面的位置
- 当表达式都为`false`时，都不会占据页面位置



#### 区别

- 控制手段不同
- 编译过程不同
- 编译条件不同



控制手段：`v-show`隐藏则是为该元素添加`css--display:none`，`dom`元素依旧还在。`v-if`显示隐藏是将`dom`元素整个添加或删除

编译过程：`v-if`切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；`v-show`只是简单的基于css切换

编译条件：`v-if`是真正的条件渲染，它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。只有渲染条件为假时，并不做操作，直到为真才渲染



- `v-show` 由`false`变为`true`的时候不会触发组件的生命周期
- `v-if`由`false`变为`true`的时候，触发组件的`beforeCreate`、`create`、`beforeMount`、`mounted`钩子，由`true`变为`false`的时候触发组件的`beforeDestory`、`destoryed`方法

性能消耗：`v-if`有更高的切换消耗；`v-show`有更高的初始渲染消耗；



#### 使用场景

`v-if` 相比 `v-show` 开销更大的（直接操作`dom`节点增加与删除）

如果需要非常频繁地切换，则使用 v-show 较好

如果在运行时条件很少改变，则使用 v-if 较好

***



## Vue实例挂载的过程

[原文地址](https://vue3js.cn/interview/vue/new_vue.html#%E4%B8%80%E3%80%81%E6%80%9D%E8%80%83 ) 

`new Vue()`这个过程中究竟做了些什么？过程中是如何完成数据的绑定，又是如何将数据渲染到视图的等等

- `new Vue`的时候调用会调用`_init`方法
  - 定义 `$set`、`$get` 、`$delete`、`$watch` 等方法
  - 定义 `$on`、`$off`、`$emit`、`$off`等事件
  - 定义 `_update`、`$forceUpdate`、`$destroy`生命周期
- 调用`$mount`进行页面的挂载
- 挂载的时候主要是通过`mountComponent`方法
- 定义`updateComponent`更新函数
- 执行`render`生成虚拟`DOM`
- `_update`将虚拟`DOM`生成真实`DOM`结构，并且渲染到页面中



注意点：

- 在调用`beforeCreate`之前，数据初始化并未完成，像`data`、`props`这些属性无法访问到
- 到了`created`的时候，数据已经初始化完成，能够访问`data`、`props`这些属性，但这时候并未完成`dom`的挂载，因此无法访问到`dom`元素
- 挂载方法是调用`vm.$mount`方法



- 初始化顺序：`props`、`methods`、`data`
- `data`定义的时候可选择函数形式或者对象形式（组件只能为函数形式）

***



## 谈谈对生命周期的理解？

#### 生命周期有哪些

| 生命周期                           | Vue2          | Vue3            |
| :--------------------------------- | ------------- | --------------- |
| 组件实例被创建之初                 | beforeCreate  | setup           |
| 组件实例已经完全创建               | created       | setup           |
| 组件挂载之前                       | beforeMount   | onBeforeMount   |
| 组件挂载到实例上去之后             | mounted       | onMounted       |
| 组件数据发生变化，更新之前         | beforeUpdate  | onBeforeUpdate  |
| 组件数据更新之后                   | updated       | onUpdated       |
| 组件实例销毁之前                   | beforeDestroy | onBeforeUnmount |
| 组件实例销毁之后                   | destroyed     | onUnmounted     |
| keep-alive 缓存的组件激活时        | activated     | onActivated     |
| keep-alive 缓存的组件停用时调用    | deactivated   | onDeactivated   |
| 捕获一个来自子孙组件的错误时被调用 | errorCaptured | onErrorCaptured |



#### 流程

![img](/img/44114780-3aca-11eb-85f6-6fac77c0c9b3.png)



#### 具体分析

###### beforeCreate -> created

- 初始化`vue`实例，进行数据观测

###### created

- 完成数据观测，属性与方法的运算，`watch`、`event`事件回调的配置
- 可调用`methods`中的方法，访问和修改data数据触发响应式渲染`dom`，可通过`computed`和`watch`完成数据计算
- 此时`vm.$el` 并没有被创建

###### created -> beforeMount

- 判断是否存在`el`选项，若不存在则停止编译，直到调用`vm.$mount(el)`才会继续编译
- 优先级：`render` > `template` > `outerHTML`
- `vm.el`获取到的是挂载`DOM`的

###### beforeMount

- 在此阶段可获取到`vm.el`
- 此阶段`vm.el`虽已完成DOM初始化，但并未挂载在`el`选项上

###### beforeMount -> mounted

- 此阶段`vm.el`完成挂载，`vm.$el`生成的`DOM`替换了`el`选项所对应的`DOM`

###### mounted

- `vm.el`已完成`DOM`的挂载与渲染，此刻打印`vm.$el`，发现之前的挂载点及内容已被替换成新的DOM

###### beforeUpdate

- 更新的数据必须是被渲染在模板上的（`el`、`template`、`render`之一）
- 此时`view`层还未更新
- 若在`beforeUpdate`中再次修改数据，不会再次触发更新方法

###### updated

- 完成`view`层的更新
- 若在`updated`中再次修改数据，会再次触发更新方法（`beforeUpdate`、`updated`）

###### beforeDestroy

- 实例被销毁前调用，此时实例属性与方法仍可访问

###### destroyed

- 完全销毁一个实例。可清理它与其它实例的连接，解绑它的全部指令及事件监听器
- 并不能清除DOM，仅仅销毁实例



#### 使用场景分析

| 生命周期      | 描述                                                         |
| ------------- | ------------------------------------------------------------ |
| beforeCreate  | 执行时组件实例还未创建，通常用于插件开发中执行一些初始化任务 |
| created       | 组件初始化完毕，各种数据可以使用，常用于异步数据获取         |
| beforeMount   | 未执行渲染、更新，dom未创建                                  |
| mounted       | 初始化结束，dom已创建，可用于获取访问数据和dom元素           |
| beforeUpdate  | 更新前，可用于获取更新前各种状态                             |
| updated       | 更新后，所有状态已是最新                                     |
| beforeDestory | 销毁前，可用于一些定时器或订阅的取消                         |
| destroyed     | 组件已销毁，作用同上                                         |

***



## v-if与v-for为什么不能一起使用？他们之间的优先级是怎么样的？

> 由于语法上存在歧义，建议避免在同一元素上同时使用两者。
>
> 1. 通过创建计算属性`computed`提前筛选出列表，并以此创建可见元素 （对元素进行判断）
> 2. 在外层嵌套`template`（页面渲染不生成`dom`节点），在这一层进行v-if判断，然后在内部进行v-for循环 （对数组进行判断）

#### Vue2

```js
const app = new Vue({
  el: "#app",
  data() {
    return {
      items: [
        { title: "foo" },
        { title: "baz" }]
    }
  },
  computed: {
    isShow() {
      return this.items && this.items.length > 0
    }
  }
})
```

模板指令的代码都会生成在`render`函数中，通过`app.$options.render`就能得到渲染函数

```js
ƒ anonymous() {
  with (this) { return 
    _c('div', { attrs: { "id": "app" } }, 
    _l((items), function (item) 
    { return (isShow) ? _c('p', [_v("\n" + _s(item.title) + "\n")]) : _e() }), 0) }
}
```

`_l`是`vue`的列表渲染函数，函数内部都会进行一次`if`判断

初步得到结论：`v-for`优先级是比`v-if`高



vue2源码：

```js
export function genElement (el: ASTElement, state: CodegenState): string {
  if (el.parent) {
    el.pre = el.pre || el.parent.pre
  }
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    ...
}
```

可以看出先判断`for`再判断`if`，所以`v-for`优先级是比`v-if`高



#### Vue3

两者作用于同一个元素上时，`v-if` 会拥有比 `v-for` 更高的优先级。

***



## SPA首屏加载速度慢怎么解决？

#### 什么是首屏加载时间

首屏加载可以说是用户体验中**最重要**的环节。首屏加载时间（First Contentful Paint），指浏览器从响应用户输入网址地址，到首屏内容渲染完成的时间，此时整个网页不一定要全部渲染完，但需要展示当前视窗需要的内容。



##### 计算首屏加载时间

利用`performance.timing`提供的数据：

![image.png](/img/2e2491a0-3acc-11eb-85f6-6fac77c0c9b3.png)

```js
// 方案一：
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('first contentful painting');
});
// 方案二：
performance.getEntriesByName("first-contentful-paint")[0].startTime

// performance.getEntriesByName("first-contentful-paint")[0]
// 会返回一个 PerformancePaintTiming的实例，结构如下：
{
  name: "first-contentful-paint",
  entryType: "paint",
  startTime: 507.80000002123415,
  duration: 0,
};
```

> 白屏时间：`performance.timing.responseStart - performance.timing.navigationStart`



#### 加载慢的原因

- 网络延时问题
- 资源文件体积是否过大
- 资源是否重复发送请求去加载了
- 加载脚本的时候，渲染内容堵塞了



#### 解决方案

![image.png](/img/4fafe900-3acc-11eb-85f6-6fac77c0c9b3.png)

- 减小入口文件体积

  路由懒加载，把不同路由对应的组件分割成不同的代码块，待路由被请求的时候会单独打包路由，使得入口文件变小，加载速度大大增加。

  在`vue-router`配置路由的时候，采用动态加载路由的形式

  ```js
  routes:[ 
      path: 'Blogs',
      name: 'ShowBlogs',
      component: () => import('./components/ShowBlogs.vue')
  ]
  ```

  以函数的形式加载路由，这样就可以把各自的路由文件分别打包，只有在解析给定的路由时，才会加载路由组件

  如果采用webpack打包，还可以添加注解，将路由进行分类打包

  ```js
  routes:[ 
      {
          path: 'Blogs',
          name: 'ShowBlogs',
          component: () => import(/* webpackChunkName: "workbench" */ '@/views/workbench/addTodoReminder.vue'),
      },
  ]
  
  ```

  

- 静态资源本地缓存

  后端返回资源问题：

  - 采用`HTTP`缓存，设置`Cache-Control`，`Last-Modified`，`Etag`等响应头
  - 采用`Service Worker`离线缓存

  前端合理利用`localStorage`

- UI框架按需加载

- 图片资源的压缩

- 组件重复打包

- 开启GZip压缩

- 使用SSR



> 减少首屏渲染时间的方法有很多，总的来讲可以分成两大部分 ：资源加载优化 和 页面渲染优化

***



## 为什么data属性要返回一个函数而不是对象？

> 根实例对象`data`可以是对象也可以是函数（根实例是单例），不会产生数据污染情况
>
> 组件实例对象`data`必须为函数，**目的是为了防止多个组件实例对象之间共用一个`data`，产生数据污染。**采用函数的形式，`initData`时会将其作为工厂函数都会返回全新`data`对象

#### 原因

在定义vue组件时，`vue`最终会通过`vue.extend()`构成组件实例，如果用函数定义data属性，他们都指向同一个内存地址，如果修改componentA的data，componentB的data也会随之改变，而用函数定义data属性，因为函数返回的对象内存地址并不相同，使每个实例对象的数据不会受到其他实例对象数据的污染

***



## 动态给vue的data添加一个新的属性时会发生什么？怎样解决？

#### demo

```html
<p v-for="(value,key) in item" :key="key">
    {{ value }}
</p>
<button @click="addProperty">动态添加新属性</button>
```

实例化一个`vue`实例，定义`data`属性和`methods`方法

```js
const app = new Vue({
    el:"#app",
   	data:()=>{
       	item:{
            oldProperty:"旧属性"
        }
    },
    methods:{
        addProperty(){
            this.items.newProperty = "新属性"  // 为items添加新属性
            console.log(this.items)  // 输出带有newProperty的items
        }
    }
})
```

点击按钮，发现结果不及预期，数据虽然更新了（`console`打印出了新属性），但页面并没有更新



#### 原因

vue2是通过`Object.defineProperty`实现数据响应式，当我们访问或修改数据时会触发getter或setter，但是我们为`obj`添加新属性的时候，却无法触发事件属性的拦截，因为一开始只有`obj`的`foo`属性被设成了响应式数据，而`bar`是后面新增的属性，并没有通过`Object.defineProperty`设置成响应式数据。

```js
const obj = {}
Object.defineProperty(obj, 'foo', {
        get() {
            console.log(`get foo:${val}`);
            return val
        },
        set(newVal) {
            if (newVal !== val) {
                console.log(`set foo:${newVal}`);
                val = newVal
            }
        }
    })
}
```



#### 解决方案

`Vue2` 不允许在已经创建的实例上动态添加新的响应式属性

若想实现数据与视图同步更新，可采取下面三种解决方案：

- `Vue.set( target, propertyName/index, value )`

- `this.someObject = Object.assign({}, this.someObject, {newProperty1: 1, newProperty2: 2 ...})`

- `$forcecUpdated()`

  $forceUpdate迫使Vue 实例重新渲染

  PS：仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件。



#### 结论

- 如果为对象添加少量的新属性，可以直接采用`Vue.set()`
- 如果需要为新对象添加大量的新属性，则通过`Object.assign()`创建新对象
- 如果你实在不知道怎么操作时，可采取`$forceUpdate()`进行强制刷新 (不建议)

PS：`vue3`是用过`proxy`实现数据响应式的，直接动态添加新属性仍可以实现数据响应式

***



## 插件是什么？与组件的区别

插件通常用来为 `Vue` 添加全局功能。插件的功能范围没有严格的限制——一般有下面几种：

- 添加全局方法或者属性。如: `vue-custom-element`
- 添加全局资源：指令/过滤器/过渡等。如 `vue-touch`
- 通过全局混入来添加一些组件选项。如`vue-router`
- 添加 `Vue` 实例方法，通过把它们添加到 `Vue.prototype` 上实现。
- 一个库，提供自己的 `API`，同时提供上面提到的一个或多个功能。如`vue-router`



#### 插件与组件的区别

##### 编写形式

###### 组件：

编写一个组件，可以有很多方式，我们最常见的就是`vue`单文件的这种格式，每一个`.vue`文件我们都可以看成是一个组件



###### 插件：

`vue`插件的实现应该暴露一个 `install` 方法。这个方法的第一个参数是 `Vue` 构造器，第二个参数是一个可选的选项对象

```js
MyPlugin.install = function (Vue, options) {
  // 1. 添加全局方法或 property
  Vue.myGlobalMethod = function () {
    // 逻辑...
  }

  // 2. 添加全局资源
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      // 逻辑...
    }
    ...
  })

  // 3. 注入组件选项
  Vue.mixin({
    created: function () {
      // 逻辑...
    }
    ...
  })

  // 4. 添加实例方法
  Vue.prototype.$myMethod = function (methodOptions) {
    // 逻辑...
  }
}
```



##### 注册形式

###### 组件：

```js
// 全局注册
Vue.component('my-component-name', { /* ... */ })

// 局部注册
const component1 = {...} // 定义一个组件

export default {
	components:{
		component1   // 局部注册
	}
}
```



###### 插件：

插件的注册通过`Vue.use()`的方式进行注册（安装），第一个参数为插件的名字，第二个参数是可选择的配置项

```js
Vue.use(插件名字,{ /* ... */} )
```

> 注册插件的时候，需要在调用 `new Vue()` 启动应用之前完成
>
> `Vue.use`会自动阻止多次注册相同插件，只会注册一次



#### 使用场景

组件 `(Component)` 是用来构成你的 `App` 的业务模块，它的目标是 `App.vue`

插件 `(Plugin)` 是用来增强你的技术栈的功能模块，它的目标是 `Vue` 本身

简单来说，插件就是指对`Vue`的功能的增强或补充

***



## 组件通信的方式有哪些？

#### 分类

- 父子组件之间的通信
- 兄弟组件之间的通信
- 祖孙与后代组件之间的通信
- 非关系组件间之间的通信

<img src="/img/85b92400-3aca-11eb-ab90-d9ae814b240d.png" alt="img" style="zoom:67%;" />



#### 通信方案

##### 通过 props 传递

| 使用场景 | 父组件传递数据给子组件                                       |
| -------- | ------------------------------------------------------------ |
| 描述     | 子组件设置`props`属性，定义接收父组件传递过来的参数，父组件在使用子组件标签中通过字面量来传递值 |

```js
// Child.vue
props:{  
    // 字符串形式  
 name:String // 接收的类型参数  
    // 对象形式  
    age:{    
        type:Number, // 接收的类型为数值  
        defaule:18,  // 默认值为18  
       require:true // age属性必须传递  
    }  
}  

// Parent.vue
<Children name="jack" age=18 />  
```

##### 通过 $emit 触发自定义事件

| 使用场景 | 子组件传递数据给父组件                                       |
| -------- | ------------------------------------------------------------ |
| 描述     | 子组件通过`$emit触发`自定义事件，`$emit`第二个参数为传递的数值，父组件绑定监听器获取到子组件传递过来的参数 |

```js
// Child.vue
this.$emit('add', goods) 

// Parent.vue
<Children @add="cartAdd($event)" />  
```

##### 使用 ref

| 使用场景 | 父组件获取子组件数据                                         |
| -------- | ------------------------------------------------------------ |
| 描述     | 父组件在使用子组件的时候设置`ref`，父组件通过设置子组件`ref`来获取数据 |

```js
<Children ref="foo" />  
  
this.$refs.foo  // 获取子组件实例，通过子组件实例我们就能拿到对应的数据  
```

##### EventBus

| 使用场景 | 常用与兄弟组件传递数据， 可以用于各种组建通信类型            |
| -------- | ------------------------------------------------------------ |
| 描述     | 创建一个中央事件总线`EventBus` ，兄弟组件通过`$emit`触发自定义事件， 另一个兄弟组件通过`$on`监听自定义事件 |

```js
// Bus.js 创建一个中央时间总线类  
class Bus {  
  constructor() {  
    this.callbacks = {};   // 存放事件的名字  
  }  
  
  $on(name, fn) {  
    this.callbacks[name] = this.callbacks[name] || [];  
    this.callbacks[name].push(fn);  
  }  
  
  $emit(name, args) {  
    if (this.callbacks[name]) {  
      this.callbacks[name].forEach((cb) => cb(args));  
    }  
  }  
}  

// main.js  
Vue.prototype.$bus = new Bus() // 将$bus挂载到vue实例的原型上  
// 另一种方式  
Vue.prototype.$bus = new Vue() // Vue已经实现了Bus的功能  

// Children1.vue
this.$bus.$emit('foo')  

// Children2.vue
this.$bus.$on('foo', this.handle)  
```

##### $parent 或$root

| 使用场景 | 兄弟组件传递数据                             |
| -------- | -------------------------------------------- |
| 描述     | 通过共同祖辈`$parent`或者`$root`搭建通信桥连 |

```js
// Children1.vue
this.$parent.on('add',this.add)

// Children2.vue
this.$parent.emit('add')
```

##### attrs 与 listeners

| 使用场景 | 祖先传递数据给子孙                        |
| -------- | ----------------------------------------- |
| 描述     | 设置批量向下传属性`$attrs`和 `$listeners` |

```js
// 给Grandson隔代传值，communication/index.vue  
<Child2 msg="lalala" @some-event="onSomeEvent"></Child2>  
  
// Child2做展开  
<Grandson v-bind="$attrs" v-on="$listeners"></Grandson>  
  
// Grandson使⽤  
<div @click="$emit('some-event', 'msg from grandson')">  
{{msg}}  
</div>  
```

##### Provide 与 Inject

| 使用场景 | 祖先传递数据给子孙                                           |
| -------- | ------------------------------------------------------------ |
| 描述     | 在祖先组件定义`provide`属性，返回传递的值 在后代组件通过`inject`接收组件传递过来的值 |

```js
// 祖先组件
provide(){  
    return {  
        foo:'foo'  
    }  
}  

// 后代组件
inject:['foo'] // 获取到祖先组件传递过来的值  
```

##### Vuex

| 使用场景 | 复杂关系的组件数据传递                     |
| -------- | ------------------------------------------ |
| 描述     | `Vuex`作用相当于一个用来存储共享变量的容器 |

- `state`用来存放共享变量的地方
- `getter`，可以增加一个`getter`派生状态，(相当于`store`中的计算属性），用来获得共享变量的值
- `mutations`用来存放修改`state`的方法。
- `actions`也是用来存放修改state的方法，不过`action`是在`mutations`的基础上进行。常用来做一些异步操作

<img src="/img/fa207cd0-3aca-11eb-ab90-d9ae814b240d.png" alt="img" style="zoom:80%;" />



#### 结论

- 父子关系的组件数据传递选择 `props` 与 `$emit`进行传递，也可选择`ref`
- 兄弟关系的组件数据传递可选择`$bus`，其次可以选择`$parent`进行传递
- 祖先与后代组件数据传递可选择`attrs`与`listeners`或者 `Provide`与 `Inject`
- 复杂关系的组件数据传递可以通过`vuex`存放共享的变量