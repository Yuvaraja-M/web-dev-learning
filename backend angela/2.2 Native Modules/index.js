// const fs = require("fs");

// // fs.writeFile("message","Hello from Nodejs",(err)=>{
// //     if(err) throw err;
// //     console.log("The file has been saved")
// // })

// fs.readFile("message",'utf-8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })
// const generateName = require("silly");
import generateName from "sillyname"
var SillyName = generateName();
console.log(`My name is ${SillyName}`)