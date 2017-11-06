const ExtractTextPlugin = require("extract-text-webpack-plugin"),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      path = require('path'),
      srcDir = path.resolve( __dirname, 'src' ),
      distDir = path.resolve( __dirname, 'dist' ),

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
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })
            },
            { 
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader" 
            }
        ]
    },
    plugins: [
        extractSCSS,
        new HtmlWebpackPlugin({
            title: 'Findfixer',
            filename: './index.html',
            hash: true,
            template: 'template.ejs',
            description: 'Bienvenid@s, esta aplicación fue construida con Webpack, Vanilla JS y la filosofía de los componentes web.',
        })
    ]
}