const {override,adjustStyleLoaders,addBabelPlugin,addBabelPlugins, addDecoratorsLegacy,disableEsLint,useBabelRc,fixBabelImports} = require('customize-cra');

module.exports = override(
    addDecoratorsLegacy(),
    // addBabelPlugin("@babel/plugin-proposal-decorators", { "legacy": true }),
    // addBabelPlugins(),
    disableEsLint(),
    //useBabelRc(),
    fixBabelImports('import',{ libraryName: "antd", style: "css" }),
    // fixBabelImports('import',{ libraryName: "antd", style: "css" },'antdm')
    adjustStyleLoaders(rule => {
        if (rule.test.toString().includes("scss")) {
          rule.use.push({
            loader: require.resolve("sass-resources-loader"),
            options: {
              resources: [
                "./src/views/tuijian/index.scss"
             ]//这里是你自己放公共scss变量的路径,每增加一个scss文件都要在这添加路径
            }
          });
        }
      })
)