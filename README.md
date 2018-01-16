[![Npm Package](https://img.shields.io/npm/v/git-master-merged.svg)](https://www.npmjs.com/package/git-master-merged)
[![Npm Downloads](https://img.shields.io/npm/dm/git-master-merged.svg)](https://www.npmjs.com/package/git-master-merged)
[![Build Status](https://travis-ci.org/elvinn/git-master-merged.svg?branch=master)](https://travis-ci.org/elvinn/git-master-merged)
[![node](https://img.shields.io/node/v/git-master-merged.svg)](https://github.com/elvinn/git-master-merged)
[![codebeat badge](https://codebeat.co/badges/30fdd548-51c2-4267-a322-8cfab860c520)](https://codebeat.co/projects/github-com-elvinn-git-master-merged-master)
[![Dependency Status](https://david-dm.org/elvinn/git-master-merged.svg)](https://david-dm.org/elvinn/git-master-merged?view=list)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# git-master-merged ([中文文档](https://github.com/elvinn/git-master-merged/blob/master/README_ZH.md))

Check whether the latest commit of master has been merged into current branch for git projects.

## Installation
Install with npm globally:

```shell
$ npm install --global git-master-merged
```

or as a development dependency for your project:

```shell
$ npm install --save-dev git-master-merged
```

## Usage
If installed globally, just run following command in git project directory:

```shell
$ git-master-merged
```

If installed as a development dependency, set up a check script in `package.json`:

``` json
"scripts": {
  "git-master-merged": "git-master-merged"
}
```

Then run command in project directory:

```shell
$ git-master-merged
```


Also, you can use `git-master-merged` as a requirement of dist or publish, set up dist and scripts in `package.json`:

``` json
"scripts": {
  "dist": "git-master-merged && webpack --config webpack.config.js",
  "publish": "git-master-merged && other publish commands"
}
```

## ChangeLog
[ChangeLog](https://github.com/elvinn/git-master-merged/blob/master/CHANGELOG.md)

## Licence
[MIT](https://github.com/elvinn/git-master-merged/blob/master/LICENSE)

