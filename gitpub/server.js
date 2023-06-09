//Dependencies and setup
require("dotenv").config() // loads the variables in the .env into the process.env object
const express = require("express") //require express
const morgan = require("morgan")
const drinks = require("./models/drinks") // return whatever drinks.js exports
const PORT = process.env.PORT // getting the port from the .env file
const app = express() // see express() to a variable


//Middleware
app.use(morgan("dev")) //SETS UP OUT LOGGING MIDDLEWARE


// Routes

app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})

app.get("/drinks", (req, res) => {
    res.render("index.ejs", {drinks})
})

app.get("/drinks/:id", (req, res) => {
    const id = req.params.id
    let drink = drinks[id]
    res.render("show.ejs", {drink})
})

// Listener
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})