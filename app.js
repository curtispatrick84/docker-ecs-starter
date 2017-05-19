const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const port = process.env.PORT || 8800
const root = `${__dirname}/public`

app.use(express.static(root))

app.listen(port, () => console.log(`docker-starter running on ${port}`))
