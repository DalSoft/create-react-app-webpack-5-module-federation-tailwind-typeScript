module.exports = {
    plugins: [{
        plugin: require("./craco-plugins/module-federation")
    },
        {   plugin: require("craco-alias"),
            options: {
                source: "tsconfig",
                // baseUrl SHOULD be specified
                // plugin does not take it from tsconfig
                baseUrl: ".",
                // tsConfigPath should point to the file where "baseUrl" and "paths" are specified
                tsConfigPath: "./tsconfig.paths.json"
            }
        }
    ]
};
