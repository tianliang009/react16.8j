const { override, fixBabelImports, addLessLoader } = require('customize-cra');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDiectory: 'es',
    }),
    addLessLoader({ lessOptions: { javascriptEnabled: true }})
);