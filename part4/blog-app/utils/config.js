require('dotenv').config()

const PORT = process.env.PORT
const DB_REMOTE = process.env.DB_REMOTE

module.exports = {
  DB_REMOTE,
  PORT,
}
