const axios = require('axios')
const redis = require('redis')
const redisClient = redis.createClient()

const callGithubApi = async (req, res) => {
    try {
        const { username } = req.params

        console.log('Calling GitHub API...')

        const response = await axios.get(`https://api.github.com/users/${username}`)
        const public_repos =  response.data.public_repos

        if(public_repos !== null) {
            res.send(`${username} has ${public_repos} public repo.`)
            redisClient.setex(username, 60, public_repos)
        } else {
            res.send(`No public repo. found for ${username}`)
        }

    } 
    catch (err) {
        res.status(500)
    }
}

module.exports = { callGithubApi }