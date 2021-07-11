const redis = require('redis')
const redisClient = redis.createClient()

const cache = (req, res, next) => {
    const { username } = req.params

    redisClient.get(username, (err, value) => {
        if(value !== null) {
            res.send(`${username} has ${value} public repo.`)
        } else {
            next()
        }
    })
}

module.exports = cache