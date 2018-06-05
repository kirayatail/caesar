var express = require("express")
var app = express()
app.use(express.static("static"));
app.listen({port: process.env.PORT || 3000});
