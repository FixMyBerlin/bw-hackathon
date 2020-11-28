const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const getPath = (file) => {
  return path.resolve(__dirname, "src", file);
};

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === "development";
  const filename = isDevelopment ? "[name]" : "[name]-[contenthash:6]";

  return {
    entry: {
      app: getPath("index.tsx"),
    },
    output: {
      filename: `${filename}.js`,
    },
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "src"),
      },
      extensions: [".js", ".ts", ".tsx"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
            },
            {
              loader: "ts-loader",
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: getPath("index.html"),
      }),
      new ESLintWebpackPlugin({}),
      new CopyPlugin({ patterns: [{ from: "public", to: "public" }] }),
    ],
    devtool: isDevelopment ? "eval-source-map" : "source-map",
    devServer: {
      historyApiFallback: true,
      // Fixes confusing console log `webpack output is served from undefined`.
      // See: https://github.com/webpack/webpack-dev-server/issues/2745
      publicPath: "/",
      port: 4000,
      progress: true,
      stats: "minimal",
    },
  };
};
