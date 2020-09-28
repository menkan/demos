const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, '../index.js'),
    output: {
        path: path.resolve(__dirname, '../dist/'),
        filename: 'dist.js'
    },

    module: {
        rules: [
            { 
                test: /\.js$/,
                loader: "babel-loader",
                include: [
                    path.resolve(__dirname, "../", "index.js"),
                ],
                exclude: [
                    path.resolve(__dirname, '../', 'node_modules'),
                ]
            }
        ]
    },
    // plugins: []
    mode: 'development',
    // 配置 webpack 服务器
    devServer: {
        contentBase: path.resolve(__dirname, '../'),
        host: '127.0.0.1',
        port: '8181',
        compress: true,
        inline: true,
        historyApiFallback: true,
        hot: true,
    },

}
