const mongoose = require("mongoose")


let ProjectSchema = new mongoose.Schema({
    title:{
        type:String
    },
    discription:{
        type:String
    },
    technology:{
        type:String
    },
    estimatehours:{
        type:Number
    },
    startdate:{
        type:Date
        
    },
    completiondate:{
        type:Date
        
    }
})


const ProjectModel = mongoose.model("project",ProjectSchema)
module.exports=ProjectModel