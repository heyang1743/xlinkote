# xlinkote

## 简介

一个简单的知识管理系统，基于 js 等技术。[在线使用](https://xlinkote.netlify.app/)

无需注册，不存在官方云存储，只使用 webDAV 代替。

文件会保存到浏览器的 indexdDB，自动保存。

可以像做 PPT 一样自由更改主元素的位置，并拥有无限画布，无限放大缩小。并借助 CSS 相关技术实现多种排版。

其中文本元素支持 markdown 及其拓展语法。

拥有基本的双链功能，像超链接一样，不过是多对多模式。可以使用`[[]]`标记关键字或直接绑定主元素。悬浮在链接列表上可以直接预览。

还有压感矢量画笔可以使用。

## 使用

[在线使用](https://xlinkote.netlify.app/)

[桌面客户端](https://github.com/xushengfeng/xln-desktop)，如果浏览器是最新的，推荐在线使用

🚨 此程序仍然处于测试状态，各项功能会不断变动，无法确保数据可用性，请谨慎使用

### 编译

```shell
npm i # 安装依赖
node init.js # 下载ocr相关文件
npm run build # 编译
npm run preview # 打开服务器
```

## 功能

-   [ ] 画布
    -   [x] markdown 语法输入
    -   [x] 无限画布
-   [ ] 文件
    -   [x] 与本地文件关联
    -   [x] 默认保存到 indexedDB
    -   [x] 自由导出文件和数据库
    -   [x] webDAV（默认压缩，支持加密）
-   [ ] 元素(组件)
    -   [x] markdown 元素（支持补全括号和引号）
    -   [x] 数学公式（$\LaTeX$ 数学公式，图形化点击输入，基于[MathJax](https://github.com/mathjax/MathJax)）
    -   [x] $\LaTeX$ 支持（基于[tikzjax](https://github.com/kisonecat/tikzjax)和[obsidian-tikzjax](https://github.com/artisticat1/obsidian-tikzjax)，可使用 tikzjax）
    -   [x] 待办 todo
    -   [x] 画板
        -   [x] 压感
        -   [x] 粗细
        -   [x] 颜色
        -   [x] 图层
        -   [x] 形状识别
    -   [ ] 外部导入
        -   [x] 拖拽
        -   [x] 粘贴
        -   [x] HTML 转 markdown
        -   [x] 图像
        -   [x] 视频
        -   [x] pdf
        -   [x] glb 3D 模型
        -   [x] Geogebra
    -   [x] 录音
    -   [x] 连接线条
    -   [x] 日历
    -   [x] 计时器（正计时、倒计时、闹钟）
-   [ ] 搜索
    -   [x] 模糊搜索
-   [x] 演示模式（PPT）
-   [x] PWA 支持

默认缓存到本地，离线可用，即使无法访问官网也能使用。若要更新，在设置点击“清除缓存并更新”

## 模式

分为“浏览模式”、“设计模式”和“绘制模式”。

### 浏览模式

点击文本元素可进行编辑，可浏览多媒体元素。

可启用手写输入，利用 google api 实现全屏手写识别（此功能需要联网）

负责知识管理。

### 设计模式

在空白处拖动可建立一个文本元素，可通过拖动手柄调节元素大小位置。

### 绘制模式

在此模式下，可通过鼠标、数位笔或触控屏进行绘制书写笔迹。

## 知识管理

想模仿人脑记忆行为（尽管很粗糙）。知识之间可以关联，关联程度各有不同，并存在记忆衰减行为（当然系统上的内容并不会消失）。

此系统可以用作学习笔记，在记忆时，关联有助于人脑联想记忆，复习时，通过关联程度计算出来的每个元素的值可以提供一个按需复习提示。

### 主元素

主元素代表知识点。

在设计模式下，悬浮鼠标在上面能被框出的元素是主元素。

主元素可以通过拖动手柄改变大小位置等。

主元素里可放置文本元素或多媒体元素（这些系统自动生成处理）。

为了更好地细分，markdown 每次换行时都会建立一个主元素，并把文字放进去。

细分是为了更好地进行知识管理，尽管此系统支持 markdown 输入模式，可以但并不适合一个段落很多文字。

### 链接

*可链接元素*包括主元素和`[[]]`包裹的文字。

在浏览模式下，悬浮鼠标到可链接元素上，点击数字，即可唤出搜索栏。

悬浮搜索项进行预览，点击搜索项建立链接。

每条链接不仅关联元素，自身还存在**值**，像神经元或图论中的边一样。

每个可链接元素与`0`元素（并不显示）关联。

元素的值由链接值加起来，链接的越多，元素的值越大。
