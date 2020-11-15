const shell = require('shelljs')
const { stdin, stdout } = require('process');
const readline = require('readline');
const path = require('path')
const { repository } = require('./config.json')
require('colors')

const { url, baseBranch } = repository
const repoName = url.substring(url.lastIndexOf('/'))

console.log(`${__dirname}`.blue)

const repoPath = path.join(__dirname, repoName)
console.log(`${__dirname}`.blue)
shell.cd(repoPath)

shell.exec(`git checkout ${baseBranch}`)
shell.exec(`git pull origin ${baseBranch}`)

const interface = readline.createInterface(stdin, stdout);

const onInput = (input) => {
  interface.close()
  stdin.destroy()

  createBranch(input)
}

const createBranch = (input) => {
  const name = input.trim()
  if (name === '') {
    console.log('Branch name cannot be empty'.red)
    process.exit(0)
  }

  console.log(`Creating branch: ${name}`.blue)
  shell.exec(`git checkout -b ${name}`)
  shell.exec(`git push -u origin ${name}`)
}

interface.question('What is the branch name? ', onInput)