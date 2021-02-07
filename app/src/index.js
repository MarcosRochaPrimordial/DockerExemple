const express = require('express');
const mysql = require('mysql');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

const conn = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'password',
    database: 'conne_base',
});

conn.connect((err) => {
    if (err) throw err;
});

app.get('/products', (req, res) => {
    conn.query('SELECT * FROM products', (err, result) => {
        if (err) throw err;

        res.send(result.map(item => ({ name: item.name, price: item.price })));
    });
});

app.listen(PORT, HOST, () => {
    console.log(`Listening to port ${PORT}...`);
});