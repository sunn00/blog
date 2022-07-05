---
title: "Express框架初使用"
date: 2022-04-12 15:03:00
sidebar: "auto"
categories:
  - 前端框架
tags:
  - Node.js
  - Express
---

> 跟着MDN中的nodejs入门，使用express框架搭建一个本地图书馆的小项目，在项目中可以学习到项目结构、路由模块搭建、mongoDB数据库的使用和pug模板。先跟着教程走一遍流程，再重新自己总结知识点。

<!-- more -->



## Async

> 在使用nodejs时，我们常需要等到数据返回才会继续渲染模板，如果控制器只需要一个异步操作，那我们可以简单的使用回调函数来实现，而当控制器需要执行多个异步操作时，回调函数就不够看了，async模块可以实现并行执行所有请求，然后在所有查询完成后执行单个回调。

#### `async.parallel()` 

用于并行运行多个异步操作。

第一个参数为要运行的异步操作函数的集合（数组、对象、可迭代集合）。每个函数都传递一个回调函数callback(err, result) ，它必须在完成时调用错误err（可以为null）和可选的结果值。

第二个可选参数是一个回调，它将在第一个参数中的所有函数完成时运行。回调的调用，是使用错误参数和包含各个异步操作结果的结果集合。结果集合与第一个参数的类型相同。如果任何并行函数报告错误，则提前调用回调（具有错误值）。数组顺序结果，将与声明函数的原始顺序匹配 - 而不是它们完成的顺序

```js
async.parallel({
  one: function(callback) { ... },
  two: function(callback) { ... },
  ...
  something_else: function(callback) { ... }
  },
  // optional callback
  function(err, results) {
    // 'results' is now equal to: {one: 1, two: 2, ..., something_else: some_value}
  }
);
```



#### `async.series()` 

用于按顺序运行多个异步操作，后续函数不依赖于先前函数的输出。它本质上是声明的，并且行为与`async.parallel()`.相同。

> :warning:ECMAScript（JavaScript）语言规范指出，对象的枚举顺序是未定义的，因此可能不会按照在所有平台上指定它们的顺序，调用这些函数。如果顺序真的很重要，那么你应该传递一个数组而不是一个对象，如下所示。



#### `async.waterfall()` 

用于在每个操作依赖于前一个操作的结果时,依次运行多个异步操作。

每个异步函数调用的回调，包含第一个参数的`null`，与后续参数里的结果。该序列中的每个函数，都将前一个回调的结果参数，作为第一个参数，然后是回调函数。

完成所有操作后，将使用上一操作的结果，调用最终回调。当您参考下面的代码片段时，这种工作方式会更加明确

```js
async.waterfall([
  function(callback) {
    callback(null, 'one', 'two');
  },
  function(arg1, arg2, callback) {
    // arg1 now equals 'one' and arg2 now equals 'two' 
    callback(null, 'three');
  },
  function(arg1, callback) {
    // arg1 now equals 'three'
    callback(null, 'done');
  }
], function (err, result) {
  // result now equals 'done'
}
);
```



## Pug模板

该文件映射典型 HTML 文件的结构，其中（几乎）每一行中的第一个单词是 HTML 元素，并且缩进用于指示嵌套元素。



元素属性被定义在其关联元素之后的括号中。在括号内，属性定义在以逗号或空格分隔的属性名称和属性值对的列表中，例如：

- `script(type='text/javascript')`, `link(rel='stylesheet', href='/stylesheets/style.css')`
- `meta(name='viewport' content='width=device-width initial-scale=1')`



所有属性的值都被转义（例如 “`>`” 等字符转换为 HTML 代码等效项，如“`>`”），以防止注入 JavaScript 或跨站点脚本攻击。



如果标记后跟着等号，则以下文本将被视为 JavaScript 表达式。



如果标记后面没有等号，则将内容视为纯文本。在纯文本中，您可以使用`#{}` 和`!{}`语法，插入转义和非转义数据

```js
p This is a line with #[em some emphasis] and #[strong strong text] markup.
p This line has an un-escaped string: !{'<em> is emphasised</em>'}, an escaped string: #{'<em> is not emphasised</em>'}, and escaped variables: #{title}.
```

