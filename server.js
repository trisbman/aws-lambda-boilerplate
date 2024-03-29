const express = require('express')
const cors = require('cors')
const app = express()
const port = 8080

const { handler } = require('./index')

app.use(cors())
app.get('/', async (req, res) => {    
    const response = await handler(req.query)
    console.log(response)
    res.send(response)
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})