const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    fixBabelImports('antd', {
        libraryNam: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            // See all variables here:
            // https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
            modifyVars: { '@primary-color': '#1DA57A' },
        },
    }),
);