let path = require('path');
let webpack = require('webpack');

let ExtractTextPlugin = require('extract-text-webpack-plugin');
let WebpackCleanupPlugin = require('webpack-cleanup-plugin');

let autoprefixer = require('autoprefixer');
var precss = require('precss');

let extractSASS = new ExtractTextPlugin('[name]');

module.exports = {
	entry: {
		// // sass
		'nest-parrot2.css': './src/sass/bundle-default.scss',
		// js
		'nest-parrot2.js': './src/js/parrot.js',
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name]'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			include: [
				path.join(__dirname, 'src'),
			],
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'react'],
				plugins: ['transform-react-jsx','transform-class-properties']
			}
		}, {
			test: /\.scss$/i, 
			loader: extractSASS.extract('style-loader', ['css-loader', 'postcss-loader', 'sass-loader']) 
		}]
	},
	postcss: function() {
		return [autoprefixer, precss];
	},
	plugins: [
		new WebpackCleanupPlugin(),
		extractSASS
	],
	externals: {
		// require('jquery') is external and available on the global var jQuery
		'jquery': 'jQuery',
		'lodash': '_',
		'moment': 'moment',

		'react': 'React',
		'react-dom': 'ReactDOM',

		'classnames': 'classNames'
	},
	// debug: true
}