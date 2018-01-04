const chalk = require('chalk');
const execSync = require('child_process').execSync;

const errorMessages = [
  'Not a git repository (or any of the parent directories)',
  'Could not read from remote repository',
];

function error(msg) {
  console.log(chalk.red(msg));
}

function formatError(error) {
  let matched = false;
  // simplify error messages
  for (const msg of errorMessages) {
    if (error.indexOf(msg) > -1) {
      return msg;
    }
  }
  return error;
}

// { stdio: 'pipe' } to prevent output to the parent process' stderr
function execCommand(command) {
  return execSync(command, { stdio: 'pipe' }).toString().trim();
}

module.exports = {
  error,
  formatError,
  execCommand,
}