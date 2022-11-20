const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
    res.send('Hello World!');
});

app.get('/adder', function(req, res){
    const one = req.query.one;
    const two = req.query.two;
    const result = Number(one) + Number(two);
    res.send(String(result));
});

app.listen(3000, function(){
    console.log('Server Listening on 3000👻');
});