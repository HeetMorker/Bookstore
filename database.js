const mongoose=require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/bookstore").then(()=>{
    console.log("connetion succesfulll");
}).catch((e)=>{
    console.log(e);
})

const Schema= new mongoose.Schema({
    title:String,
    book_type:String,
    stock:Number,
    val_currency:Number,
    author:String,
    timestamp: { type: Date, default: Date.now }
});


const Usermodel = mongoose.model("User",Schema);
module.exports =Usermodel;


