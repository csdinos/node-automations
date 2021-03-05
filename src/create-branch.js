const shell = require('shelljs')
const {baseBranch} = require('./config')
require('colors')

const createBranch = (name) => {
  name = name.trim()

  console.log(`Creating branch: ${name}`.blue)

  let executionResult = shell.exec(`git checkout -b ${name} ${baseBranch}`)

  if (shell.error()) {
    throw new Error(executionResult.stderr)
  }

  executionResult = shell.exec(`git push -u origin ${name}`)

  if (shell.error()) {
    throw new Error(executionResult.stderr)
  }

  console.log(`Branch ${name} created successfully`.green)
}

module.exports = {
  createBranch
}