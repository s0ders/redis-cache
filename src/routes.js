const express = require('express')
const router = express.Router()

const { callGithubApi } = require('./middlewares/github-api')
const { cache } = require('./middlewares/cache')

router.get('/github/:username', cache, callGithubApi)

module.exports = { router }