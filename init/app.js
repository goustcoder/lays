const mongoose = require('mongoose');
const initData = require("./data.js");
const Product =require("../models/product.js");

main().then((res)=>{
    console.log("connect to db");
})
.catch((err)=>{
    console.log(err);
})
async function main (){
    await mongoose.connect('mongodb://127.0.0.1:27017/crunchyHub');
}

const initDB = async ()=>{
    await Product.deleteMany({});
    await Product.insertMany(initData.data);
    console.log("data was initialized");
    console.log(initData.data);
 }
 
 initDB();