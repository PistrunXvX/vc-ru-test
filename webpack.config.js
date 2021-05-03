const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    module: {
        rules: {
            test: /\.styl(us)?$/,
            use: [
                'vue-style-loader',
                'css-loader',
                'stylus-loader'
            ]
        }
    },

    plugins: [
        new VueLoaderPlugin()
    ]
}