> 您几乎总是希望转义来自用户的数据（通过**`#{}`**语法）。可信任的数据（例如，生成的记录计数等）可以不先转义就显示。



您可以在行的开头使用管道（“**|**”）字符来表示“[纯文本](https://pugjs.org/language/plain-text.html)”。例如，下面显示的附加文本，将显示在与前一个锚点相同的行上，但不会链接。

```html
a(href='http://someurl/') Link text
| Plain text
```



Pug 允许您使用`if`, `else` , `else if` 和 `unless`执行条件操作 - 例如：

```html
if title
  p A variable named "title" exists
else
  p A variable named "title" does not exist
```



以使用`each-in` 或 `while`语法执行循环/迭代操作。在下面的代码片段中，我们循环遍历数组，以显示变量列表（注意，使用 'li =' 来评估 “val” ，以作为下面的变量。）迭代的值也可以传递给模板作为变量！

```js
ul
  each val in [1, 2, 3, 4, 5]
    li= val
```



块标记`block`用于标记 “可在派生模板中替换的内容部分“（如果未重新定义块，则使用其在基类中的实现）。`extends`标记，标识要使用的基本模板，然后我们使用 `block *section_name*` ，来指示我们将覆盖的部分的新内容。

```js
// extends标记，标识要使用的基本模板，然后我们使用 block section_name ，来指示我们将覆盖的部分的新内容。

extends layout

block content
  h1= title

  ul
  each book in book_list
    li
      a(href=book.url) #{book.title}
      |  (#{book.author.name})

  else
    li There are no books.
```



Item

```

<template>
  <div
    class="relative item-title leading-36px hover:bg-[#F0F7FF]"
    :style="{ 'padding-left': paddingLeftPx }"
    :class="{ 'checked-item': checkedKey === categories.id }"
  >
    <holder-outlined
      v-if="isShowSettingIcon"
      style="color: #165DFF"
      class="mover absolute top-11px left-12px cursor-pointer setting-icon"
    />

    <div class="relative flex justify-between items-center" @click="handleChecked(categories.id)">
      <caret-down-outlined
        v-if="categories?.children?.length !== 0"
        style="color: #C9CDD4"
        class="absolute top-12px -left-18px text-16px text-[#C9CDD4]"
        @click.stop="handleExpaned(categories)"
      />

      <span class="cursor-default">
        {{ categories.name }}
        <span class="pl-4px text-[#86909C]">{{ categories.count }}</span>
      </span>

      <template v-if="isAllGoods">
        <plus-circle-outlined class="text-16px setting-icon" style="color: #165DFF" />
      </template>

      <div v-else-if="isShowSettingIcon" class="pr-14px" @click.stop>
        <plus-circle-outlined class="text-16px setting-icon" style="color: #165DFF" />
        <a-dropdown :trigger="['click']">
          <frown-outlined class="ml-4px text-16px setting-icon" style="color: #165DFF" />
          <template #overlay>
            <a-menu>
              <a-menu-item>
                <a href="javascript:;">置顶</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">重命名</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">删除</a>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { includes, isObject } from 'lodash-es';
import { HolderOutlined, CaretDownOutlined, PlusCircleOutlined, FrownOutlined } from '@ant-design/icons-vue';


type CategoriesItem = {
  id: string | number, // 分类Id
  name: string, // 分类名称
  count?: string,
  children?: CategoriesItem[], // 子分类
}

interface Props {
  categories: CategoriesItem,
  checkedKey: string,
  expanedKey: Map<string, boolean>,
  paddingLeftPx: string
}

const props = defineProps<Props>()
const emit = defineEmits(['checked', 'expaned'])

const isShowSettingIcon = computed(() => {
  return !includes(['1', '2'], props.categories.id)
})

const isAllGoods = computed(() => {
  return props.categories.id === "1"
})

const handleChecked = (id: string | number): void => {
  emit("checked", id)
}

const handleExpaned = (categories: CategoriesItem | string): void => {
  if (isObject(categories)) {
    emit("expaned", categories.id)
  } else {
    emit("expaned", categories)
  }
}
</script>

<style lang="less" scoped>
.checked-item {
  background-color: #f2f3f5;
}

.setting-icon {
  @apply hidden cursor-pointer;
}

.item-title:hover {
  .setting-icon {
    @apply inline-block;
  }
}
</style>
```



category

```
<template>
  <section class="w-204px h-full border border-solid border-[#E5E6EB] rounded-sm">
    <header class="p-12px pb-0">
      <h5 class="mb-12px text-16px">商品分类</h5>
      <a-input
        v-model:value="searchCategoriesForm.name"
        class="w-180px"
        placeholder="搜索分类"
        @search="onSearch"
      >
        <template #suffix>
          <search-outlined />
        </template>
      </a-input>
    </header>
    <div class="py-16px">
      <categories-draggable
        :categories="categories[0]"
        :level="0"
        :checkedKey="checkedKey"
        :expanedKey="expanedKey"
        @checked="handleChecked"
        @expaned="handleExpaned"
      />
    </div>
  </section>
</template>

<script setup lang='ts'>
import draggable from "vuedraggable";
import { includes, remove } from 'lodash-es';

import { SearchOutlined } from '@ant-design/icons-vue';
import CategoriesDraggable from '~/views/goodsManage/GoodsManageCategoriesDraggable.vue'


interface searchCategoriesForm {
  name: string
}

const searchCategoriesForm = reactive<searchCategoriesForm>({
  name: ""
})

const onSearch = (searchValue: string) => {
  console.log('use value', searchValue);
  console.log('or use this.value', searchCategoriesForm.name);
};

type CategoriesItem = {
  id: string | number, // 分类Id
  name: string, // 分类名称
  count?: string,
  children?: CategoriesItem[], // 子分类
}

const categories = ref<CategoriesItem[]>([
  {
    "id": "1",
    "name": "全部商品",
    "count": '40',
    "children": [
      {
        "id": "2",
        "name": "默认分类",
        "count": '40',
        "children": []
      },
      {
        "id": "3",
        "name": "会计课程",
        "count": '40',
        "children": [
          {
            "id": "4",
            "name": "会员",
            "count": '40',
            "children": []
          },
          {
            "id": "8",
            "count": '40',
            "name": "会员2",
            "children": []
          },
          {
            "id": "9",
            "count": '40',
            "name": "会员3",
            "children": []
          }
        ]
      },
      {
        "id": "5",
        "count": '40',
        "name": "拖动排序",
        "children": []
      },
      {
        "id": "6",
        "count": '40',
        "name": "营销活动",
        "children": [
          {
            "id": "7",
            "count": '40',
            "name": "打卡活动",
            "children": []
          },
          {
            "id": "10",
            "count": '40',
            "name": "打卡活",
            "children": []
          },
          {
            "id": "11",
            "count": '40',
            "name": "打卡",
            "children": []
          },
          {
            "id": "12",
            "count": '40',
            "name": "打",
            "children": []
          },
        ]
      }
    ]
  }
])


const checkedKey = ref<string>("1")
const expanedKey = reactive(new Map([["1", true]]))

const handleChecked = (id: string): void => {
  checkedKey.value = id
}

const handleExpaned = (id: string): void => {
  if (expanedKey.has(id)) {
    expanedKey.set(id, !expanedKey.get(id))
  } else {
    expanedKey.set(id, true)
  }
}

</script>

<style lang='less' scoped>
:deep(.ant-input-affix-wrapper) {
  @apply rounded-sm;
}

.anticon-caret-down {
  @apply mr-8px;
}

:deep(.ant-menu) {
  .ant-menu-sub.ant-menu-inline {
    background-color: #fff;
  }

  .ant-menu-title-content {
    @apply flex items-center;
  }

  .ant-menu-submenu-arrow {
    display: none;
  }
}
</style>
```



graggable

```
<template>
  <ul class="relative text-14px text-[#1D2129] cursor-default">
    <div
      class="relative item-title leading-36px hover:bg-[#F0F7FF]"
      :style="{ 'padding-left': paddingLeftPx }"
      :class="{ 'checked-item': checkedKey === categories.id }"
    >
      <holder-outlined
        style="color: #165DFF"
        class="mover absolute top-11px left-12px cursor-pointer setting-icon"
        v-if="isShowSettingIcon"
      />

      <div class="relative flex justify-between items-center" @click="handleChecked(categories.id)">
        <caret-down-outlined
          v-if="categories?.children.length !== 0"
          style="color: #C9CDD4"
          class="absolute top-10px -left-18px text-16px text-[#C9CDD4]"
          :class="{ 'rotate-90': checkedKey === categories.id }"
          @click.stop="handleExpaned(categories)"
        />

        <span class="cursor-default">
          {{ categories.name }}
          <span class="pl-4px text-[#86909C]">{{ categories.count }}</span>
        </span>
        <template v-if="isAllGoods">
          <plus-circle-outlined class="pr-14px text-16px cursor-pointer" style="color: #165DFF" />
        </template>

        <div v-else-if="isShowSettingIcon" class="pr-14px" @click.stop>
          <plus-circle-outlined class="text-16px setting-icon" style="color: #165DFF" />
          <a-dropdown :trigger="['click']">
            <frown-outlined class="ml-4px text-16px setting-icon" style="color: #165DFF" />
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <span>置顶</span>
                </a-menu-item>
                <a-menu-item>
                  <span>重命名</span>
                </a-menu-item>
                <a-menu-item>
                  <span>删除</span>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
      </div>
    </div>

    <draggable
      handle=".mover"
      v-model="categories.children"
      tag="li"
      :group="categories.name"
      item-key="id"
      animation="300"
      :component-data="{ name: 'fade' }"
      class="transition-opacity duration-200"
      :class="{ 'transfrom max-h-screen': expanedKey.get(categories.id), 'h-0 opacity-0': !expanedKey.get(categories.id) }"
      :move="onMoveCallback"
    >
      <template #item="{ element }">
        <categories-draggable
          :categories="element"
          :level="currentLevel"
          :checkedKey="checkedKey"
          :expanedKey="expanedKey"
          @checked="handleChecked"
          @expaned="handleExpaned"
        />
      </template>
    </draggable>
  </ul>
</template>
<script lang="ts" setup>
import draggable from "vuedraggable";
import { HolderOutlined, CaretDownOutlined, PlusCircleOutlined, FrownOutlined } from '@ant-design/icons-vue';

import CategoriesDraggable from '~/views/goodsManage/GoodsManageCategoriesDraggable.vue'
import { includes, isObject } from 'lodash-es';

type CategoryItem = {
  id: string | number, // 分类Id
  name: string, // 分类名称
  count?: string,
  children: CategoryItem[] | [], // 子分类
}

interface Props {
  categories: CategoryItem,
  level: number,
  checkedKey: string,
  expanedKey: Map<string, boolean>
}

const props = defineProps<Props>()

const emit = defineEmits(['checked', 'expaned'])


const handleChecked = (id: string): void => {
  emit("checked", id)
}

const handleExpaned = (categories: CategoryItem | string): void => {
  if (isObject(categories)) {
    emit("expaned", categories.id)
  } else {
    emit("expaned", categories)
  }
}

const currentLevel = computed(() => {
  console.log(props.level);
  return props.level + 1
})

const paddingLeftPx = computed(() => {
  return props.level ? `${14 * props.level + 30}px` : '30px'
})

const isShowSettingIcon = computed(() => {
  return !includes(['1', '2'], props.categories.id)
})

const isAllGoods = computed(() => {
  return props.categories.id === "1"
})

const onMoveCallback = (evt: any, originalEvent: any) => {
  if (evt.relatedContext.element.name == '默认分类') return false;
  return true;
}


</script>

<style  scoped>
.checked-item {
  background-color: #f2f3f5;
}

.setting-icon {
  @apply hidden cursor-pointer;
}

.item-title:hover .setting-icon {
  @apply inline-block;
}

.ant-dropdown-menu-item {
  @apply px-8px;
}
.ant-dropdown-menu-title-content > span {
  @apply text-[#165DFF];
}
</style>
```

