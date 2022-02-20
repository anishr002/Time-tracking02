const StatusModel = require("../model/status-model")






module.exports.addStatus = function(req,res){

    console.log(req.body.statusName);

    let status = new StatusModel({
        statusName:req.body.statusName
    })

    status.save(function(err,success){
        if(err){
            console.log(err);
            res.json({msg:"SWM",status:-1,data:req.body})
        }else{
            res.json({msg:"satus generate",status:200,data:success})
        }
    })

}



module.exports.getAllStatus=function(req,res){
    StatusModel.find(function(err,data){
        if(err){
            res.json({msg:"swm",status:-1,data:err})
        }else{
            res.json({msg:"status",status:200,data:data})
        }
    })
}

module.exports.deleteStatus =function(req,res){
    let statusId=req.params.statusId

    StatusModel.deleteOne({"_id":statusId},function(err,data){
        if(err){
            res.json({msg:"swm",status:-1,data:err})
        }else{
            res.json({msg:"remove",status:200,data:data})
        }

    })
}

 module.exports.updateStatus = function(req,res){

    let statusId = req.body.statusId
    let statusName = req.body.statusName

    StatusModel.updateOne({_id:statusId},{statusName:statusName},function(err,data){
        if(err){
            res.json({msg:"swm",status:-1,data:err})
        }else{
            res.json({msg:"update",status:200,data:data})
        }

    })
 }