function Drag(obj) {
  this.obj = obj;
  this.x = 0;
  this.y = 0;
  this.moveBoolean = false;

  this.obj.addEventListener("mousedown", this.mouseDownHandler.bind(this));
  document.addEventListener("mousemove", this.mouseMoveHandler.bind(this));
  document.addEventListener("mouseup", this.mouseUpHandler.bind(this));

  return this.obj;
}
Drag.prototype = {
  mouseDownHandler: function(e) {
    this.x = e.pageX - this.obj.offsetLeft;
    this.y = e.pageY - this.obj.offsetTop;
    this.moveBoolean = true;
  },
  mouseUpHandler: function() {
    this.moveBoolean = false;
  },
  mouseMoveHandler: function(e) {
    if (!this.moveBoolean) return;
    this.obj.style.left = (e.pageX - this.x) + "px";
    this.obj.style.top = (e.pageY - this.y) + "px";
  }
}