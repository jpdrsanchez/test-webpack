const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devtool: 'source-map',

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /(node_modules|bower_components)/,
        use:
          {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },

      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, 
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('autoprefixer')(),
                require('postcss-combine-media-query')()
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            }
          },
        ]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      ignoreOrder: false,
    })
  ]
}