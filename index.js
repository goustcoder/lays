const express = require("express");
const app = express();
const path = require('path');
const mongoose = require('mongoose');

app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname, "public")));
const Product = require("./models/product.js");
const port = 3000;
//adding mongo db
main().then((res)=>{
  console.log("connect to db");
})
.catch((err)=>{
  console.log(err);
})
async function main (){
  await mongoose.connect('mongodb://127.0.0.1:27017/crunchyHub');
}








app.listen(port,()=>{
  console.log("app ");
  
})

app.get('/', (req,res)=>{
res.render("front.ejs");

})

app.post('/home', async(req,res)=>{
  const data=req.body;

   const products= await Product.find({});
 
  res.render("home.ejs",{data,products});
  
  })

  app.get('/cart',async (req,res)=>{
    const products= await Product.find({});
    res.render("cart.ejs",{products});
  })