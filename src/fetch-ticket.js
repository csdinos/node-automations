const fetch = require('node-fetch')
const base64 = require('base-64')
const {jira} = require('./config')

const fetchTicket = async (ticketNumber) => {
  const response = await fetch(
    `${jira.baseUrl}/issue/${ticketNumber}`,
    getOptions()
  )

  if (!response.ok) {
    throw new Error(`Failed to fetch information for ticket: ${ticketNumber}`)
  }

  return await response.json()
}

const getOptions = () => {
  const token = base64.encode(`${process.env.JIRA_USER}:${process.env.JIRA_API_TOKEN}`)

  return {
    headers: {
      Authorization: `Basic ${token}`
    }
  }
}

module.exports = {
  fetchTicket
}