const getBranchName = (ticketData) => {
  const ticketNumber = ticketData.key
  const ticketSummary = ticketData.fields.summary.toLowerCase()

  return `${ticketNumber}-${ticketSummary}`.replace(/\s+/g, '-')
}

module.exports = {
  getBranchName
}