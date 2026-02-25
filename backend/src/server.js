import express from "express";
// const express = require("express")
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"
import ratelimitter from "../middleware/ratelimitter.js";
const app = express();
const PORT = process.env.PORT





// middleware, will parse the json bodies 
app.use(express.json())

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
