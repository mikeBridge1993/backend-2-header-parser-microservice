const express = require('express');
const port = process.env.PORT || 3000;
var app = express();

app.get('/', (req, res) =>{
    
    result = {
        ipaddress:  req.headers['x-forwarded-for'] || req.connection.remoteAddress,
        language: req.headers["accept-language"].split(',')[0],
    }
    
    res.send(result);
});

app.listen(port,() => {
    console.log("Server is up on port " + port)
});