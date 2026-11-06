const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "WhatsAppChatBox.min.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            options: {
              insert: require.resolve("./src/insert-style.js"),
            },
          },
          {
            loader: "css-loader",
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.svg$/,
        type: "asset/source",
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin((compilation) => {
      const packageJson = require("./package.json");
      const bannerText = `
        Whatsapp Chat Box v${packageJson.version}
        Copyright (c) ${new Date().getFullYear()}
        License: MIT
      `;
      return bannerText;
    }),
  ],
  devServer: {
    static: path.join(__dirname, "public"),
    port: 3000,
    open: true,
    hot: true,
  },
  optimization: {
   minimize: true, // Enable minimization
  },
};
