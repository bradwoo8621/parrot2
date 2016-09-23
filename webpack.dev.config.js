let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let autoprefixer = require('autoprefixer');
var precss = require('precss');

let extractSASS = new ExtractTextPlugin('[name].css');

module.exports = {
	entry: {
		'n-icon': './html-test/n-icon/test.js',
		'n-label': './html-test/n-label/test.js',
		'n-text': './html-test/n-text/test.js',

		// sass
		'style-default': './src/sass/bundle-default.scss'
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
    	extractSASS
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