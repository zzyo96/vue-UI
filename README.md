# 这是一个vue UI 组件
[![Build Status](https://www.travis-ci.org/zzyo96/vue-UI.svg?branch=master)](https://www.travis-ci.org/zzyo96/vue-UI)

## 写在前面
HI, 我是xyue.wang， 这是我在学习vue过程中实现的基于vue的一套UI框架，欢迎指正！

## 开始使用

1. 安装

使用本框架前，请在 CSS 中开启 border-box

```
*,*::before,*::after{box-sizing: border-box;}
```

IE 8 及以上浏览器都支持此样式。

  你还需要设置默认颜色等变量（后续会改为 SCSS 变量）
  ```
  html {
    --button-height: 32px;
    --font-size: 14px;
    --button-bg: white;
    --button-active-bg: #eee;
    --border-radius: 4px;
    --color: #333;
    --border-color: #999;
    --border-color-hover: #666;
  }
  ```
  IE 15 及以上浏览器都支持此样式。

2. 安装 
  ```
  npm i --save vue-ui-zzyo
  ```
3. 引入 
  ```
  import {Button, ButtonGroup, Icon} from 'vue-ui-zzyo'
  import 'vue-ui-zzyo/dist/index.css'

 export default {
    name: 'app',
    components: {
      'g-button': Button,
      'g-icon': Icon
    }
  }
  ```
4. 引入 svg symbols
  ```
  <script src="//at.alicdn.com/t/font_1488561_ubzrk5cpsnd.js"></script>
  ```
