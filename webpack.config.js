"use strict";

const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

// HTML webpack configuration
const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: path.resolve("build"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            // File loader configuration
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {}
                    }
                ]
            },
            // Babel Transpiler configuration
            {
                test: /\.jsx?$/,
                exclude: ["/node_modules/", "/server/"],
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[name]_[local]_[hash:base64]",
                            sourceMap: true,
                            minimize: true,
                            camelCase: true,
                            convertToAbsoluteUrls: true
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    plugins: [htmlPlugin],
    devServer: {
        overlay: true
    }
};
