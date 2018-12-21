function CheckBox(imgUrl, skinList) {
  this.skinList = skinList;
  this.imgUrl = imgUrl;
  this._selected = false;
}

CheckBox.prototype = {
  init: function() {
    this.createBox();
    return this.body;
  },
  createBox: function() {
    this.body = document.createElement("div");
    this.body.style.width = this.skinList[0].w + "px";
    this.body.style.height = this.skinList[0].h + "px";
    this.body.style.backgroundPositionX = this.skinList[1].x + "px";
    this.body.style.backgroundPositionY = this.skinList[1].y + "px";
    this.body.style.backgroundImage = "url(" + this.imgUrl + ")";
    this.body.addEventListener("click", this.boxClickHandler.bind(this));
  },
  boxClickHandler: function() {
    // 改变背景图片的位置
    this.selected = !this.selected;
  },
  set selected(value) {
    this._selected = value;
    if (this._selected) {
      this.body.style.backgroundPositionX = this.skinList[0].x + "px";
      this.body.style.backgroundPositionY = this.skinList[0].y + "px";
    } else {
      this.body.style.backgroundPositionX = this.skinList[1].x + "px";
      this.body.style.backgroundPositionY = this.skinList[1].y + "px";
    }

    // 在这里我们能够知道复选框是否被选中
    // 将是否被选中这件事通知给外界
    // 如何通知给外界？ 通过事件派发的方式

    //1、创建一个事件对象
    var event = document.createEvent("HTMLEvents");
    // 2、初始化事件对象
    // selected : 自定义的事件名称 
    // true : 事件是否冒泡
    // true : 是否阻止默认事件
    event.initEvent("selected",true,true);

    // 3、将value值通知给外界--->将value值作为对象的一个属性
    event.selected = value;

    // 4、抛发事件
    this.body.dispatchEvent(event);

  },
  get selected() {
    return this._selected;
  }
}