var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    devServer: {
        inline: true,
        contentBase: false,
        port: 3000
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './dev/app/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.css$/, loader: "style-loader!css-loader"
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.svg/, loader: 'svg-url-loader'
            },
            {
                test: /\.html$/,
                loader: 'html',
                query: {
                    minimize: true
                }
            }
        ]
    },
    output: {
        path: 'build',
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new HtmlWebpackPlugin(
            {
                template: './dev/app/index.html'
            }
        )
    ]
};
