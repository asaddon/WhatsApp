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
              insert: (element) => {
                window.chatBoxStyle = element; // Custom insert function
              },
            },
          },
          {
            loader: "css-loader",
          },
          "postcss-loader",
        ],
      },
      { test: /\.svg$/, loader: "svg-inline-loader" },
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
  optimization: {
   minimize: true, // Enable minimization
  },
};
