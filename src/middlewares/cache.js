const redisClient = require('../utils/redis-client')

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