require('dotenv').config()

const {fetchTicket} = require('./fetch-ticket')
const {createBranch} = require('./create-branch')
require('colors')

const getBranchName = (ticketData) => {
  const ticketNumber = ticketData.key
  const ticketSummary = ticketData.fields.summary.toLowerCase()

  return `${ticketNumber}-${ticketSummary}`.replace(/\s+/g, '-')
}

const start = async () => {
  const ticketData = await fetchTicket('AUT-1')
  const branchName = getBranchName(ticketData)
  createBranch(branchName)
}

start().then((data) => {
  console.log('success'.green)
}).catch((error) => {
  console.log(`${error}`.red)
})