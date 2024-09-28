module.exports = {
    publicPath: '/${{ jakekohl.github.io }}/',
    outputDir: 'dist',
    configureWebpack: {
        plugins: [
            new webpack.DefinePlugin({
                // allow access to process.env from within the vue app
                'process.env': {
                    NODE_ENV: JSON.stringify(process.env.NODE_ENV)
                }
            })
        ]
    }
}