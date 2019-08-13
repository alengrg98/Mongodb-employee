var express = require('express');
var path = require('path');

var empRouter = require('./routes/emprouter');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use("/emp",empRouter);
app.use(express.static(path.join(__dirname, 'public')));




app.get("/",function(req,res){
  res.render("index.ejs");

})
app.listen(8000,function () {
  console.log("Listening");
  
  
})