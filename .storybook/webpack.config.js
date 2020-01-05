const path = require('path');
const { lstatSync, readdirSync } = require('fs');
const { join } = require('path');

// const isDirectory = (source, name) => lstatSync(source).isDirectory()
// const getDirectories = source =>
//   readdirSync(source).filter(name => isDirectory(source, name))
//
const getLibsResolve = () => {
  const libs = ['path-icons', 'path-inputs'];
  //const libs = return getDirectories(path.resolve(__dirname, "../libs"))
  return libs.reduce((acc, lib) => {
       acc[`@kaltura-react-ui-kits/${lib}`] = path.resolve(__dirname, `../packages/${lib}`);
       return acc;
     }, {});


}

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
  config.resolve.alias = {
    ...config.resolve.alias || {},
    ...getLibsResolve()
  }


  console.dir(config.resolve.alias);
  return config;
};
