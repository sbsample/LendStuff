const express = require('express');
const app     = express();
const port    = 3030;

app.use(express.static(__dirname));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/views/homepage/homepage.html')
});

app.listen(port, function(){
  console.log(`Listening on port ${port}`)
})
