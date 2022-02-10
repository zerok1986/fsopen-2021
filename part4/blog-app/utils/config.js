require('dotenv').config()

const PORT = process.env.PORT
let DB_REMOTE = process.env.DB_REMOTE

if (process.env.NODE_ENV === 'test') {
  DB_REMOTE = process.env.TEST_DB_REMOTE
}

module.exports = {
  DB_REMOTE,
  PORT,
}
