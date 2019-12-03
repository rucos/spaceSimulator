const path = require('path');
const HtmlPluginWebpack = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './app.ts',
    context: path.join(__dirname, 'src'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "main.js"
    },
    resolve: {
        extensions: ['.js', '.ts', '.html']
    },
    watch: false,
    devtool: "source-map",
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: "initial",
                    minChunks: 2,
                    maxInitialRequests: 5,
                    minSize: 0
                },
                vendor: {
                    test: /node_modules/,
                    chunks: "initial",
                    name: "vendor",
                    priority: 10,
                    enforce: true
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: [
        new HtmlPluginWebpack({
            hash: true,
            template: "./index"
        })
    ],
    devServer: {
        host: 'localhost',
        port: 8096
    }
}
