// const data =require('./math');
// const {sum,minus} =require('./math');
// console.log(data.sum(10,20),data.subtract(20,40));
// console.log(sum(10,20),minus(10,40));
const data = require('fs');
// let data2 =data.writeFileSync('./data.text',"hiii my name is subham kumar");
// let data2=data.writeFile("./name.txt",'hiii my name is karan',((err,res)=>{
//     if (err) {
//         console.log('err they file');
        
//     }else{
//         console.log(res);
//     }
// }))
// console.log(data2);


// let data2=data.readFileSync('./name.txt','utf-8');
// console.log(data2);
// data.readFile('./name.txt','utf-8',((err,result)=>{
//     if (err) {
//         console.log('log');
        
//     }else{
//         console.log(result);
//     }
// }))
let data4=data.appendFileSync('./name.txt',`${Date.now()}hii karan this is karan\n `);
console.log(data4);
// data.copyFileSync('./name.txt','copy.txt');
// data.unlinkSync('./copy.txt');
let data3=data.statSync('./data.text')
console.log(data3);