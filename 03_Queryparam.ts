
//http:localhost:8080/login?upwd='admin'&pwd='admin'
import * as express from "express"

let app:any = express();

app.get('/login',(req:any,res:any):any=>{
    if(req.query.uname==='admin' && req.query.upwd ==='admin'){
        res.status(200).json({Login:'Success'})
    }
    else{
        res.status(401).json({Login:'Failed'})
    }
})
app.listen(8080,()=>{
    console.log('Server Started')
})