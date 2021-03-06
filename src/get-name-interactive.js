const readlineSync = require('readline-sync');

const getNameInteractive = () => {
  return readlineSync.question('What is the ticket number? ', {
    limit: (input) => input.length > 0,
    limitMessage: 'Please provide a none empty value'
  })
}

module.exports = {
  getNameInteractive
}