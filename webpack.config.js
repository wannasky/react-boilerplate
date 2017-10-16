const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

//设置当前运行环境（development/production）
const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';

console.log('当前运行环境：', nodeEnv);

//设置插件
let plugins = [
    //清空build目录
    new CleanWebpackPlugin(['build']),

    //定义全局变量
    new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify(nodeEnv)
        }
    }),

    //提取公共部分
    new webpack.optimize.CommonsChunkPlugin({
        name: 'script/common'
    }),

    //提取样式文件
    new ExtractTextWebpackPlugin({
        filename: 'style/style.css'
    }),

    //创建首页
    new HtmlWebpackPlugin({template: 'index.html'})
]

if (isProduction) {
    plugins.push(

        //压缩代码
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            },
            compress: {
                warnings: false
            }
        })
    )
} else {

}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    entry: {
        'script/app': ['entry.jsx']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build')
    },
    externals: {},
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.join(__dirname, './src')
        ],
        alias: {
            "components": path.resolve(__dirname, "src/components"),
            "views": path.resolve(__dirname, "src/views"),
            "reducers": path.resolve(__dirname, "src/reducers"),
            "acitons": path.resolve(__dirname, "src/actions"),
            "store": path.resolve(__dirname, "src/store"),
            "app": path.resolve(__dirname, "src/app"),
            "utils": path.resolve(__dirname, "src/utils")
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: /(src|node_modules\/cking-.*)/,
                use: "babel-loader"
            },
            {
                test: /\.(scss|css)$/,
                include: /(src|node_modules\/cking-.*)/,
                use: ExtractTextWebpackPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader']
                    })
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: ['file-loader?limit=1000&name=files/[md5:hash:base64:10].[ext]']
            }
        ]
    },
    plugins
}