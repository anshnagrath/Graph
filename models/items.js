import mongoose, { Schema } from 'mongoose';
const itemSchema =  new Schema({
    text:{
        type:String
    },
    time:{
        type:Number
    },
    timeISO:{
        type:String
    },
    title:{
        type:String,
        required:true
    },
    deleted:{
        type:Boolean
    }
})
export default mongoose.model('item',itemSchema);