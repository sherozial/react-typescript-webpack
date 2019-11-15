const path = require("path");
const rules = [
  {
    test: /\.tsx?$/,
    use: "babel-loader",
    exclude: /node_modules/
  }
];

module.exports = {
  target: "web",
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },

  module: { rules },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  devServer: {
    contentBase: "./",
    port: 5000
  }
};
