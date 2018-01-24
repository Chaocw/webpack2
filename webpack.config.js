const path = require('path')

module.exports = {
	entry:{
		index:'./src/js/com/index.js'
	},
	output:{
		path: path.resolve(__dirname, 'dist'),
		filename: '_[name].js'
	}
}