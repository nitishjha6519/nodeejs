const express= require("express");

const app= express();

app.set('view engine', 'ejs');

app.get("/", function(req,res){
 res.render("index",  {name:'Nitish'});
});





app.listen(3000, function(){
    console.log("server is running at port 3000");
});
