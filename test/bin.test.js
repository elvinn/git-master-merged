/* global describe, beforeAll, test, expect, afterAll */

const { exec } = require('child_process')
const { execCommand } = require('../src/util')
const rimraf = require('rimraf')

const testProjectUrl = 'https://github.com/elvinn/git-master-merged-test.git'
const testDir = 'git-master-merged-test'
const branchForMerged = 'master-merged'
const branchForNotMerged = 'master-not-merged'

describe('test src/index.js', () => {
  beforeAll(() => {
    execCommand(`git clone ${testProjectUrl} ${testDir}`)
  })

  test('when the latest commit of master merged', (done) => {
    execCommand(`cd ${testDir} && git checkout ${branchForMerged}`)
    exec(`cd ${testDir} && node ../bin/git-master-merged.js`, (error, stdout, stderr) => {
      expect(error).toBe(null)
      done()
    })
  })

  test('when the latest commit of master not merged', (done) => {
    execCommand(`cd ${testDir} && git checkout ${branchForNotMerged}`)
    exec(`cd ${testDir} && node ../bin/git-master-merged.js`, (error, stdout, stderr) => {
      expect(error.code).toBe(1)
      expect(stdout).toContain('The latest commit of master hasn\'t been merged into current branch!')
      done()
    })
  })

  afterAll((done) => {
    rimraf(testDir, done)
  })
})
