
let http = require('http')
let url = require('url')


let server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})

    let obj =url.parse(req.url,true).query

    if(obj.uname==='Josh@11'&& obj.upwd==='1111'){
        res.write(`<h3>Login Successfullly with ${obj.uname}</h3>`)
    }
    else{
        res.write('<h3>Login failed</h3>')
    }
    res.end()
})


server.listen(8080)
console.log('data is waiting')