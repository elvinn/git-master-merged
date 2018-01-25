[![Npm Package](https://img.shields.io/npm/v/git-master-merged.svg)](https://www.npmjs.com/package/git-master-merged)
[![Npm Downloads](https://img.shields.io/npm/dm/git-master-merged.svg)](https://www.npmjs.com/package/git-master-merged)
[![Build Status](https://travis-ci.org/elvinn/git-master-merged.svg?branch=master)](https://travis-ci.org/elvinn/git-master-merged)
[![node](https://img.shields.io/node/v/git-master-merged.svg)](https://github.com/elvinn/git-master-merged)
[![codebeat badge](https://codebeat.co/badges/30fdd548-51c2-4267-a322-8cfab860c520)](https://codebeat.co/projects/github-com-elvinn-git-master-merged-master)
[![Dependency Status](https://david-dm.org/elvinn/git-master-merged.svg)](https://david-dm.org/elvinn/git-master-merged?view=list)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


# git-master-merged

检查 master 的最新提交是否被当前分支合并。

## 安装
用 npm 全局安装：

```shell
$ npm install --global git-master-merged
```

或者作为项目依赖的一部分安装：

```shell
$ npm install --save-dev git-master-merged
```

## 使用
如果是全局安装的话，直接在 git 项目目录下运行如下指令：

```shell
$ npm run git-master-merged
```

如果是作为项目的依赖安装的话，先修改 `package.json`，添加如下代码：

``` json
"scripts": {
  "git-master-merged": "git-master-merged"
}
```

然后在项目目录下行:

```shell
$ git-master-merged
```

另外，我们亦可以将作为 `git-master-merged` 作为编译或者发布前的检查条件，修改 `package.json`，添加如下代码：

``` json
"scripts": {
  "dist": "git-master-merged && webpack --config webpack.config.js",
  "publish": "git-master-merged && other publish commands"
}
```

## 实现原理

1. 先通过 fetch 获取远程 master 的最新提交；
2. 接着获取当前分支名；
3. 再通过 merge-base 获取当前分支和 origin/master 的最近节点；
4. 最后判断最近节点是否与 master 的最新提交相同。

## 修改日志
[ChangeLog](https://github.com/elvinn/git-master-merged/blob/master/CHANGELOG.md)

## 证书
[MIT](https://github.com/elvinn/git-master-merged/blob/master/LICENSE)
