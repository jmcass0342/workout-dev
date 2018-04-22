const express = require('express');
const dbcheck = require('./dbconnection');
const app = express();

app.get('/', (req, res) => res.send(dbcheck.connection()));

app.listen(3000, () => console.log('Example app listening on port 3000!'));