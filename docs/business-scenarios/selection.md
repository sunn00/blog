---
title: "光标的使用"
date: 2022-03-24 15:45:25
sidebar: "auto"
categories:
  - Business Scenarios
tags:
  - html
---

::: tip
DOM 中并没有直接获取光标位置的方法，那么我们只能**间接来获取光标位置**。DOM 支持获取光标选中的范围，当选取范围起始点和结束点一样时，就是光标插入的位置。
:::

<!-- more -->

## 术语

`anchor(瞄点)`：选区起点。

`focus(焦点)`：选区终点。

`range(范围)`：选区范围，包含整个节点或节点的一部分。

## Selection 对象

`selection`：表示用户选择的文本范围或插入符号的位置。

可以通过`window.getSelection()`获取示例。

经过实验发现 Selection 选取的节点范围都是块级节点。input 和 texteare 并不能作为 Selection 的节点

### 属性：

`anchorNode`:选区起点的节点。

`anchorOffset`:选区的起点位置。

`focusNode`:选区终点的节点。

`focusOffset`:选区的终点位置。

`isCollapsed`:起点和终点是否重叠。

`rangeCount`:选区包含的 range 数目。

### 方法：

`getRangeAt(index)`:获取指定的选取范围。

`addRange(range)`:将一个范围添加到 Selection 对象中。

`removeRange()`:移出指定的范围。

`removeAllRanges()`:移出所有 range 对象。

`collapse(parentNode,offset)`:将光标移动到 parentNode 节点的 offset 位置。

`collapseToStart()`:取消当前选区，并把光标定位在原选区的最开始处，如果此时光标所处的位置是可编辑的，且它获得了焦点，则光标会在原地闪烁。

`collapseToEnd()`:取消当前选区，并将光标定位到原选取的最末位。如果此时光标所处的位置是可编辑的，且它获得了焦点，则光标会在原地闪烁。

`extend(node,offset)`:将终点位置移动到 node 节点的 offset 位置。

`modify(alter,direction,granularity)`:通过 alter 方式(move/extend)来改变光标位置，移动方向为 direction(left/right)，移动单位为 granularity。

`containsNode(aNode,aPartlyContained)`:判断 aNode 是否包含在 Selection 中。aPartlyContained 为 false 表示全包含，为 true 表示只要部分包含即可。

`toString()`:放回当前 Selection 对象的字符串。

