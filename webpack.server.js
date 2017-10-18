const path = require('path');
const fs = require('fs');
const url = require('url');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
let config = require('./webpack.config');

//服务器端口
const SERVER_PORT = 8282;

//测试配置
const TEST_DIR = 'src/__test__';

config.entry['script/app'].unshift('webpack-dev-server/client?http://localhost:'+SERVER_PORT+'/');
let compiler = webpack(config);
let server = new WebpackDevServer(compiler,{
    inline: true
});

let app = server.app;

server.listen(SERVER_PORT);