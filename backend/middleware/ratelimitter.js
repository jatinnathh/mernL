import ratelimit from "../src/config/upstash.js"

const ratelimitter = async (req, res, next) => {

    try {
        //  usually put user id here . not my-limit kry . to chekc how many reqwwuests has a user input 
        const {success}=await ratelimit.limit("my-limit-key")
        
        if (!success) {
            return res.status(429).json({ error: "Too many requests, try again later " })
        }
        next()
    
    } catch(error) {
        console.log("rate limit reached ",error)
        next(error)
    }

}

export default ratelimitter