// var express = require('express');
// var app = express();
// app.use(express.static(__dirname + '/src')); //aqui você define onde está o index.html da sua aplicação.
// app.listen(process.env.PORT || 3000);

// console.log(__dirname + '/src');
// console.log('./dist/{{thebrindesfrontend}}');

//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist'));

app.get('/*', function(req,res) {
    
app.use(express.static('./dist'));
res.sendFile(path.join(__dirname,'/dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);