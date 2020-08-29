var express = require('express');
var app = express();
var port = 3000; 
app.listen(port, function(){
    console.log('server is listening port ' + port);
});
app.get('/', function(request, response){
    response.send('Hello mother fucker');
});
