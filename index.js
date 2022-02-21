const express=require('express');
const mongoose=require('mongoose')
const  sessionController=require("./controller/session-controller")
const  rolecontroller=require("./controller/role-controller");
const  userconroller = require("./controller/user-controller")
const  projectcontroller=require("./controller/project-controller")
const  projectteamcontroller=require("./controller/project-team-controller")
const  projectmodulecontroller=require("./controller/project-module-controller")
const  statuscontroller = require("./controller/status-controller")
const  taskcontroller = require("./controller/task-controller")
const  usertaskcontroller = require("./controller/user-task-controller")


const e = require('express');
const app=express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))


//database

mongoose.connect('mongodb://localhost:27017/ecom',function(err){
    if(err){
        console.log("db connection fai....");
        console.log(err);
    }else{
        console.log("db connected...");
    }
})

app.get("/",function(req,res){
    res.write("Welcom")
    res.end()
})

//session
app.get('/login',sessionController.login)
app.get('/signup',sessionController.signup)
app.post('/saveuser',sessionController.saveuser)

//role
app.post('/roles',rolecontroller.addRole)
app.get('/roles',rolecontroller.getAllRoles)
app.delete('/roles/:roleId',rolecontroller.deleteRole)
app.put('/roles',rolecontroller.updateRole)


//user
app.post('/users',userconroller.addUser)
app.get('/users',userconroller.getAllUsers)
app.delete('/users/:userId',userconroller.deleteUser)
app.put('/users',userconroller.updateUser)
app.post("/login",userconroller.login)

//project
app.post('/projects',projectcontroller.addProject)
app.get('/projects',projectcontroller.getAllProjects)
app.delete('/projects/:projectId',projectcontroller.deleteProject)
app.put('/projects',projectcontroller.updateProject)

//project-team
app.post('/projectteams',projectteamcontroller.addProjectTeam)
app.get('/projectteams',projectteamcontroller.getAllProjectTeams)
app.delete('/projectteams/:projectteamId',projectteamcontroller.deleteProjectTeam)
app.put('/projectteams',projectteamcontroller.updateProjectteam)

//project module
app.post('/projectmodules',projectmodulecontroller.addProjectModule)
app.get('/projectmodules',projectmodulecontroller.getAllProjectModules)
app.delete('/projectmodules/:projectModuleId',projectmodulecontroller.deleteProjectModule)
app.put('/projectmodules',projectmodulecontroller.updateProjectmodule)


//status

app.post('/status',statuscontroller.addStatus)
app.get('/status',statuscontroller.getAllStatus)
app.delete('/status/:statusId',statuscontroller.deleteStatus)
app.put('/status',statuscontroller.updateStatus)

//task

app.post('/tasks',taskcontroller.addTask)
app.get('/tasks',taskcontroller.getAllTask)
app.delete('/tasks/:taskId',taskcontroller.deleteTask)
app.put('/tasks',taskcontroller.updateTask)

//user task
app.post('/usertasks',usertaskcontroller.addUserTask)
app.get('/usertasks',usertaskcontroller.getAllUsertask)
app.delete('/usertasks/:usertaskId',usertaskcontroller.deleteUsertask)
app.put('/usertasks',usertaskcontroller.updateUsertask)

//server
app.listen(3000,function(){
    console.log("server start on 3000");
})