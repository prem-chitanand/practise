const fs=require('fs');
fs.readFile('./test.txt',(error,data) => {
   if(error) console.log(error)
   else console.log(data.toString())
})
console.log(fs.readFileSync('./test.txt','utf-8'));
console.log("im a random");
fs.writeFile('./test.txt',"new stuff added inside",(error,data) => {
   if(error) console.log(error)
})