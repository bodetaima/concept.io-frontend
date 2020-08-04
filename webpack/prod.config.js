const path = require("path");
const glob = require("glob");
const { merge } = require("webpack-merge");
const common = require("./common.config.js");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const PurgecssPlugin = require("purgecss-webpack-plugin");

const PATHS = {
    src: path.join(__dirname, "../src"),
};

module.exports = merge(common, {
    mode: "production",
    optimization: {
        usedExports: false,
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        const packagename = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                        return `npm.${packagename.replace("@", "")}`;
                    },
                },
                styles: {
                    test: /\.css$/,
                    name: "styles",
                    chunks: "all",
                    enforce: true,
                },
            },
        },
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCSSExtractPlugin({
            filename: "css/[name].[hash].css",
            chunkFilename: "css/[id].[hash].css",
        }),
        new PurgecssPlugin({
            paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
        }),
    ],
});
