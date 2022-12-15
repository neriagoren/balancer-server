const express = require('express')
const app = express()
const cors = require('cors');
const port = 8080

app.use(cors());

app.get('/get-all-expenses', (req, res) => {
    res.json({})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})