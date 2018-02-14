const express = require('express');
const moment = require('moment');
const useragent = require('express-useragent');
const port = process.env.PORT || 3000;
const requestIp = require('request-ip');
var app = express();

app.use(useragent.express());

app.get('/', (req, res) =>{
    
    result = {
        ip:  req.headers['x-forwarded-for'] || req.connection.remoteAddress,
        language: req.headers["accept-language"].split(',')[0],
    }
    
    res.send(result);
});

app.listen(port,() => {
    console.log("Server is up on port " + port)
});