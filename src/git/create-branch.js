const shell = require('shelljs')
const {baseBranch} = require('../config')
require('colors')

const execGitCommand = (gitCommand) => {
  const executionResult = shell.exec(gitCommand)

  if (shell.error()) {
    throw new Error(executionResult.stderr)
  }
}

const createBranch = (name) => {
  name = name.trim()

  console.log(`Creating branch: ${name}`.blue)

  execGitCommand(`git pull origin ${baseBranch}`)
  execGitCommand(`git checkout -b ${name} ${baseBranch}`)
  execGitCommand(`git push -u origin ${name}`)

  console.log(`Branch ${name} created successfully`.green)
}

module.exports = {
  createBranch
}