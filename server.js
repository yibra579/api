const mongoose = require('mongoose')
const express = require('express')
const Product = require('./models/apiModel')

const app = express()

app.use(express.json())

mongoose.connect('mongodb+srv://grillo:159357@nodetuts.pgd5vzw.mongodb.net/node-API?retryWrites=true&w=majority').then(() => {
    console.log('connected to database')
    // running port
    app.listen(3000, () => {
        console.log('app running on port 3000');
    })
}).catch(err => {
    console.log(err);
})

// routes
app.get('/', (req, res) => {
    res.send('HELLO API')
})

app.post('/product', async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (err) {
        console.log(err.message)
        res.status(500).json({message: err.message})
    }
})