const express=require("express")
const app=express()

app.use(express.static("public"))


const web3=require("web3")



app.listen(8000,()=>{
    console.log("server is listening on port 8000")
})