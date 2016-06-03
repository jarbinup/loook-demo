var express = require('express');
var app = express();

app.use(express.static(__dirname + '/src'));

app.listen(9000);
console.log('Server is running on port 9000...');
