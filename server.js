'use strict';

const express = require('express');


const PORT = 3000;
const HOST = '0.0.0.0';


const app = express();
app.get('/', (req, res) => {
  res.send('Node-Docker');
});

app.listen(PORT, HOST);
console.log(`Corriendo http://${HOST}:${PORT}`);