const { default: mongoose } = require('mongoose');
const mongoes = require('mongoose');
const Schema = mongoes.Schema;

const productList = new Schema({
    title : {
        type :String,
        required : true,
    },
    description : {
        type :String,


    },
    image : 
        
       {
        type: String,
    },

    price : {
        type :Number,
    },

    flavour :{
        type:String
    },
    recipe :{
        type:String
    },
    ingredient:{
      type:String
    },
})

const Product = mongoes.model("Product",productList);
module.exports= Product;