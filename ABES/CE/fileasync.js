const fs=require("fs/promises");
const read=async()=>{
    const data =await fs.readFile("./data.txt",
        "utf-8");
        console.log(data);
}
const write=async()=>{
    const newdata="this is my new work"
    await fs.writeFile("./data1.txt", newdata,
        "utf-8");
    }
    
write();
console.log("first")
console.log("2nd")