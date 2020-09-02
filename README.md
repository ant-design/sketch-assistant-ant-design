<h1 align="center">Sketch Assistant for Ant Design</h1>

<div align="center">

[![NPM version][npm-image]][npm-url] [![NPM downloads][download-image]][download-url]

[![Test CI status][test-ci]][test-ci-url] [![Coverage][coverage]][codecov-url]

<!-- ![Deploy CI][deploy-ci] -->

[![david deps][david-image]][david-url] [![david devDeps][david-dev-image]][david-dev-url]

<!-- npm url -->

[npm-image]: http://img.shields.io/npm/v/@ant-design/sketch-assistant.svg?style=flat-square
[npm-url]: http://npmjs.org/package/@ant-design/sketch-assistant
[download-image]: https://img.shields.io/npm/dm/@ant-design/sketch-assistant.svg?style=flat-square
[download-url]: https://npmjs.org/package/@ant-design/sketch-assistant

<!-- coverage -->

[coverage]:
  https://codecov.io/gh/ant-design/sketch-assistant-ant-design/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/ant-design/sketch-assistant-ant-design/branch/master

<!-- Github CI -->

[test-ci]: https://github.com/ant-design/sketch-assistant-ant-design/workflows/Test%20CI/badge.svg
[deploy-ci]:
  https://github.com/ant-design/sketch-assistant-ant-design/workflows/Deploy%20CI/badge.svg
[test-ci-url]:
  https://github.com/ant-design/sketch-assistant-ant-design/actions?query=workflow%3ATest%20CI
[deploy-ci-ci]:
  https://github.com/ant-design/sketch-assistant-ant-design/actions?query=workflow%3ADeploy%20CI

<!-- Dependency -->

[david-image]: https://img.shields.io/david/ant-design/sketch-assistant-ant-design?style=flat-square
[david-dev-url]: https://david-dm.org/ant-design/sketch-assistant-ant-design?type=dev
[david-dev-image]:
  https://img.shields.io/david/dev/ant-design/sketch-assistant-ant-design?style=flat-square
[david-url]: https://david-dm.org/ant-design/sketch-assistant-ant-design

</div>

## ⌨ 本地开发

### 安装

```
npm i
```

或

```
yarn install
```

### 测试


```
npm run test

npm run test:coverage # 带测试覆盖率
```

### 打包

本地打包

```
npm run package
```

发布版本

```
npm run release
```

### 参考教程

Sketch 官方教程:

- [Sketch Developer](https://developer.sketch.com/assistants/)
- [Getting started](https://developer.sketch.com/assistants/getting-started)
- [Writing a rule](https://developer.sketch.com/assistants/writing-a-rule)
- [Publishing](https://developer.sketch.com/assistants/publish)

## 架构说明

### 目录架构

```
src
├── index.ts                # 助理入口
├── functions               # 核心校验方法
├── rules                   # 校验规则
└── utils                   # 工具函数库
```

### index.ts

Assistant 核心入口文件， 包含一个 Assistant

### rules

一个 Assistant 包含若干校验规则，例如：

- 图层的行高需要等于字号 + 8;
- 文本需要符合盘古之白;

等等

### functions

这个目录下主要放一些复杂的校验逻辑，例如：

- **盘古之白**：'当你凝视着 bug，bug 也凝视着你' -> '当你凝视着 bug，bug 也凝视着你'；
- **校验文本 图形颜色**: 收敛颜色域到某个值,例如主蓝色需要是 #1890ff；
- **间距判断**：若干图层之间间距为 24px；

等等

### utils

相关的工具函数

## License

[MIT](./LICENSE)
