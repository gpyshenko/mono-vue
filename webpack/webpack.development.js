const webpack = require('webpack');

const config = {
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        overlay: true,
        disableHostCheck: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = config