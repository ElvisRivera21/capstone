const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: __dirname + 'src' + 'main.jsx',
  output: {
    path: __dirname + 'public',
    publicPath: '/',
    filename: 'bundle.js',
  },
  performance: {
    maxAssetSize: 500000, // Size in bytes, adjust as needed
    maxEntrypointSize: 500000,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Correct loader name
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
      },
      {
        test: /\.svg$/,
        use: ['file-loader'], // Add file-loader for SVGs
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Ensure these are correct for CSS files
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + './index.html',
      filename: 'index.html',
      inject: 'body'
    }),
  ],
  devServer: {
    historyApiFallback: true,
    static: {
      directory: __dirname + 'public',
    },
    port: 9000,
    open: true, // This option opens the browser after the server has been started
    hot: true, // Enable webpack's Hot Module Replacement feature
  },
};
