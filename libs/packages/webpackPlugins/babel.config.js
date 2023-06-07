/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-09-19 10:05:32
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-09-19 10:41:18
 */
const MIN_BABEL_VERSION = 7;

module.exports = (api) => {
  api.assertVersion(MIN_BABEL_VERSION);
  api.cache(true);

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            node: "12.17.0",
          },
        },
      ],
    ]
  };
};