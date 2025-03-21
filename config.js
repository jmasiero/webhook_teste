// config.js
import dotenv from 'dotenv'

dotenv.config()

const { NODE_ENV, PORT, SECRET_KEY, ECNRYPTION_METHOD } = process.env

export default {
  env: NODE_ENV,
  port: PORT,
  secret_key: SECRET_KEY,
  ecnryption_method: ECNRYPTION_METHOD,
}