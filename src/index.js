const { formatError, execCommand } = require('./util')

/**
 * Check whether the latest commit of master has been merged into current branch.
 *
 * @typedef {object} result
 * @property {bool} isMerged
 * @property {string} errorMessage
 * @returns {result}
 */
function check () {
  try {
    execCommand('git fetch origin master')
  } catch (e) {
    return {
      isMerged: false,
      errorMessage: formatError(e.message || e)
    }
  }

  const currentBranch = execCommand('git rev-parse --abbrev-ref HEAD')
  const ancestor = execCommand(`git merge-base origin/master ${currentBranch}`)
  const masterLatest = execCommand('git log --oneline -n 1 --pretty=format:"%H" origin/master')

  if (ancestor !== masterLatest) {
    const latestCommitLog = execCommand('git log --oneline -n 1 --pretty=format:"%s by %cn at %cd (%h)" origin/master')
    const errorMessage = 'The latest commit of master hasn\'t been merged into current branch!\n' +
      `The latest commit of master: ${latestCommitLog}`
    return {
      isMerged: false,
      errorMessage
    }
  }

  return {
    isMerged: true,
    errorMessage: ''
  }
}

module.exports = check
