const shell = require('shelljs')
require('colors')

const createBranch = (name) => {
    name = name.trim()
    if (name === '') {
      console.log('Branch name cannot be empty'.red)
      process.exit(0)
    }
  
    console.log(`Creating branch: ${name}`.blue)
    shell.exec(`git checkout -b ${name}`)
    shell.exec(`git push -u origin ${name}`)
  
    console.log(`Branch ${name} created successfully`.green)
  }

  module.exports = {
    createBranch
  }