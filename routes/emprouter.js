var express=require('express');
var mongoose=require('mongoose');

var url="mongodb://localhost/sdb";
var emp=require('../model/employee');
var bodyparser=require('body-parser');


const router=express.Router();
router.use(bodyparser.urlencoded({extended:true}));
mongoose.connect(url,function(err){
    if (err) throw err

    else
    {
        console.log("DB CONNECTED");
        
    }
});


router.get("/newemp",function(req,res){
    res.render("newemp");
})

router.get("/viewemp",function(req,res){
    emp.find({},function(err,result){

        if(err) throw err;

        else{
            console.log(result);
            res.render('viewemp',{empdata:result});
            
        }
    })
    
    
})

router.post("/add",function(req,res){
    var e1=new emp();
    e1.eid=req.body.eid;
    e1.name=req.body.ename;
    e1.salary=req.body.esalary;
    e1.save(function(err){
        if(err) throw err;
        
        else
            res.send("Data Added");
    });
    res.send("Emp details added");
})


module.exports=router;