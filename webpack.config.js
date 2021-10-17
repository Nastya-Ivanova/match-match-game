const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  devtool: 'inline-source-map',

  entry: './src/index.ts',

  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: './assets/[base]',
  },

  module: {
    rules: [
      {
        test: /\.[tj]s$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },

  resolve: {
    alias: {
      shared: path.resolve(__dirname, 'src/shared/'),
      pages: path.resolve(__dirname, 'src/pages/'),
      components: path.resolve(__dirname, 'src/components/'),
      asset: path.resolve(__dirname, 'src/asset/'),
      Router: path.resolve(__dirname, 'src/Router/'),
      IndexedDB: path.resolve(__dirname, 'src/IndexedDB/'),
      type: path.resolve(__dirname, 'src/type.ts'),
    },
    extensions: ['.ts', '.js', 'scss']
  },

  mode: "development",

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    })
  ],

  devServer: {
    open: true,
    contentBase: path.join(__dirname, 'dist'),
    port: 8080,
    historyApiFallback: true,
  },

};
