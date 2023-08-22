const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    entry: './js/dashboard_main.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },

    mode: 'production',

    plugins: [
        new HtmlWebpackPlugin({
          title: "Webpack Output",
        }),
      ],
};
