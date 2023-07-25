
let express = require('express')


//calling
let app = express();

//GET
app.get('/',(req,res)=>{
        res.status(200).json({'Message':'Data welcome to Get Req'})
})

app.get('/demo',(req,res)=>{
    res.status(200).json({'Message':'Data Fetched from demo'})
})



//POST
app.post('/',(req,res)=>{
    res.status(200).json({'Message':'Data welcome to Post Req'})
})

app.get('/demo',(req,res)=>{
  res.status(200).json({'Message':'Data Fetched from POST !!!!'})
})


app.listen(8080,()=>{
    console.log('Server Started')
})