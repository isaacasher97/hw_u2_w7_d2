//Dependencies and setup
require("dotenv").config() // loads the variables in the .env into the process.env object
const express = require("express") //require express
const morgan = require("morgan")
const drinks = require("./models/drinks") // return whatever drinks.js exports
const PORT = process.env.PORT // getting the port from the .env file
const app = express() // see express() to a variable


//Middleware
app.use(morgan("dev")) // Middleware


// Routes

app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})

app.get("/drinks", (req, res) => {
    res.send(drinks)
})



// Listener
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})