var express = require('express');
var app = express();

var port = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function(req, res){
    res.send('Hello World!');
});

app.get('/books', function(req, res){
    res.send('Hello Books!');
});

app.listen(port, function(err){
    if(err){
        console.log('Error:', err);
    } else{
        console.log('Server listening on port', port);
    }
});