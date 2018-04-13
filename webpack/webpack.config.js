/**
 * Created by Queen on 2018/4/11.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        index:'./src/index.js',
    },
    output:{
        filename:"[name].js",
        path:path.resolve(__dirname,'dist')
    },
    devServer:{
        contentBase: path.resolve(__dirname, 'dist'),
        host: '127.0.0.1',
        port: '8081',
        compress: true
    },
    plugins:[
        new ExtractTextPlugin('./css/main.css'),
        new HtmlWebpackPlugin({
            tittle:"lyproject",
            minify:{
                removeArrributeQuotes:true
            },
            hash:true,
            template:"./src/index.html"
        })
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:"css-loader",
                    publicPath:'../'
                })
            },
            {
                test:/\.(jpg|png|gif)$/,
                use:[{
                    loader:'file-loader',
                    options:{
                        limit:500,
                        outputPath:'images/'
                    }
                }]
            },
            {
                test:/\.(html|htm)$/i,
                loader:'html-withimg-loader'

            }
        ]
    }
}