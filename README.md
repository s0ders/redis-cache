![](https://upload.wikimedia.org/wikipedia/fr/6/6b/Redis_Logo.svg)

# Redis Cache

A small project to demonstrate Redis caching capabilities with a simple Node/Express application querying GitHub's API.

## Usage
```
git clone https://github.com/s0ders/redis-cache.git
cd redis-cache
npm install
npm run start
```

You can now call `http://localhost:3000/github/<username>` to get the number of public repositories for this GitHub user which will then be cached to Redis for 60s. You can then observe the difference in response time between a brand new API call and a cached response from Redis from the network tab of your browser.
