const express = require('express');
const app = express();
const port = 5555;
const db = require('../db/index.js');
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

app.post('/', (req, res) => {
    let item = req.body;
    db.connection.query(`INSERT INTO information (TheName, email, ThePassword, line1, line2, city, TheState, zipCode, TheNumber, expiration, billingZipCode ) values ("${item.name}", "${item.email}", "${item.password}", "${item.line1}", "${item.line2}", "${item.city}", "${item.state}", "${item.zipCode}", "${item.number}", "${item.expiration}", "${item.billingZipCode}")`, (err, data) => {
        // db.connection.query(`INSERT INTO information (TheName) values ("${item.name}")`, (err, data) => {
        if(err){
            res.status(500).send(err);
        } else {
            res.status(200).send()
        }
    });
});

app.get('/', (req, res) => {
    console.log(req.body);
    db.connection.query('SELECT * FROM information', (err, data) => {
        if(err){
            res.status(500).send();
        } else {
            res.status(200).send(data)
        }
    });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));


