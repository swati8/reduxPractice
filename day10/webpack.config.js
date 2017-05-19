const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
 	   {
                test: /\.(scss|css)$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    plugins:[

    ],
    devServer : {
	contentBase :'./src',
	port :9000,
	historyApiFallback : true
    }

}


