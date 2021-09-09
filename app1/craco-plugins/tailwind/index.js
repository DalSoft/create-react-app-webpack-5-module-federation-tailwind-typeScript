const { getLoaders, loaderByName } = require("@craco/craco");
const autoprefixer = require("autoprefixer");
const tailwind = require("tailwindcss");

module.exports = {
    overrideWebpackConfig: ({ webpackConfig }) => {
        const { hasFoundAny, matches } = getLoaders(webpackConfig, loaderByName("postcss-loader"));

        if (hasFoundAny) {
            matches.forEach(x => {
                if (x.loader.options.postcssOptions.plugins) {
                    x.loader.options.postcssOptions.plugins = [...x.loader.options.postcssOptions.plugins, tailwind, autoprefixer]
                }
            });
        }

        return webpackConfig;
    },
};
