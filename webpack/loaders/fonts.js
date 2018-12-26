module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.(svg|eot|ttf|woff|woff2)$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                            outputPath: 'assets/fonts/'
                        }
                    }
                },
            ],
        },
    };
};