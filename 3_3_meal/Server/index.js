let fs = require('fs')

var express = require('express')

let jsonStr = fs.readFileSync('./data.json', {
    encoding: 'utf-8'
});

let data = JSON.parse(jsonStr);

var app = express();

app.use(express.static('public'));

app.get('/data', (req, res) => {
    let [...arr] = data
    let start = [req.query.page - 1] * req.query.pageSize;
    res.setHeader('X-Total-Count', data.length);
    res.send(arr.splice(start, req.query.pageSize));
});

app.listen(3000, () => {
    console.log('服务器启动成功，地址为：http://127.0.0.1:3000');
})