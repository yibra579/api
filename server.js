const express = require('express')
const app = express()

// running port
app.listen(3000, () => {
    console.log('API running on port 3000')
})

// routes
app.get('/', (req, res) => {
    res.send('HELLO API')
})