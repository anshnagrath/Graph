import mongoose, { Schema } from 'mongoose';
const userSchema =  new Schema({
    firstName:{
        type:String,
        required:true
    },                         
    lastName:{
        type:String
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String
    
    },
    gender:{
        type:String
    },
    items:[{
        ref:"item",
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }]
})
export default mongoose.model('user',userSchema);