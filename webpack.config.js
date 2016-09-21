let path = require('path');

module.exports = {
	entry: {
		'n-text/n-text': './html-test/n-text/test'
	},
	output: {
        path: path.join(__dirname, "html-test"),
        filename: "[name].entry.js"
    },
    // devtool: 'source-map',
	module: {
		loaders: [
			{
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
			}
		]
	},
	debug: true
}