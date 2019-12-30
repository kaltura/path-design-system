const path = require('path');

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
          configFile: path.resolve(__dirname,'./tsconfig.json')
        }
      },
      require.resolve("react-docgen-typescript-loader"),
    ]
  }
    );

  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};
