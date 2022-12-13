const express = require('express')
const app = express()
const port = 8080

const expenses = [{
    id: 0,
    category: 'Food',
    value: 100,
}]

app.get('/', (req, res) => {
    res.json(expenses)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})