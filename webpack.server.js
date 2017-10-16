const path = require('path');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const store = require('./src/__test__/wait/info.json');
const user = require('./src/__test__/wait/user.json');
let config = require('./webpack.config');

const SERVER_PORT = 8282;

config.entry['script/app'].unshift('webpack-dev-server/client?http://localhost:'+SERVER_PORT+'/');
let compiler = webpack(config);
let server = new WebpackDevServer(compiler,{
    inline: true
});

let app = server.app;

//测试配置
let TEST_DIR = 'src/__test__';

let router = {
    jsonUrl: (req, res) => {
        res.setHeader("Content-Type", "application/json; charset=UTF-8");
        fs.createReadStream(path.join(__dirname, TEST_DIR, url.parse(req.url).pathname + '.json')).pipe(res);
    },
    json: (object,res) => {
        res.setHeader("Content-Type", "application/json; charset=UTF-8");
        res.end(JSON.stringify(object));
    }
}

//自愿
app.get('/wait/info', (req, res) => {
   let info = url.parse(req.url,true).query;
   if(info.keyword){

   }else{
       router.jsonUrl(req,res);
   }
});

app.get('/wait/user', (req, res) => {
    let info = url.parse(req.url,true).query;
    let all = [];
    store.forEach(item => {
        all = all.concat(item.data);
    });
    let item = all.filter(item => item.id === info.id)[0];
    user.flight = item.flight;
    router.json(user,res);
});

app.get('/wait/db', (req, res) => {
    router.jsonUrl(req,res);
});

server.listen(SERVER_PORT);