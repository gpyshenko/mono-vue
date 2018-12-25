const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const styleLoader = { loader: 'vue-style-loader' };

const extractLoader = {
    loader: MiniCssExtractPlugin.loader,
    options: {
        publicPath: '../'
    }
};

module.exports = function (env) {
    return {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        (env === 'development') ? styleLoader : extractLoader,
                        {
                            loader: 'css-loader',
                            options: {
                                url: true,
                                importLoaders: 1,
                                sourceMap: (env === 'development')
                            }
                        },
                        { 
                            loader: 'postcss-loader',
                            options: {
                                config: {
                                    path: './'
                                }
                            }
                        }
                    ]
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'styles/[name].[hash].css'
            }),
        ],
    };
};