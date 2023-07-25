"use strict";
//http:localhost:8080?upwd='admin'&pwd='admin'
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get('/login', function (req, res) {
    if (req.query.uname === 'admin' && req.query.upwd === 'admin') {
        res.status(200).json({ Login: 'Success' });
    }
    else {
        res.status(401).json({ Login: 'Failed' });
    }
});
app.listen(8080, function () {
    console.log('Server Started');
});
