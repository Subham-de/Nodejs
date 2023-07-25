
let http = require('http')

let server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(
      `<h2>Welcome to Node JS</h2>  `
    )
    res.end()
})

server.listen(8080)
console.log('server started')