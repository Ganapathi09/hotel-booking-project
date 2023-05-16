import mongoose from "mongoose"

const roomSchema = mongoose.Schema({

    name : {
        type: String ,
        required: true
    },
    maxcount : {
        type:Number,
        required:true
    },
    phonenumber : {
        type:Number,
        require:true
    },
    rentperday : {
        type:Number,
        required:true
    },
    Imageurls : [],
    currentbookings :[],
    type : {
        type:String,
        required:true
    },
    description : {
        type:String,
        required:true
    }

} ,{
    timestamps : true,




})

const roomModel =mongoose.model('rooms', roomSchema)

export default roomModel
