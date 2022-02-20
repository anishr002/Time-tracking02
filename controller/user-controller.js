const UserModel = require("../model/user-model")


//add[post]
module.exports.addUser=function(req,res){

    let firstName =req.body.firstName
    let email =req.body.email
    let password = req.body.password
    let role = req.body.role


    let user = new UserModel({
        firstName:firstName,
        email:email,
        password:password,
        role:role
    })

    user.save(function(err,data){
        if(err){
            res.json({msg:"smw",status:-1,data:err})
        }else{
            res.json({msg:"signup done",status:200,data:data})
        }
    })
}

//list
module.exports.getAllUsers = function(req,res){
     
    UserModel.find().populate("role").exec(function(err,data){
        if(err){
            res.json({msg:"smw",status:-1,data:err})
        }else{
            res.json({msg:"user ret...",status:200,data:data})
        }
    })}

//delete

module.exports.deleteUser = function(req,res){
    let userId = req.params.userId

    UserModel.deleteOne({_id:userId},function(err,data){
        if(err){
            res.json({msg:"smw",status:-1,data:err})
        }else{
            res.json({msg:"user remove",status:200,data:data})
        }
    })
}

//update

module.exports.updateUser = function(req,res){

    let userId = req.body.userId
    let firstName = req.body.firstName
    let email = req.body.email
    let password = req.body.password
    let role = req.body.role

    UserModel.updateOne({_id:userId},{firstName:firstName},{email:email},{password:password},{role:role},function(err,data){
        if(err){
            res.json({msg:"smw",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })
}