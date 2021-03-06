require('dotenv').config()

const express = require('express')
const router = require('./routes')

const app = express()
const port = process.env.APP_PORT || 3000

app.use(router)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})