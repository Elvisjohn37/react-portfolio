const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
let miniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env, arg) => {
    const IS_PROD = arg && arg.mode === 'production'
    const MODE = IS_PROD ? 'production' : 'development'
    const FILENAME = IS_PROD ? '[name].[contenthash]' : '[name]'
    const CSS_FILENAME = `css/${FILENAME}.css`
    return {
        entry: './src/index.js',
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'bundle.js',
            publicPath: '/',
        },
        devServer: {
            port: 8080,
            historyApiFallback: true,
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.module\.s(a|c)ss$/,
                    use: [
                        // Creates `style` nodes from JS strings
                        'style-loader',
                        // Translates CSS into CommonJS
                        'css-loader',
                        // Compiles Sass to CSS
                        'sass-loader',
                    ],
                },
                {
                    test: /\.s(a|c)ss|css$/,
                    exclude: /\.module\.s(a|c)ss$/,
                    use: [
                        // Creates `style` nodes from JS strings
                        'style-loader',
                        // Translates CSS into CommonJS
                        'css-loader',
                        // Compiles Sass to CSS
                        'sass-loader',
                    ],
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                        },
                    ],
                },
                {
                    test: /\.svg$/,
                    use: ['@svgr/webpack'],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(__dirname, '/src/index.html'),
            }),
            new miniCssExtractPlugin({
                ignoreOrder: true,
                filename: CSS_FILENAME,
                chunkFilename: CSS_FILENAME,
            }),
        ],
        resolve: {
            alias: {
                src: path.resolve(__dirname, 'src'),
            },
            extensions: ['.js', '.json', '.scss', '.css'],
        },
    }
}
