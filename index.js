const express = require("express");
const app = express();
const path = require('path');
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname, "public")));
const port = 3000;
app.listen(port,()=>{
  console.log("app ");
})

app.get('/',(req,res)=>{
res.render("front.ejs");
})