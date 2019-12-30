

const babel = (config = {}) => {
  const { plugins = [] } = config;
  return {
    ...config,
    plugins: [
      ...plugins,
      [
        'import',
        {
          libraryName: 'antd',
          style: 'css',
          libraryDirectory: 'es'
        },
      ],
    ],
  };
};

module.exports = { babel };
