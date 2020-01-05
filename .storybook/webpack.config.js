const path = require('path');
const { lstatSync, readdirSync } = require('fs');
const { join } = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          plugins: [["import", {libraryName: "antd", style: 'css', libraryDirectory: 'es'}]],
          presets: [
            require.resolve("@babel/preset-env"),
            require.resolve("@babel/preset-react"),
          ]
        }
      },
      {
        loader: require.resolve("ts-loader"),
        options: {
          ignoreDiagnostics: [7005],
          configFile: path.resolve(__dirname, "tsconfig.json"),
        }
      },
      require.resolve("react-docgen-typescript-loader"),
    ]
  }
    );

  config.resolve.extensions.push(".ts", ".tsx");

// resolve peerDependencies import with local path ui-kit
  config.resolve.modules.unshift(path.resolve(__dirname,"../node_modules"));

  return config;
};
