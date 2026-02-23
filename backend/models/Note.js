import mongoose from "mongoose";


//  create a schema and them model vbased oof of tttha schema 

const noteSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }},{timestamps:true}) 


const Note=mongoose.model("Note",noteSchema)
export default Note