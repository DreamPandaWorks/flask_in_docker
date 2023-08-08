const path = require("path");
module.exports = {
  mode: "development",
  entry: { index: "./src/index.jsx", dashboard: "./src/dashboard.jsx" },
  module: {
    rules: [
      {
        test: /\.jsx/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  output: { path: path.join(__dirname, "static/js") },
  resolve: { extensions: [".jsx", ".js"] },
  target: "web",
};
