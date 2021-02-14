const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
    entry:'./src/app.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js',
        publicPath:'/',
    },
    devtool:"source-map",
    resolve:{
        extensions:['.js','.jsx'],
    },
    module: {
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                }
            },
            {
                test:/\.html$/,
                use:{
                    loader: 'html-loader'
                }
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(png|jpg|gif|woff|woff2|eot|ttf|svg)(\?[\=\.a-z0-9]+)?$/,
                use:{
                    loader:'url-loader'
                }
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            filename:'./index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'css/[name].css'
        })
    ],
    devServer:{
        contentBase:path.join(__dirname,'dist'),
        compress: true,
        historyApiFallback: true,
        port:3005,
        hot:true,
    }
}