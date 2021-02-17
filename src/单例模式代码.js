/**
 * 单例模式
 * 
 */

 class SingleObject {
   login () {
     console.log('login...')
   }
 }
/**
 * Instance  实例
 * 自执行函数
 */
SingleObject.getInstance = (function () {
  // 单例
  let instance
  return function () {
    if(!instance) {
      instance = new SingleObject() //实例不存在就获取实例
    }
    return instance
  }
})()

let obj1 = SingleObject.getInstance()
console.log(obj1)
obj1.login()

let obj2 = SingleObject.getInstance()
console.log(obj2)
obj2.login()

let obj3 = new SingleObject()

// 判断实例1与实例2 
console.log(obj1 === obj2 ) // true
console.log(obj1 === obj3 ) // false 不是同一个实例




