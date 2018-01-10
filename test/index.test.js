/* global describe, test, expect, afterAll */

const check = require('../src/index')
const { execCommand } = require('../src/util')

const branchForMerged = 'test-when-master-merged'
const branchForNotMerged = 'test-when-master-not-merged'

describe('test src/index.js', () => {
  test('when the latest commit of master merged', () => {
    try {
      execCommand('git checkout master');
    } catch (e) {}
    execCommand(`git checkout -b ${branchForMerged}`)
    const result = check()
    expect(result.isMerged).toBe(true)
    expect(result.errorMessage).toBe('')
    execCommand(`git checkout master && git branch -D ${branchForMerged}`);
  })

  test('when the latest commit of master not merged', () => {
    execCommand(`git checkout ${branchForNotMerged}`)
    const result = check()
    expect(result.isMerged).toBe(false)
    expect(result.errorMessage).stringContaining('The latest commit of master hasn\'t been merged into current branch!')
  })

  afterAll(() => {
    execCommand('git checkout master')
  })
})
