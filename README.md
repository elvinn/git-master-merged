[![Npm Package](https://img.shields.io/npm/v/git-master-merged.svg)](https://www.npmjs.com/package/git-master-merged)
[![Npm Downloads](https://img.shields.io/npm/dm/git-master-merged.svg)](https://www.npmjs.com/package/git-master-merged)
[![Dependency Status](https://david-dm.org/elvinn/git-master-merged.svg)](https://npmjs.org/package/git-master-merged)

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

