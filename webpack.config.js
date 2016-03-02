/**
 * How to run webpack
 * $ webpack -w (to run and watch for file change)
 * $ webpack -p (run and minify the file)
 */
var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html', // Set the output file name
  inject: 'body' // Tell webpack to inject the finalize bundle js to body of html
});

module.exports = {
  // Where the source file
  entry: [
    './app/index.js'
  ],
  // We use this loader for babel to convert JSX to JS. This babel loader
  // will look into .babelrc file for the info
  module: {
    loaders: [{
      test: /\.js$/,
      include: __dirname + '/app',
      loader: "babel-loader"
    }]
  },
  // Where to output the bundle file
  output: {
    filename: "index_bundle.js",
    path: __dirname + '/dist'
  },
  // Load the plugin
  plugins: [HTMLWebpackPluginConfig]
};
