const express = require('express')
const app = express()
const cors = require('cors');
const port = 8080

app.use(cors());

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function subDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
}

const expenses = [
    {
        id: 0,
        category: 'Food',
        value: 100,
        date: subDays(Date.now(), 0),
    },
    {
        id: 1,
        category: 'Other',
        value: 200,
        date: subDays(Date.now(), 1)
    },
    {
        id: 2,
        category: 'Electronics',
        value: 300,
        date: subDays(Date.now(), 2)
    }
]

app.get('/', (req, res) => {
    res.json(expenses)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})