const express = require('express');

const app = express();
require('./plugins/db')
app.listen(3000, ()=>{
    console.log('http://localhost:3000');
});