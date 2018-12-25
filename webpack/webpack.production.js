const path = require('path');
const webpack = require('webpack');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


const cleanOptions = { root: path.resolve(__dirname, '..'), verbose: true }

const config = {
    mode: 'production',
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin(),
            // new UglifyJsPlugin()
        ]
    },
    plugins: [
        new CleanWebpackPlugin('dist', cleanOptions),
        new MinifyPlugin(),
        new BundleAnalyzerPlugin()
    ]
}


module.exports = config