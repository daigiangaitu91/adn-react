const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();
app.use('/', serveStatic(path.join(__dirname, '/build')));

const port = process.env.PORT || 5000;
app.listen(port);
console.log(__dirname);
console.log('Server started on port ' + port);