[

](https://blog.csdn.net/mafan121/article/details/78519348)

## Range 对象

`Range对象`表示一个`Selection`的选择范围，一个`Selection`可以包含多个`Range`。

### 获取对象

`document.createRange()`:创建一个 Range。

`selection.getRangeAt(index)`:获取指定的 Range。

### 属性：

`collapsed`:判断起始位置是否重合。

`endContaniner`:range 终点节点。

`endOffset`:range 的终点位置。

`startContaniner`:ranstartge 起点节点。

`startOffset`:range 的起点位置。

`commonAncestorContainer`:包含起始点的节点。

### 方法：

`setStart(startNode,startOffset)`:设置范围在 startNode 的起始位置为 startOffset。

`setEnd(endNode,endOffset)`:设置范围在 endNode 的起始位置为 endOffset。

`selectNode(referenceNode)`:设置 range 的节点为 referenceNode。

`selectNodeContents(referenceNode)`:设置 range 的内容为 referenceNode。

`collapse(toStart)`:向边界点折叠 range，即是设置光标位置，toStart 默认为 false，表示光标定位在节点末尾。true 表示光标定位在节点起点。

`cloneContents()`:克隆一个 range 的内容片段。

`deleteContents()`:删除 range 的内容片段。

`extractContents()`:将 range 的内容从文档树移动到文档片段中。

`insertNode(newNode)`:在 range 的其实位置插入新的节点。

`surroundContents(newNode)`:将 range 对象的内容移动到新的节点中。

`cloneRange()`:克隆一个 range 对象。

`detach()`:释放当前 range。

## input / textarea

在 html5 中，可输入性表单元素（input/textarea）都存在以下属性。不支持 IE6/7。

- `selectionDirection`:forward | backward | none,选区方向
- `selectionEnd`:选区终点位置
- `selectionStart`:选区起点位置

`setSelectionRange(selectionStart, selectionEnd, [selectionDirection])`:设置获取焦点的输入性元素的选区范围。

### 应用场景

## 获取光标位置

### 可编辑 div

```javascript
//获取当前光标位置
const getCursortPosition = function (element) {
  var caretOffset = 0;
  var doc = element.ownerDocument || element.document;
  var win = doc.defaultView || doc.parentWindow;
  var sel;
  if (typeof win.getSelection != "undefined") {
    //谷歌、火狐
    sel = win.getSelection();
    if (sel.rangeCount > 0) {
      //选中的区域
      var range = win.getSelection().getRangeAt(0);
      var preCaretRange = range.cloneRange(); //克隆一个选中区域
      preCaretRange.selectNodeContents(element); //设置选中区域的节点内容为当前节点
      preCaretRange.setEnd(range.endContainer, range.endOffset); //重置选中区域的结束位置
      caretOffset = preCaretRange.toString().length;
    }
  } else if ((sel = doc.selection) && sel.type != "Control") {
    //IE
    var textRange = sel.createRange();
    var preCaretTextRange = doc.body.createTextRange();
    preCaretTextRange.moveToElementText(element);
    preCaretTextRange.setEndPoint("EndToEnd", textRange);
    caretOffset = preCaretTextRange.text.length;
  }
  return caretOffset;
};
```

::: tip
获取光标的位置是先通过获取鼠标的选取范围，然后克隆该选取范围，修改克隆范围的结束位置，这样克隆的范围就只剩下起点到结束点的内容，光标之后的内容被截取扔掉了。所以可以通过剩余内容的长度来确定光标位置。之所以要克隆一个选取范围出来，是为了避免修改光标结束位置时影响到原先内容。
:::

### input / textarea

```javascript
//输入框获取光标
const getPosition = function (element) {
  let cursorPos = 0;
  if (document.selection) {
    //IE
    var selectRange = document.selection.createRange();
    selectRange.moveStart("character", -element.value.length);
    cursorPos = selectRange.text.length;
  } else if (element.selectionStart || element.selectionStart == "0") {
    cursorPos = element.selectionStart;
  }
  return cursorPos;
};
```

## 设置光标位置

### 可编辑 div

```javascript
//设置光标位置
const setCaretPosition = function (element, pos) {
  var range, selection;
  if (document.createRange) {
    //Firefox, Chrome, Opera, Safari, IE 9+
    range = document.createRange(); //创建一个选中区域
    range.selectNodeContents(element); //选中节点的内容
    if (element.innerHTML.length > 0) {
      range.setStart(element.childNodes[0], pos); //设置光标起始为指定位置
    }
    range.collapse(true); //设置选中区域为一个点
    selection = window.getSelection(); //获取当前选中区域
    selection.removeAllRanges(); //移出所有的选中范围
    selection.addRange(range); //添加新建的范围
  } else if (document.selection) {
    //IE 8 and lower
    range = document.body.createTextRange(); //Create a range (a range is a like the selection but invisible)
    range.moveToElementText(element); //Select the entire contents of the element with the range
    range.collapse(false); //collapse the range to the end point. false means collapse to end rather than the start
    range.select(); //Select the range (make it the visible selection
  }
};
```

### input / textarea

```javascript
// 设置光标位置
function setCaretPosition(textDom, pos) {
  if (textDom.setSelectionRange) {
    // IE Support
    textDom.focus();
    textDom.setSelectionRange(pos, pos);
  } else if (textDom.createTextRange) {
    // Firefox support
    var range = textDom.createTextRange();
    range.collapse(true);
    range.moveEnd("character", pos);
    range.moveStart("character", pos);
    range.select();
  }
}
```

###
