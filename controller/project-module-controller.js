const ProjectModuleModel = require("../model/project-modul-model")

//add

module.exports.addProjectModule = function(req,res){
    let moduleName=req.body.moduleName
    let discription=req.body.discription
    let project=req.body.project

    let ProjectModule = new ProjectModuleModel({

        moduleName:moduleName,
        discription:discription,
        project:project
    })

    ProjectModule.save(function(err,data){
        if(err){
            res.json({msg:"smw",status:-1,data:err})
        }else{
            res.json({msg:"add module",status:200,data:data})
        }
    })
}

//list

module.exports.getAllProjectModules = function(req,res){
     
    ProjectModuleModel.find().populate("project").exec(function(err,data){
        if(err){
            res.json({msg:"smw",status:-1,data:err})
        }else{
            res.json({msg:"module ret...",status:200,data:data})
        }
    })
}

//delete

module.exports.deleteProjectModule = function(req,res){
    let projectModuleId = req.params.projectModuleId

    ProjectModuleModel.deleteOne({_id:projectModuleId},function(err,data){
        if(err){
            res.json({msg:"smw",status:-1,data:err})
        }else{
            res.json({msg:"module remove",status:200,data:data})
        }
    })
}

//update

module.exports.updateProjectmodule = function(req,res){

    let projectModuleId = req.body.projectModuleId
    let moduleName = req.body.moduleName
    let discription = req.body.discription
    let project = req.body.project
    

    ProjectModuleModel.updateOne({_id:projectModuleId},{moduleName:moduleName},{discription:discription},{project:project},function(err,data){
        if(err){
            res.json({msg:"smw",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })
}