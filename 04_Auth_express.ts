
import * as express from 'express'

let app = express();

//authorization
let auth = ((req:any,res:any,next:any):any=>{
    let allheaders= req.headers;
    if(allheaders.token==='AdminId'){
        next()
    }
    else{
        res.status(500).json({auth:'failed'})
    }
})


//default 
app.get('/',(req:any,res:any):any=>{
    res.sendFile('D:/MERN Workspace/Nodejs/index.html')
})

//authentication
app.get('/login',[auth],(req:any,res:any):any=>{
    if(req.query.uname==='admin'&&req.query.upwd==='admin'){
        res.status(200).json({Login:'Success'})
    }
    else{
        res.status(401).json({Login:'fail'})
    }
})

app.listen(8080,()=>{
    console.log('Server Started .....!')
})