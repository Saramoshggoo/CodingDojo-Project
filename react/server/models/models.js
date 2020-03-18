const mongoose=require('mongoose');
const PrimaryObjectSchema= new mongoose.Schema({
name:{
    type:String,
    required:[true, "A title is required silly!"]}
},{timestamps:true})
mongoose.model('PrimaryObject',PrimaryObjectSchema);