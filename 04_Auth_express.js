"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
//authorization
var auth = (function (req, res, next) {
    var allheaders = req.headers;
    if (allheaders.token === 'AdminId') {
        next();
    }
    else {
        res.status(500).json({ auth: 'failed' });
    }
});
//default 
app.get('/', function (req, res) {
    res.sendFile('D:/MERN Workspace/Nodejs/index.html');
});
//authentication
app.get('/login', [auth], function (req, res) {
    if (req.query.uname === 'admin' && req.query.upwd === 'admin') {
        res.status(200).json({ Login: 'Success' });
    }
    else {
        res.status(401).json({ Login: 'fail' });
    }
});
app.listen(8080, function () {
    console.log('Server Started .....!');
});
