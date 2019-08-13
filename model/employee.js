var mongoose=require('mongoose');
var schema=mongoose.Schema;

var empschema=new schema({
    eid:{type:String,required:true},
    name:String,
    salary:String

})

var empmodel=mongoose.model("employee",empschema);
module.exports=empmodel;