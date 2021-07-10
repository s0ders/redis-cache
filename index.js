require('dotenv').config()

const redis = require('redis')
const client = redis.createClient()

client.on('error', (err) => console.error(err))

const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})