#! /usr/bin/env node
const proess = require('process')

const check = require('../src/index')
const { error } = require('./util')

const result = check()

if (!result.isMerged) {
  error(result.errorMessage)
  proces.exit(1)
}
