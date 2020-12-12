const shell = require('shelljs')
const path = require('path')
const { repository } = require('./config.json')

const initialize = () => {
    const { url, baseBranch } = repository
    const repoName = url.substring(url.lastIndexOf('/'))
  
    shell.cd(path.join(__dirname, repoName))
    shell.exec(`git checkout ${baseBranch}`)
    shell.exec(`git pull origin ${baseBranch}`)
  }

  module.exports = {
    initialize
  }