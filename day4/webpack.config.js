var config = {
	entry: "./main.js",
	output: {
		path: "/",
		filename: "index.js"
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: "babel-loader",
			query: {
				presets: ["es2015", "react"]
			}
		}]
	},
	devServer: {
		inline: true,
		port: 8000
	}
}

module.exports = config;