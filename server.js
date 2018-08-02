/**
 * Created by thyhates on 2017/4/19.
 */
const express = require("express");
const compression = require('compression');
const fs = require("fs");
const app = express();
app.use(compression());
app.use(express.static(__dirname ));
app.listen(8087, function () {
    console.log("It's express,welcome!  http://127.0.0.1:8087");
});