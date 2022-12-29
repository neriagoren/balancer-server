const express = require('express')
const app = express()
const cors = require('cors');
const port = 8080
const db = require('./db');
const dotenv = require('dotenv');
dotenv.config();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization, 'Content-Type' : 'multipart/form-data' ,* "
    );
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

app.use(cors())

app.get('/get-all-expenses', (req, res, next) => {
    db.pool.getConnection(async function (err, conn) {
        if (err) {
            res.status(500).send({ message: 'something went wrong!' })
        } else {
            conn.query('SELECT *  FROM expenses;',
                (err, data) => {
                    if (err) {
                        res.status(500).send({ message: 'something went wrong!' })
                    } else {
                        res.status(200).send(data)
                    }
                })
            conn.release();
        }
    });
})

app.post('/add-expense', (req, res, next) => {
    console.log(req)
    db.pool.getConnection(async function (err, conn) {
        if (err) {
            res.status(500).send({ message: 'something went wrong!' })
        } else {
            conn.query('INSERT INTO expenses (category, value, date) VALUES (?,?,now());',
                [req.body.category, req.body.value], (err, data) => {
                    if (err) {
                        res.status(500).send({ message: 'something went wrong!' })
                    } else {
                        res.status(200).send({ message: 'inserted successfuly!' })
                    }
                })
            conn.release();
        }
    });
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})