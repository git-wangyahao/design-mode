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
npm install  babel-loader @babel/core @babel/preset-env --save-dev
npm install --save @babel/plugin-transform-runtime
npm install --save @babel/plugin-proposal-class-properties


14、创建 .babelrc 文件
````javascript
  { 
  "presets": ["@babel/preset-env"],
	"plugins": ["@babel/plugin-transform-runtime","@babel/plugin-proposal-class-properties"]
}
````

15、更改 webpack.dev.config.js

Cannot find module '@babel/core'  版本问题

项目配置完成

<!-- 面向对象继承三要素 -->
1、继承：子类继承父类
2、封装，数据的权限和保密
3、多态、统一接口的不同实现

###### 继承 
````javascript
  class Person {
    constructor(name, age) {
      this.name = name
      this.age = age
    }

    eat(fan) {
      console.log( `${this.name}喜欢吃${fan}饭`  )
    }
  }

  class Children extends Person{
    constructor(name, age ,number) {
      super(name, age) 
      this.number = number
    }

    study() {
      console.log(`儿子会学习，老子不会`)
    }
  }

  const P1 = new Person('王先森', 32)
  const C1 = new Children('王线森儿子', 12, 3 )
  console.log('P1', P1)
  console.log('P1', P1.eat('猪蹄饭'))
  console.log('C1', C1)
  console.log('C1', C1.eat("黄瓜"))
  console.log('C1', C1.study())

  // 继承可将公共方法抽离出来，提高复用性，较少冗余
````
