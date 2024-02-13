import mongoose from "mongoose";
import express from "express";
import cors from "cors"
import Usermodel from "./models/User.js"
const app = express()

app.use(cors())
app.use(express.json())



//creteuser
app.post('/CreateUser', (req, res) => {
    Usermodel.create(req.body)
        .then(Users => res.json(Users))
         .catch(err =>  res.json(err))

});

app.get('/', (req, res) => {
    Usermodel.find({})
        .then(Users => res.json(Users))
         .catch(err =>  res.json(err))
         
});

app.get('/getUser/:id', (req, res) => {
   const id = req.params.id
    Usermodel.findById({_id:id})
        .then(Users => res.json(Users))
         .catch(err =>  res.json(err))

});


app.put("/UpdateUser/:id",(req,res)=>{
    const id = req.params.id
  Usermodel.findByIdAndUpdate({_id:id},
    {
     name:req.body.name,
    email:req.body.email,
    age:req.body.age}
    ).then(Users=>res.json(Users))
    .catch(err=>res.json(err))
})

app.delete("/deleteUser/:id",(req,res)=>{
const id = req.params.id
Usermodel.findByIdAndDelete({_id:id})
.then(res=>res.json(res))
.catch(err=>res.json(err))
})


main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Crud');
    console.log("mongodb connected ")

}

app.listen(3001, () => {
    console.log("server run 3001")
})