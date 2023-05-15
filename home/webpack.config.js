const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { EnvironmentPlugin } = require('webpack');

console.log('process.env.REACT_APP_HOME_REMOTE_ENTRY_URL', process.env.REACT_APP_HOME_REMOTE_ENTRY_URL);

const deps = require("./package.json").dependencies;
module.exports = {
  output: {
    publicPath: process.env.REACT_APP_HOME_PUBLIC_PATH,
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3000,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "home",
      filename: "remoteEntry.js",
      remotes: {
        home: process.env.REACT_APP_HOME_REMOTE_ENTRY_URL,
        pdp: process.env.REACT_APP_PDP_REMOTE_ENTRY_URL,
        cart: process.env.REACT_APP_CART_REMOTE_ENTRY_URL,
      },
      exposes: {
        "./Header": "./src/Header.jsx",
        "./Footer": "./src/Footer.jsx",
        "./HomeContent": "./src/HomeContent.jsx",
        "./MainLayout": "./src/MainLayout.jsx",

        "./products": "./src/products.js",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new EnvironmentPlugin(['REACT_APP_API_SERVER']),
  ],
};
