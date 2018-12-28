const path = require('path');
const webpack = require('webpack');

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