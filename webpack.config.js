// webpack.config.js

"use strict";

const path = require("path");
const { styles } = require("@ckeditor/ckeditor5-dev-utils");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  devtool: "source-map",
  performance: { hints: false },

  // https://webpack.js.org/configuration/entry-context/
  entry: path.resolve(__dirname, "app.js"),
  // https://webpack.js.org/configuration/output/
  output: {
    // The name under which the editor will be exported.
    library: "ClassicEditor",

    path: path.resolve(__dirname, "dist"),
    filename: "ckeditor.js",
    libraryTarget: "umd",
    libraryExport: "default",
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        terserOptions: {
          output: {
            // Preserve CKEditor 5 license comments.
            comments: /^!/,
          },
        },
        extractComments: false,
      }),
    ],
  },

  module: {
    rules: [
      {
        test: /\.svg$/,

        use: ["raw-loader"],
      },
      {
        test: /\.css$/,

        use: [
          {
            loader: "style-loader",
            options: {
              injectType: "singletonStyleTag",
              attributes: {
                "data-cke": true,
              },
            },
          },
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: styles.getPostCssConfig({
                themeImporter: {
                  themePath: require.resolve("@ckeditor/ckeditor5-theme-lark"),
                },
                minify: true,
              }),
            },
          },
        ],
      },
    ],
  },

  // Useful for debugging.
  devtool: "source-map",

  // By default webpack logs warnings if the bundle is bigger than 200kb.
  performance: { hints: false },
};
