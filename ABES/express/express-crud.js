import express from "express";
const users=[{
    id:1,
    name:"Harsh",
    age:20              
},
{
    id:2,
    name:"Khushi",
    age:20   
}
];

const app=express();
const port=3000;
app.get("/",(req,res)=>{
    res.send(users);
});
// app.get("/",(req,res)=>{
//     res.send("Server is sending this data");
// });
app.use(express.json());
app.post("/",(req,res)=>{
    const bodydata=req.body;
    console.log(bodydata);
    res.send("This is post request data from server");
});
app.post("/api/createUser",(req,res)=>{
    const{ name,age}=req.body;
    const newid=users.length>0 ? users[users.length-1].id+1 : 1;
    const bodydata=req.body;
    users.push({id:newid,name,age});
    res.send("New user is created Successfully");
});
app.get("/api/user/:id",(req,res)=>{
    const {id}=req.params;
    const user=users.find((user)=>user.id==id);
    res.send(user);
});
app.patch("/api/updateuser/:id",(req,res)=>{
    const {id}=req.params;
    const {name}=req.body;
    const index=users.findIndex((user)=>user.id==id);
    users[index].name=name;
    res.send("User is updated successfully");
});
app.delete("/api/deleteuser/:id",(req,res)=>{
    const {id}=req.params;
    // const {name}=req.body;
    const index=users.findIndex((user)=>user.id==id);
    users.splice(index,1);
    // users[index].name=name;
    res.send("User is deleted successfully");
});
app.listen(port,()=>{
    console.log(`server is listening on ${port}`);
  
});