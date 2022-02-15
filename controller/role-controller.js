module.exports.addRole = function(req,res){

    console.log(req.body.roleName);
    res.json(
        {
            msg:"role id",
            status: 200,
            data : req.body
        }
    )
}