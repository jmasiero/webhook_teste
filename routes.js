// routes.js
import express from 'express'
import { decryptData } from './encryption.js'

const router = express.Router()


router.post('/decrypt', (req, res) => {
  
  console.log("chegou aqui", req.body)
  // const { encryptedData } = req.body
  const encryptedData = req.body
  
  const data = decryptData(encryptedData)
  res.json({ data })
})

export default router