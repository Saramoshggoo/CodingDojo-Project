const mongoose=require('mongoose');
const PrimaryObjectSchema= new mongoose.Schema({

name:{
    type:String,
    minlength:[3, " name has to be min 3 chara"],
  
},
status:{type:String, 
    default:"notstart"} , 
dodate:{type:Date,
    required:[true, "enter the date please"]
}

},{timestamps:true})
mongoose.model('PrimaryObject',PrimaryObjectSchema);