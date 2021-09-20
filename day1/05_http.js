const http = require('http')
const fs = require('fs')

http.createServer((request,response)=> {
    const {url,method} = request

     if (url === '/' && method === 'GET') {
        fs.readFile('index.html',(err, data) => {
            if (err) {
            response.writeHead(500, {
                'Content-Type': 'text/plain;charset=utf-8'
            })
            response.end('500 快找后端小伙伴请教一下吧 小老弟')
            return
        }

        response.statusCode = 200
        response.setHeader({
            'Content-Type':'text/html'
        })

        response.end(data)
        })
        response.end('winter yyds')
    }
    response.end('winter yyds')
})
.listen(3000, () => {
    console.log('server at 3000')
})