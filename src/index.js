require('dotenv').config()
require('colors')

const minimist = require('minimist');
const {fetchTicket} = require('./fetch-ticket')
const {createBranch} = require('./git/create-branch')
const {getBranchName} = require('./git/utils')
const {getNameInteractive} = require('./get-name-interactive')

const getTicketInput = () => {
  const options = {
    alias: {
      h: 'help',
      t: 'ticket'
    }
  }
  const argv = minimist(process.argv.slice(2), options)

  return argv.ticket || getNameInteractive()
}

const start = async () => {
  const ticketNumber = getTicketInput()
  const ticketData = await fetchTicket(ticketNumber)
  const branchName = getBranchName(ticketData)

  createBranch(branchName)
}

start().then((data) => {
  console.log('success'.green)
}).catch((error) => {
  console.log(`${error}`.red)
})