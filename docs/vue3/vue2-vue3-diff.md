---
title: "vue2与vue3 -- 迁移指南"
date: 2022-04-01 18:12:00
sidebar: "auto"
categories:
  - 前端框架
tags:
  - Vue
---

> 记录vue3比较与vue2新增的一些特性，和vue3非兼容特性。这样在使用vue3时，可以书写出标准高效的代码，对代码质量有很大帮助。

<!-- more -->



## 非兼容变更

### 全局Vue API更改为使用应用程序实例

vue3中通过createApp返回一个应用实例。

**任何全局改变 Vue 行为的 API 现在都会移动到应用实例上, 所有其他不全局改变行为的全局 API 现在都是具名导出**

```js
import { createApp } from 'vue'

const app = createApp({})
```

| 2.x 全局 API               | 3.x 实例 API (`app`)                       |
| -------------------------- | ------------------------------------------ |
| Vue.config                 | app.config                                 |
| Vue.config.productionTip   | *移除*                                     |
| Vue.config.ignoredElements | app.config.compilerOptions.isCustomElement |
| Vue.component              | app.component                              |
| Vue.directive              | app.directive                              |
| Vue.mixin                  | app.mixin                                  |
| Vue.use                    | app.use                                    |
| Vue.prototype              | app.config.globalProperties                |
| Vue.extend                 | *移除*                                     |



#### `config.isCustomElement`

引入此配置选项的目的是为了支持原生自定义元素，因此重命名可以更好地传达它的意图。同时，新选项接受一个函数，相比旧的字符串或正则表达式来说能提供更高的灵活性。

```js
// 之前
Vue.config.ignoredElements = ['my-el', /^ion-/]

// 之后
const app = createApp({})
app.config.compilerOptions.isCustomElement = tag => tag.startsWith('ion-')
```



#### `config.globalProperties`

在 Vue 2 中， `Vue.prototype` 通常用于添加所有组件都能访问的 property。

在 Vue 3 中与之对应的是 `config.globalProperties`。这些 property 将被复制到应用中，作为实例化组件的一部分。

```js
// 之前 - Vue 2
Vue.prototype.$http = () => {}

// 之后 - Vue 3
const app = createApp({})
app.config.globalProperties.$http = () => {}
```



### v-model替换v-bind.sync

#### 2.x

在组件上使用 `v-model` 相当于绑定 `value` prop 并触发 `input` 事件，可通过model属性自定义值，但是一个组件只能绑定一个v-model的值，很不方便！

```js
<!-- ParentComponent.vue -->
<ChildComponent v-model="pageTitle" />

 // 等价于
<ChildComponent :value="pageTitle" @input="pageTitle = $event" />
  
// ChildComponent.vue
export default {
  model: {
    prop: 'title',  // 可自定义v-model值
    event: 'change'
  },
  props: {
    // 这将允许 `value` 属性用于其他用途
    value: String,
    // 使用 `title` 代替 `value` 作为 model 的 prop
    title: {
      type: String,
      default: 'Default title'
    }
  }
}
```



#### 3.x

自定义组件上的 `v-model` 相当于传递了 `modelValue` prop 并接收抛出的 `update:modelValue` 事件，若需要更改 `model` 的名称，可以为 `v-model` 传递一个*参数*，以作为组件内 `model` 选项的替代。一个组件可以绑定多个v-model。

```js
<ChildComponent v-model:title="pageTitle" />

<!-- 是以下的简写: -->

<ChildComponent :title="pageTitle" @update:title="pageTitle = $event" />
```



### v-if优先级高于v-for



### ref将不再在v-for中生成数组

在 Vue 2 中，在 `v-for` 中使用的 `ref` attribute 会用 ref 数组填充相应的 `$refs` property。当存在嵌套的 `v-for` 时，这种行为会变得不明确且效率低下。

在 Vue 3 中，此类用法将不再自动创建 `$ref` 数组。要从单个绑定获取多个 ref，请将 `ref` 绑定到一个更灵活的函数上 (这是一个新特性)

```js
<div v-for="item in list" :ref="setItemRef"></div>

import { onBeforeUpdate, onUpdated } from 'vue'

export default {
  setup() {
    let itemRefs = []
    const setItemRef = el => {
      if (el) {
        itemRefs.push(el)
      }
    }
    onBeforeUpdate(() => {
      itemRefs = []
    })
    onUpdated(() => {
      console.log(itemRefs)
    })
    return {
      setItemRef
    }
  }
}
```

> - `itemRefs` 不必是数组：它也可以是一个对象，其 ref 可以通过迭代的 key 被设置。
> - 如有需要，`itemRefs` 也可以是响应式的，且可以被侦听。