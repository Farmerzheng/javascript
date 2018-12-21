function Drag(box) {
  this.box = box;
  this.moveBoolean = true;
  this.divX = 0;
  this.divY = 0;
  this.init();
}

Drag.prototype = {
  init: function() {
    // 挂接事件处理函数
    // 挂接事件处理函数过程中为什么要bind(this)?
    // 因为事件处理函数当中的this指函数挂接的对象，而我们想要在事件处理函数当中用到Drag对象，所以需要bind(this)方法来改变this指针的指向
    this.box.addEventListener('mousedown', this.mouseDownHandler.bind(this));
    this.box.addEventListener("mouseup", this.mouseUpHandler.bind(this));
    return this.box;
  },
  mouseDownHandler: function(e) {
    this.moveBoolean = true;
    this.divX = e.pageX - this.box.offsetLeft;
    this.divY = e.pageY - this.box.offsetTop;
    // console.log(divX,divY) 
    document.addEventListener("mousemove", this.mouseMoveHandler.bind(this));
  },
  mouseMoveHandler: function(e) {
    // 动态改变box的left 、top值
    // console.log(this)
    if (this.moveBoolean == false) return;
    this.box.style.left = e.pageX - this.divX + "px";
    this.box.style.top = e.pageY - this.divY + "px";
  },
  mouseUpHandler: function() {
    this.moveBoolean = false;
  }
}