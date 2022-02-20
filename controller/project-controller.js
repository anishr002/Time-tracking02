const ProjectModel = require("../model/project-model")

//add

module.exports.addProject=function(req,res){
    let title=req.body.title
    let discription=req.body.discription
    let technology=req.body.technology
    let estimatehours=req.body.estimatehours
    let startdate=req.body.startdate
    let completiondate=req.body.completiondate

    let project= new ProjectModel({
        title:title,
        discription:discription,
        technology:technology,
        estimatehours:estimatehours,
        startdate:startdate,
        completiondate:completiondate
    })

    project.save(function(err,data){
        if(err){
            res.json({msg:"smw",status:-1,data:err})
        }else{
            res.json({msg:"signup done",status:200,data:data})
        }
    })
}

//list

module.exports.getAllProjects=function(req,res){
    ProjectModel.find(function(err,data){
        if(err){
            res.json({msg:"swm",status:-1,data:err})
        }else{
            res.json({msg:"get all projects",status:200,data:data})
        }
    })
}

//delete

module.exports.deleteProject = function(req,res){
    let projectId = req.params.projectId

    ProjectModel.deleteOne({_id:projectId},function(err,data){
        if(err){
            res.json({msg:"smw",status:-1,data:err})
        }else{
            res.json({msg:"PROJECT remove",status:200,data:data})
        }
    })
}

//update

module.exports.updateProject = function(req,res){

    let title= req.body.title
    let discription = req.body.discription
    let technology = req.body.technology
    let estimatehours = req.body.estimatehours
    let startdate = req.body.startdate
    let completiondate=req.body.completiondate

    ProjectModel.updateOne({_id:projectId},{title:title},{discription:discription},{technology:technology},{estimatehours:estimatehours},{startdate:startdate},{completiondate:completiondate},function(err,data){
        if(err){
            res.json({msg:"smw",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })
}