const readlineSync = require('readline-sync');

const getNameInteractive = () => {
    return readlineSync.question('What is the branch name? ', {
      limit: (input) => input.length > 0,
      limitMessage: 'Branch name cannot be empty'
    })
  }

  module.exports = {
    getNameInteractive
  }