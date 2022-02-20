const mongoose=require("mongoose")



let ProjectModuleSchema = new mongoose.Schema({
    moduleName:{
        type:String
    },
    discription:{
        type:String
    },
    project:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"project"
    }
})

const ProjectModuleModel = mongoose.model("projectmodel",ProjectModuleSchema)
module.exports=ProjectModuleModel