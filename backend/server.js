import express from "express";
// const express = require("express")
const app = express();



//  if you get a GET request under api/notes / just send back "you got 5"
app.get("/api/notes", (req, res) => {
    res.send("you got 5 ");
})
app.listen(5000, () => {
    console.log("Server is running on port 5000");
})