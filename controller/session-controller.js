const fs=require("fs")

function login(req,res){
    let loginHtml=fs.readFileSync("./view/login.html")
    res.write(loginHtml)
    res.end()
}



function signup(req,res){
    let signHtml=fs.readFileSync("./view/signup.html")
    res.write(signHtml)
    res.end()
}

function saveuser(req,res){
    console.log(req.body)
    res.write("data save")
    res.end()
}

module.exports.login=login
module.exports.signup=signup
module.exports.saveuser=saveuser