var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
        inline: true,
        contentBase: './src',
        port: 3000,
        headers: { 'Access-Control-Allow-Origin': '*' }
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './dev/js/index.js',
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
                test: /\.(png|jpg)$/,
                loader: 'url?limit=25000'
              }
        ]
    },
    output: {
        path: 'src',
        filename: 'js/bundle.min.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ],
    vendor: [
        'xlsx',
        'file-saver'
],
node: {fs: 'empty'},
externals: [
    {'./cptable': 'var cptable'},
    {'./jszip': 'jszip'}
 ]
};
