const minimist = require('minimist');
const { createBranch } = require('./create-branch')
const { getNameInteractive } = require('./get-name-interactive')
const { initialize } = require('./initialize')

const argv = minimist(process.argv.slice(2))
initialize()
createBranch(argv.name || getNameInteractive())

