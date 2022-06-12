const express = require('express');
const {list} = require('./src/list')
const app = express()
const PORT = 3000

app.use(express.json())


app.get('/api/list', async(req, res) => {
    const {phone_number, hash_numbe} = req.body
    const result = await list(phone_number, hash_numbe)
    return res.json(result)
})
