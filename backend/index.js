const express=require('express');
const mongoose=require('mongoose');
var bodyparser=require('body-parser');
var cors =require('cors');
const app=express();
const port=process.env.PORT||5000;
const Task=require('./Model/Task');

app.use(cors());
var router = express.Router();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
//app.use(express.urlencoded({ extended: false }));

mongoose.Promise=global.Promise;

app.post('/task',(req,res)=>{
    var task =new Task({
        name:req.body.name,
        price:req.body.price
    });
    task.save().then((result)=>{
        res.send(result);
        console.log(result);
    }).catch((err)=>{
        res.send(err);
        console.log('error occured');
    })
});

app.get('/task',(req,res)=>{
    Task.find({}).then((result)=>{
        res.send(result);
    }).catch((err)=>{
        res.send(err);
    })
});

mongoose.connect('mongodb+srv://Virendra:virendra@assignment-gg74z.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true})
.then(()=>{
    app.listen(5000);
    console.log('Connected to database');
}).catch((err)=>{
    console.log(err);
});