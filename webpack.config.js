const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const styles = require('./webpack/loaders/styles');
const images = require('./webpack/loaders/images');
const fonts = require('./webpack/loaders/fonts');

const env = process.env.NODE_ENV;

const config = require(`./webpack/webpack.${env}`)

const common = function () {
	return {
		entry: './src/main.js',
		output: {
			path: path.resolve(__dirname, './dist'),
			filename: 'build.js'
		},
		module: {
			rules: [
				{
					test: /\.vue$/,
					loader: 'vue-loader',
					options: {
						loaders: {
						}
					}
				},
				{
					test: /\.js$/,
					loader: 'babel-loader',
					exclude: file => (
						/node_modules/.test(file) && !/\.vue\.js/.test(file)
					)
				}
			]
		},
		resolve: {
			alias: {
				'vue$': 'vue/dist/vue.esm.js'
			},
			extensions: ['*', '.js', '.vue', '.json']
		},
		
		performance: {
			hints: false
		},
		devtool: env === 'development' ? '#eval-source-map' : 'none',
		plugins: [
			new VueLoaderPlugin(),
			new HtmlWebpackPlugin({
				filename: 'index.html',
				template: './src/index.html'
			})
		]
	}
}

module.exports = function () {
	return merge([
		common(),
		config,
		styles(env),
		images(env),
		fonts()
	])
}