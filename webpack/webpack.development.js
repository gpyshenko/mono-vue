const path = require('path');
const webpack = require('webpack');

console.log(path.join(__dirname, '../src'))

const config = {
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        overlay: true,
        disableHostCheck: true,
        contentBase: path.join(__dirname, '../src')
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = config