const express = require('express');
const app = express();
const port = 3000;
const db = require('../db/index.js');
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

app.post('/', (req, res) => {
    //console.log('posting')
    console.log(req.body);
    // let item = req.body
    // db.connection.query(`INSERT INTO checkout () values `)
})

app.listen(port, () => console.log(`Listening on port ${port}!`));


// db.connection.query(`INSERT INTO groceries (itemName, itemQuantity) values ('${grocery.inputName}', ${grocery.inputQuantity})`, (err, data) => {
