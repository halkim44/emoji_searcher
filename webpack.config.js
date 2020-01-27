const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const isDevelopment = process.env.NODE_ENV === 'development';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LinkTypePlugin = require('html-webpack-link-type-plugin').HtmlWebpackLinkTypePlugin;

module.exports = {
  entry: './src/app.js',
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: /\.module\.s(a|c)ss$/,
      loader: [
        isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            modules: true,
            sourceMap: isDevelopment
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: isDevelopment
          }
        }
      ]
    },
    {
      test: /\.s(a|c)ss$/,
      exclude: /\.module.(s(a|c)ss)$/,
      loader: [
        isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            sourceMap: isDevelopment
          }
        }
      ]
    }

    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      appMountId: 'app',
      meta: [{
        name: 'description',
        content: 'a collection of all emojis in one app.'
      }],
      mobile: true,
      lang: 'en-US',
      links: [
        "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",
        {
          href: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
          rel: "stylesheet",
          integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
          crossorigin: "anonymous"
        }
      ],
      title: 'Emoji Searcher',
    }),

    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
    }),
    new LinkTypePlugin({
      '**/*.css': 'text/css'
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    contentBase: './dist',
    open: true
  },
};
