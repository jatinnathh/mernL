import express from "express";
import dotenv from "dotenv"
import cors from "cors"
// const express = require("express")

dotenv.config()

import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import ratelimitter from "../middleware/ratelimitter.js";

const app = express();
const PORT = process.env.PORT || 5000





// middleware, will parse the json bodies 
app.use(express.json())

// CORS middleware - must be before routes
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174"]
}))

//  simple middleware
// app.use((req, res, next) => {
//     console.log(`we got request from ${req.url} and method is ${req.method}`) 
//     next()
// })

app.use(ratelimitter)
app.use("/api/notes", notesRoutes)

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server is running on port 5000");
    })

})
