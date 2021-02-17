/**
 * 单例模式登陆框 
 */

 class LoginInform {
   constructor () {
     this.state = 'hide' //定义状态
   }

   show() {
    if(this.state === 'show') {
      alert('已经显示')
      return
    }
    this.state = 'show'
    console.log('登陆框显示成功')
   }

   hide() {

   }
 }