import express from 'express';
const app = express();

app.get('/',(req,res)=>{
    res.send('hello bachho!');
});
 
// http://localhost:3000/api/Aryan/20
app.get('/api/:name/:age',(req,res)=>{
    try{
        const data=req.params;
        res.send(`hello my name is ${data.name} and my age is ${data.age}`);
    }
    catch(err){
        console.log(err.message);
    }
    
});





// app.get('/api',(req,res)=>{
//     const data=req.query;
    // res.send(`Hello Mr. ${data.name} and your roll number is ${data.rollno}`);    //localhost:3000/api?name=Aryan&rollno=16 
// });



// OBJECT DESTRUCTURING 
// app.get('/api',(req,res)=>{
//     const {name="anamta",rollno="10"}=req.query;
//     res.send(`Hello Mrs. ${name} and your roll number is ${rollno}`);    //localhost:3000/api
// });


// using try catch to reduce error size
// app.get('/api',(req,res)=>{
//     try{
//         const {name,rollno}=req.query;
//         if(!name){
//             req.send({
//                 status:404,message:"name is required"
//             });
//             res.status(404).send("Name to dena hi hoga")
//         }
//         else{
//             res.send(`Hello Mrs. ${name} and your roll number is ${rollno}`)
//         }
//     }
//     catch(error){
//         console.log(error.message);
        
//     }
    
// });

const port=3000;
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
});