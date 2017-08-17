var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var getHtmlConfig = function(name,title){
    return{
        template:'./src/view/'+name+'.html',
        filename:'view/'+name+'.html',
        title   :title,
        inject  :true,
        hash    :true,
        chunks  :['common',name]
    }
}
var config = {
    entry:{
        'common':['./src/page/common/index.js'],
        'index':['./src/page/index/index.js'],
        'class':['./src/page/class/index.js'],
        'works':['./src/page/works/index.js'],
        'about':['./src/page/about/index.js'],
    },
    output:{
        path:path.resolve(__dirname+'/dist/'),
        publicPath:'/dist/',
        filename:'js/[name].js'
    },
    externals : {
        'jquery' : 'window.jQuery'
    },
    module:{
        loaders:[
            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:'css-loader'
                })
            },
            {
                test:/\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:8000,
                        name:'resource/[name].[ext]'
                    }
                }]
            },
            {
                test:/\.string$/,
                loader:'html-loader',
                query : {
                    minimize : true,
                    removeAttributeQuotes : false
                }
            }
        ]
    },
    resolve:{
        alias:{
            node_modules    : __dirname + '/node_modules',
            util            : __dirname + '/src/util',
            page            : __dirname + '/src/page',
            service         : __dirname + '/src/service',
            image           : __dirname + '/src/image'
        }
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            name    :'common',
            filename:'js/base.js'
        }),
        new ExtractTextPlugin('css/[name].css'),
        new HtmlWebpackPlugin(getHtmlConfig('index','首页')),
        new HtmlWebpackPlugin(getHtmlConfig('class','分类')),
        new HtmlWebpackPlugin(getHtmlConfig('works','作品')),
        new HtmlWebpackPlugin(getHtmlConfig('about','关于')),
    ]
};
module.exports = config;