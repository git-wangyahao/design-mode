1、初始化环境 npm init
2、新建index.js
3、安装webpack环境 -> npm install webpack webpack-cli  --save-dev
4、执行命令
5、创建 webpack.dev.config.js 
6、安装环境
7、npm install webpack-dev-server html-webpack-plugin --save-dev
8、配置 webpack.dev.config.js  配置html编译 配置插件 服务器
9、修改 package.json 使用 webpack-dev-serve 启动服务
10、新版本webpack 有兼容性建议使用4.0版本的webpack
11、npm install --save-dev webpack@4.43.0
12、npm install --save-dev webpack-cli@3.3.12
````javascript
 "devDependencies": {
    "html-webpack-plugin": "^4.5.1",
    "webpack": "^4.43.0",
    "webpack-cli": "^3.3.12",
    "webpack-dev-server": "^3.11.0"
  }
 // 对应版本
````

13、安装解析es6插件
npm install babel-core babel-loader babel-polyfill babel-preset-es2015 babel-preset-latest --save-dev
14、创建 .babelrc 文件
15、更改 webpack.dev.config.js

项目配置完成

<!-- 面向对象继承三要素 -->
1、继承：子类继承父类
2、封装，数据的权限和保密
3、多态、统一接口的不同实现

