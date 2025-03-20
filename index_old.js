// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(bodyParser.json());

// app.post('/webhook', (req, res) => {
//     console.log('Received webhook:', req.body);
//     res.sendStatus(200);
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

// server.js
import express from 'express'
import routes from './routes.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(routes)

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})