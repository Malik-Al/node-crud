const express = require('express');
const {list} = require('./src/list')
const {create} = require('./src/create')
const app = express()
const PORT = 3000

app.use(express.json())


app.post('/api/create', async(req, res) => {
    const {phone_number, hash_numbe} = req.body
    const result = await create(phone_number, hash_numbe)
    return res.json(result)
})


app.get('/api/list', async(req, res) => {
    const result = await list()
    return res.json(result)
})
