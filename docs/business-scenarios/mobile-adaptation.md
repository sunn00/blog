---
title: "移动端适配"
date: 2022-03-28 14:49:25
sidebar: "auto"
categories:
  - Business Scenarios
tags:
  - html
---



<!-- more -->

## scale适配

移动端适配方案目前经常使用的是rem和vw/vh两种方案，页面元素涉及定位，因展示空间有限会造成部分机型在展示时，文案部分与其他部分重合，尤其折叠屏、ipad等大屏适配，如果按照以往为了显示效果一致，会使用媒体选择器media解决屏幕展示不一致的问题，不但增加工作量，部分机型的展示效果也会冲突，为了解决屏幕适配，尽量减少代码量，使用了**scale**方案解决适配的问题。

- scale方案往常是解决大屏适配的方案，它的优点是在任何屏幕中页面都会等比例缩放，在任何尺寸、分辨率的屏幕上展示效果基本是一致的，后期的调试工作会减少很多。

1. 计算屏幕和设计稿的宽高比例

   ```javascript
   const screenScale = () => {
    let width = 375;//设计稿原始尺寸
    let height = 812;
    let offsetWidth = window.innerWidth;
    let offsetHeight = window.innerHeight;
    let scaleX = offsetWidth / width;
    let scaleY = offsetHeight / height;
    let scale = Math.min(scaleX, scaleY);
    setScale({
      scale: scale,
    });
   };
   ```

2. 把这个比例设置给css的scale变量

   ```html
   <div className='carSwiper'  style={{height:'812px',width:'375px', transform: `scale(${scale.scale})` }}>
   页面主体
   </div>
   ```

   这样不管手机屏幕尺寸是多少，分辨率有多高，例如三星折叠屏、小米one、iphone5、6、plus等机型，展示效果基本保持一致。