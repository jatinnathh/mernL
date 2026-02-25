import {Ratelimit} from "@upstash/ratelimit";
import {Redis} from "@upstash/redis";

import dotenv from "dotenv"
//  allows 10 requests prt 20 sec
const ratelimit=new Ratelimit({
    redis:Redis.fromEnv(),
    limiter:Ratelimit.slidingWindow(5, "10 s")
})


export default ratelimit