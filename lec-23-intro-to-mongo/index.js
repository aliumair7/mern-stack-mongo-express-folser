console.clear()
const express=require('express')
const app=express()
const mongoose=require('mongoose')
const{insertpr,findall,deleteone,updateone}=require("./operations")

app.use(express.json())


mongoose.connect("mongodb://localhost:27017/lec23",{ useNewUrlParser: true, useUnifiedTopology: true  }).then(async()=>{
 console.log("Connected Succesfully")

    // let products=await insertpr("headphone",4090,["rung","mung"])
    // console.log(products)
    // let products=await findall()
    // console.log(products)
    //let delp=await deleteone('5ec42c0255cea735bcfc76db')
    //console.log(delp)
    let updatep=await updateone('5ec43a0f2531763c58d3e34a','headphone updated',4090,['rung up','rfff'])
    console.log(updatep)
}).catch((err)=>{
    console.log("Error while connection")
    console.log(err)

})



app.listen(4040)