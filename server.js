const express = require('express')
const mongoose = require('mongoose')
const app = express()
const rout = require('./routes/routes.js')
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workoutDB', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

//routes from routes folder
app.use(rout);

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`))
