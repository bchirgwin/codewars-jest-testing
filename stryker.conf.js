module.exports = function(config) {
  config.set({
    mutator: "javascript",
    packageManager: "npm",
    reporters: ["html", "clear-text", "progress"],
    testRunner: "jest",
    transpilers: [],
    coverageAnalysis: "off",
    jest: {
        projectType: 'custom',
        config: require(__dirname + '/jest.config-stryker.js'),
        enableFindRelatedTests: true,
    },
    mutate: [
        "src/02-age-verify/**",
        "src/03-bowling-game/04a*",
        // "src/**/*.js",
        // "src/**/*.ts",
        "!src/**/*.spec.js",
        "!src/**/*.spec.ts",
        "!node_modules/**",
        "!src/misc/**",
        // "!src/03-bowling-game/**"
    ]
  });
};
