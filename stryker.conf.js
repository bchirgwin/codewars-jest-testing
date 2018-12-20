module.exports = function(config) {
  config.set({
    mutator: "javascript",
    packageManager: "npm",
    reporters: ["html", "clear-text", "progress"],
    testRunner: "jest",
    transpilers: [],
    coverageAnalysis: "off",
    mutate: [
        "src/**/*.js",
        "src/**/*.ts",
        "!src/**/*.spec.js",
        "!src/**/*.spec.ts",
        "!node_modules/**"
    ]
  });
};
