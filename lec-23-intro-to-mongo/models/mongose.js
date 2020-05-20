const mongoose=require('mongoose')

 const productSchema=mongoose.Schema({
    title:String,
    prie:Number,
    slug:Array
})

const productmodel=mongoose.model("products",productSchema)
module.exports=productmodel;