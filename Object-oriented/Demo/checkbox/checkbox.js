// 红色小盒子，选中红色，没选中灰色
function CheckBox(_skinList) {
  this.skinList = _skinList;
  this.box = null;
  this._selected = false;
}

CheckBox.prototype = {
  init: function() {
    return this.createCheckbox();
  },
  createCheckbox: function() {
    this.box = document.createElement("div");
    this.box.style.width = "20px";
    this.box.style.height = "20px";
    this.box.style.backgroundImage = "url(./1.png)";
    this.box.style.backgroundPositionY = this.skinList[1].y+"px";
    this.box.style.backgroundPositionX = this.skinList[1].x+"px";
    this.box.addEventListener("click", this.clickHandler.bind(this));
    
    return this.box;
  },
  clickHandler: function() {
    // 点击改变selected属性的真假
    this.selected = !this.selected;
  },
  // set和get方法能够监听到selected的值得改变
  get selected() {
    // selected 属性的值与 _selected属性的值保持一致
    return this._selected;
  },
  set selected(value) {
    //根据value设置 _selected 的值
    this._selected = value;

    if (this._selected) {
      this.box.style.backgroundPositionY = this.skinList[0].y+"px";
      this.box.style.backgroundPositionX = this.skinList[0].x+"px";
    } else {
      this.box.style.backgroundPositionY = this.skinList[1].y+"px";
      this.box.style.backgroundPositionX = this.skinList[1].x+"px";
    }
    /*
      为什么将是否被选中这件事情通知给别人？ 

         因为选中后要做一些具体的操作，例如通过ajax发送网络请求
         这些具体的操作我们不需要知道，干好本职工作就好了，
         可扩展性强

      如何将是否被选中这件事情通知给别人？      

      观察者模式（Observer）完美的将观察者和被观察的对象分离开
    */

    // 通过事件派发的方式告知外界

    // 创建事件对象
    var evt = document.createEvent('HTMLEvents');
    // 事件对象初始化
    // 3个参数：事件类型，是否冒泡，是否阻止浏览器的默认行为
    evt.initEvent("selected", true, true);
    evt.selected = value;
    // 触发自定义事件
    this.box.dispatchEvent(evt);

  }
}