// encryption.js
import crypto from 'crypto'
import config from './config.js'
import CryptoJS from 'crypto-js'

const { secret_key, secret_iv, ecnryption_method } = config

if (!secret_key || !secret_iv || !ecnryption_method) {
  throw new Error('secretKey, secretIV, and ecnryptionMethod are required')
}

// Generate secret hash with crypto to use for encryption
const key = crypto
  .createHash('sha512')
  .update(secret_key)
  .digest('hex')
  .substring(0, 32)
const encryptionIV = crypto
  .createHash('sha512')
  .update(secret_iv)
  .digest('hex')
  .substring(0, 16)

// // Original - Encrypt data
// export function encryptData(data) {
//   const cipher = crypto.createCipheriv(ecnryption_method, key, encryptionIV)
//   return Buffer.from(
//     cipher.update(data, 'utf8', 'hex') + cipher.final('hex')
//   ).toString('base64') // Encrypts data and converts to hex and base64
// }

//Encrypt data
export function encryptData(data) {
  const cipher = crypto.createCipheriv(ecnryption_method, key, encryptionIV)
  return Buffer.from(
    cipher.update(data, 'utf8') + cipher.final('hex')
  ).toString('base64') // Encrypts data and converts to hex and base64
}

// // Decrypt data
// export function decryptData(encryptedData) {
//   const buff = Buffer.from(encryptedData, 'base64')
//   const decipher = crypto.createDecipheriv(ecnryption_method, key, encryptionIV)
//   return (
//     decipher.update(buff.toString('utf8'), 'hex', 'utf8') +
//     // decipher.update(buff.toString('utf8'), 'base64', 'utf8')
//     // decipher.final('utf8')
//     decipher.final('utf8')
//   ) // Decrypts data and converts to utf8
// }

// Decrypt data
// export function decryptData(encryptedData) {
//   const buff = Buffer.from(encryptedData, 'base64')
//   const decipher = crypto.createDecipheriv(ecnryption_method, key, encryptionIV)
//   const decrypted = decipher.update(buff.toString('utf8'), 'base64') + decipher.final('utf8')
//   return decrypted;

// }

export function decryptData( encryptedData){ 
    // let secretkey = "82c6a4af7d0db2abf39a565c10ca0d4f4c6a978c"
    let secretkey = "OPADRINHOTESTE"
    console.log("codigo que veio do sistema", encryptedData);
    let encrypted =     CryptoJS.enc.Base64.parse(decodeURIComponent(encryptedData.notification));
    let ive = CryptoJS.enc.Base64.parse(decodeURIComponent(encryptedData.iv));
  
    let key = CryptoJS.enc.Utf8.parse(CryptoJS.SHA1(secretkey).toString().substring(0, 32));
  
    let decrypted = CryptoJS.AES.decrypt(
        {ciphertext: encrypted}, 
        key, 
        { 
            iv: ive,
            mode: CryptoJS.mode.CBC, 
            padding: CryptoJS.pad.Pkcs7 
        }
    );
    console.log("codigo decriptado", decrypted.toString(CryptoJS.enc.Utf8));
    return decrypted.toString(CryptoJS.enc.Utf8);
  }

