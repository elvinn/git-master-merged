#! /usr/bin/env node
const process = require('process')

const check = require('../src/index')
const { error } = require('../src/util')

const result = check()

if (!result.isMerged) {
  error(result.errorMessage)
  process.exit(1)
}
