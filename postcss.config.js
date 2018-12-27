module.exports = {
    plugins: [
        require('precss'),
        require('autoprefixer'),
        // require('sort-css-media-queries'),
        // require('css-mqpacker'),
        require('postcss-line-height-px-to-unitless')
    ]
}