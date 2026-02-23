import express from "express";
// const express = require("express")
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"
const app = express();
const PORT=process.env.PORT
connectDB();

app.use(express.json())
app.use("/api/notes",notesRoutes)


app.listen(PORT, () => {
    console.log("Server is running on port 5000");
})