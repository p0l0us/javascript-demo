var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : './src/index.js',
    mode:'development',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'bundle.js',

    },
    module : {
        rules : [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/react']
                    }
                }
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'src/index.html'
        })
    ]
}
