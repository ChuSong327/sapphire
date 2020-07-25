const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'eval-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: [/node_modules/]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [ 
                    'style-loader',
                    'css-loader',
                    'sass-loader' 
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '小小树洞',
        })
    ]
};