const path = require("path");

module.exports = {
  mode: "development",
  entry: "./demo.js",
  output: {
    filename: "build.js",
    path: path.resolve(__dirname, "dist"),
  },
};
