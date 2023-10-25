# Admin Next Template

## 简介

Admin Next Template 是一个开源的后台管理模版。

## 特性

- **技术栈**：使用 Vue3/ElementPlus 等前端前沿技术开发
- **TypeScript**：应用程序级 JavaScript 的语言
- **特性**：支持使用 Vue 和渲染函数编写组件

## 准备

- [Node](http://nodejs.org/) 和 [Git](https://git-scm.com/)
- [Vue3](https://v3.cn.vuejs.org/guide/introduction.html)
- [ElementPlus](https://element-plus.gitee.io/zh-CN/guide/design.html)

## 安装使用

- 获取项目代码

```bash
git clone https://gitee.com/jh_shot/admin-next-template.git
```

- 安装依赖

```bash
npm i
```

- 运行

```bash
npm run dev
```

- 打包

```bash
npm run build
```

## 注意事项

- 装上 volar 插件后更好的支持模板开发
- 路由页面文件名统一为 `index`
- 装上 volar 插件后更好的支持模板开发
- 缓存最多支持三级路由
- 项目开发时请锁定依赖版本
- 通用组件用 scss 编写样式，页面用 Scoped Style + Vue 编写
- 不再支持 jsx 写法，推荐使用单文件或者渲染函数编写组件

## 待处理

- 隐藏头部不固定时的横向滚动条
