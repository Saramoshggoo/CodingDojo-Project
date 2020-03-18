const mongoose=require('mongoose');
const PrimaryObjectSchema= new mongoose.Schema({
name:{
    type:String,
    minlength:[2, "has to be min 2 chara"]},
    
position:{type:String},
status:{type:String, 
    default:"undecided"}
},{timestamps:true})
mongoose.model('PrimaryObject',PrimaryObjectSchema);