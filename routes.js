// routes.js
import express from 'express'
import { encryptData, decryptData } from './encryption.js'

const router = express.Router()

router.post('/encrypt', (req, res) => {
  const { data } = req.body
  const encryptedData = encryptData(data)
  res.json({ encryptedData })
})

router.post('/decrypt', (req, res) => {
  console.log("chegou aqui", req.body);
  const { encryptedData } = req.body
  console.log(encryptedData)
  const data = decryptData(encryptedData)
  res.json({ data })
})

export default router