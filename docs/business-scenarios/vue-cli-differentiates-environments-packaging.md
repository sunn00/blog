---
title: "vue-cli如何区分环境进行打包"
date: 2022-03-24 15:06:33
sidebar: "auto"
categories:
  - 业务场景
tags:
  - Vue
---

希望可以通过发布环境自动获取对应的配置

<!--  more -->

## 【场景】

 对接直播 sdk 时需要测试站对接直播测试站，正式站对接直播正式站，会导致 sdk 的参数在每次发布前要改为正式站参数，如果在发布前忘记修改则会无法登录直播间。

## 【目的】

 希望可以通过发布环境自动获取对应的配置

## 【实现】

### 【vue-cli 模式】

vue-cli 中默认有三种模式：development、test、production，分别对于开发环境、测试环境和正式环境，通过传递 `--mode` 选项覆写默认的模式。

```javascript
vue-cli-service build --mode development
vue-cli-service build --mode test
vue-cli-service build --mode production
```

当运行`vue-cli-service`命令时，所有环境变量都从**环境文件**中载入。如果环境文件中不包含`NODE_ENV`变量，则该变量的值取决于`[mode]`值

当你运行 vue-cli-service build 命令时，无论你要部署到哪个环境，应该始终把 NODE_ENV 设置为 "production" 来获取可用于部署的应用程序。

::: tip
**NODE_ENV**

如果在环境中有默认的 NODE_ENV，你应该移除它或在运行 vue-cli-service 命令的时候明确地设置 NODE_ENV。
:::

### 【环境变量】

在项目根目录中放置.env 文件可以指定环境变量

```plain
.env                # 在所有的环境中被载入
.env.local          # 在所有的环境中被载入，但会被 git 忽略
.env.[mode]         # 只在指定的模式中被载入
.env.[mode].local   # 只在指定的模式中被载入，但会被 git 忽略
```

 环境变量通过**键值对**的形式，放置在环境文件中。

为一个特定模式准备的环境文件 (例如 .env.production) 将会比一般的环境文件 (例如 .env) 拥有更高的优先级。

**警告**

不要在你的应用程序中存储任何机密信息（例如私有 API 密钥）！

环境变量会随着构建打包嵌入到输出代码，意味着任何人都有机会能够看到它。

只有 NODE*ENV，BASE_URL 和以 VUE_APP* 开头的变量将通过 webpack.DefinePlugin 静态地嵌入到客户端侧的代码中。

除了 VUE*APP*\* 变量之外，在你的应用代码中始终可用的还有两个特殊的变量：

- NODE_ENV - 会是 "development"、"production" 或 "test" 中的一个。具体的值取决于应用运行的[模式](https://cli.vuejs.org/zh/guide/mode-and-env.html#模式)。
- BASE_URL - 会和 vue.config.js 中的 publicPath 选项相符，即你的应用会部署到的基础路径。

::: warning

NODE_ENV 只会是 "development"、"production" 或 "test" ，mode 值是自定义的，但是在环境变量中会将 NODE_ENV 设置为"production"！！！

可以在代码中通过 process.env.VUE_APP_XX 访问环境变量；

所有解析出来的环境变量都可以在 public/index.html 中以 HTML 插值中介绍的方式使用。
:::

### 【只在本地有效的环境变量】

有的时候你可能有一些不应该提交到代码仓库中的变量，尤其是当你的项目托管在公共仓库时。

这种情况下你应该使用一个 .env.local 文件取而代之。本地环境文件默认会被忽略，且出现在 .gitignore 中。

.local 也可以加在指定模式的环境文件上，比如 .env.development.local 将会在 development 模式下被载入，且被 git 忽略。
