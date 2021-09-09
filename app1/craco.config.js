module.exports = {
    plugins: [
        {
            plugin: require("./craco-plugins/tailwind")
        },
        {
            plugin: require("./craco-plugins/module-federation")
        },
    ],
};
