
// ref: https://umijs.org/config/
//这个就是config.js
const path = require('path');
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,// 默认引入antd
      dva: false,
      dynamicImport: false,// models 动态引入关闭
      title: 'react选项卡',
      dll: true,
      routes: { 
        path: '/',
        component: '../layouts',
        routes: []
      },
      hardSource: false,
      locale: {}
    }],
  ],
}



