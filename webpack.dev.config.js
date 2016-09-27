let path = require('path');
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let autoprefixer = require('autoprefixer');
var precss = require('precss');

let extractSASS = new ExtractTextPlugin('[name].css');
let uglifyJS = new webpack.optimize.UglifyJsPlugin();

module.exports = {
	entry: {
		'n-button': './html-test/n-button/test.js',
		'n-check': './html-test/n-check/test.js',
		'n-icon': './html-test/n-icon/test.js',
		'n-label': './html-test/n-label/test.js',
		'n-panel': './html-test/n-panel/test.js',
		'n-radio': './html-test/n-radio/test.js',
		'n-text': './html-test/n-text/test.js',
		'n-text-area': './html-test/n-text-area/test.js',

		// sass
		'style-default': './src/sass/bundle-default.scss',

		// all
		//'nest-parrot': './src/js/parrot.js'
	},
	output: {
        path: path.join(__dirname, 'html-test'),
        filename: '[name]/entry.js'
    },
    // devtool: 'source-map',
	module: {
		loaders: [{
			test: /\.js$/,
			include: [
				path.join(__dirname, 'src'),
				path.join(__dirname, 'html-test')
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
    	extractSASS, 
    	//uglifyJS
    ],
    externals: {
        // require('jquery') is external and available
        //  on the global var jQuery
        'jquery': 'jQuery',
        'lodash': '_',

        'react': 'React',
        'react-dom': 'ReactDOM',

        'classnames': 'classNames'
    },
	debug: true
}