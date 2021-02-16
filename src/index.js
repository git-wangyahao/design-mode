class jQuery {
  // 构造器
  constructor (seletor) {
    let slice = Array.prototype.slice
    let dom = slice.call(document.querySelectorAll(seletor))
    // 获取dom 的长度
    let len = dom ? dom.length : 0
    for (let i = 0; i < len ; i++ ) {
      this[i] = dom[i]
    }
    this.length = len
    this.seletor = seletor || ''
  }

  append( node ) {

  }

  addClass (name) {

  }

  html(data) {

  }

}

window.$ = function (seletor) {
  return new jQuery(seletor)
} 


var $p = $('p')
console.log($p)













