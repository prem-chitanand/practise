const express =require('express');
const app=express();
const port=5500;
verify=(req,res,next)=>{
    console.log(req.headers)
    if(req.headers['user-agent']==="Thunder Client (https://www.thunderclient.io)") next()
    else res.send("blocked");
}
app.get('/', verify,(req,res)=>{
    res.send('verified');
})

app.listen(port,()=>{
    console.log("the server is running at prot 5500");
})