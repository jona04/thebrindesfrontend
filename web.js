// var express = require('express');
// var app = express();
// app.use(express.static(__dirname + '/src')); //aqui você define onde está o index.html da sua aplicação.
// app.listen(process.env.PORT || 3000);



//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/{{thebrindesfrontend}}'));

app.get('/*', function(req,res) {
    
app.use(express.static('./dist/{{thebrindesfrontend}}'));
res.sendFile(path.join(__dirname,'/dist/{{your-app-name}}/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);