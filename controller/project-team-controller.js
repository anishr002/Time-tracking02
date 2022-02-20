const ProjectTeamModel = require("../model/project-team-model")

//add
module.exports.addProjectTeam = function(req,res){
    let project = req.body.project
    let user = req.body.user

    let ProjectTeam = new ProjectTeamModel({
        project:project,
        user:user
    })

    ProjectTeam.save(function(err,data){
        if(err){
            res.json({msg:"smw",status:-1,data:err})
        }else{
            res.json({msg:"add projectTeam",status:200,data:data})
        }
    })
}

//list

module.exports.getAllProjectTeams = function(req,res){
     
    ProjectTeamModel.find().populate("project").populate("user").exec(function(err,data){
        if(err){
            res.json({msg:"smw",status:-1,data:err})
        }else{
            res.json({msg:"ProjectTeams ret...",status:200,data:data})
        }
    })
}

//delete

module.exports.deleteProjectTeam = function(req,res){
    let projectteamId = req.params.projectteamId

    ProjectTeamModel.deleteOne({_id:projectteamId},function(err,data){
        if(err){
            res.json({msg:"smw",status:-1,data:err})
        }else{
            res.json({msg:"projectteam remove",status:200,data:data})
        }
    })
}

//update

module.exports.updateProjectteam = function(req,res){

    let projectteamId = req.body.projectteamId
    let project = req.body.project
    let user = req.body.user
    

    UserModel.updateOne({_id:projectteamId},{project:project},{user:user},function(err,data){
        if(err){
            res.json({msg:"smw",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })
}
