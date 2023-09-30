// Webpack config file uses commonjs thats why we use module.exports and require()
const path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // Allows us to use absolute filepath. __dirname refers to the current directory. From the current direcotry we point to the dist folder for our output
    filename: 'bundle.js', // By default the file name is main.js. This is the file that will be outputted in dis folder
  },
  module: {
    rules: [
      {
        test: /\.css$/, // RegEx to find any file ending with .css
        use: ['style-loader', 'css-loader'], //We will apply style-loader and css loader to the test(any file ending with .css)
      },
    ],
  },
};
