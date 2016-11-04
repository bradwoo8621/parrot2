let path = require('path');
let webpack = require('webpack');

let ExtractTextPlugin = require('extract-text-webpack-plugin');
let WebpackCleanupPlugin = require('webpack-cleanup-plugin');

let autoprefixer = require('autoprefixer');
var precss = require('precss');

let extractSASS = new ExtractTextPlugin('[name]');

let webpackTargetElectronRenderer = require('webpack-target-electron-renderer');

var options = {
	entry: {
		// // sass
		'nest-parrot2.css': './src/sass/bundle-default.scss',
		// js
		'nest-parrot2.js': './src/js/parrot.js',
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name]',
		libraryTarget: 'umd'
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
		'jquery': {
			root: 'jQuery',
			commonjs2: 'jquery',
			commonjs: 'jquery',
			amd: 'jquery'
		},
		'lodash': {
			root: '_',
			commonjs2: 'lodash',
			commonjs: 'lodash',
			amd: 'lodash'
		},
		'moment': 'moment',

		"react": {
			root: 'React',
			commonjs2: 'react',
			commonjs: 'react',
			amd: 'react'
		},
		'react-dom': {
			root: 'ReactDOM',
			commonjs2: 'react-dom',
			commonjs: 'react-dom',
			amd: 'react-dom'
		},

		'classnames': {
			root: 'classNames',
			commonjs2: 'classnames',
			commonjs: 'classnames',
			amd: 'classnames'
		}
	},
	// debug: true
};
options.target = webpackTargetElectronRenderer(options);
module.exports = options;