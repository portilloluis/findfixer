const webpack = require('webpack'),
      ExtractTextPlugin = require("extract-text-webpack-plugin"),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
      ReloadPlugin = require('reload-html-webpack-plugin'),
      path = require('path'),
      srcDir = path.resolve(__dirname, 'src'),
      distDir = path.resolve(__dirname, 'dist'),

      // Genera el archivo css
      extractSCSS = new ExtractTextPlugin('style.css')

module.exports = {
    context: srcDir,
    entry: {
        script: './index.js'
    },
    output: {
        filename: './[name].js',
        path: distDir
    },
    module: {
        rules: [
            {
                // Para los archivos scss
                test: /\.scss$/,
                use: extractSCSS.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'sass-loader']
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(jpe?g|png|gif|svg|webp)$/i,
                use: [
                    'file-loader?name=[path][name].[ext]',
                    'image-webpack-loader?bypassOnDebug'
                ]
            },
            {
                test: /\.(ttf|eot|woff2?|mp4|txt|xml)$/,
                use: 'file-loader?name=[path][name].[ext]'
            }
        ]
    },
    plugins: [
        extractSCSS,
        new OptimizeCssAssetsPlugin({
            cssProcessorOptions: { discardComments: { removeAll: true } }
        }),
        new ReloadPlugin(),
        new HtmlWebpackPlugin({
            title: 'Findfixer',
            filename: './index.html',
            hash: true,
            template: 'template.ejs',
            description: 'Bienvenid@s, esta aplicación fue construida con Webpack, Vanilla JS y la filosofía de los componentes web.',
        })
    ]
}