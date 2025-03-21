// encryption.js
import config from './config.js'
import CryptoJS from 'crypto-js'

const { secret_key, ecnryption_method } = config

if (!secret_key || !ecnryption_method) {
  throw new Error('secretKey, and ecnryptionMethod are required')
}

export function decryptData( encryptedData){ 
    // let secretkey = "OPADRINHOTESTE"
    console.log("codigo que veio do sistema", encryptedData);
    let encrypted = CryptoJS.enc.Base64.parse(decodeURIComponent(encryptedData.notification));
    let ive = CryptoJS.enc.Base64.parse(decodeURIComponent(encryptedData.iv));
  
    // let key = CryptoJS.enc.Utf8.parse(CryptoJS.SHA1(secretkey).toString().substring(0, 32));
    let key = CryptoJS.enc.Utf8.parse(CryptoJS.SHA1(secret_key).toString().substring(0, 32));
  
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

