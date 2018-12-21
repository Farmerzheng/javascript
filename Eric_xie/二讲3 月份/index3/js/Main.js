function CheckBoxButton(_skinList) {
  this.skinList = _skinList;
  this.checkBox = null;
  this._selected = false;
  this.SELECTED_EVENT = "selected";
}
CheckBoxButton.prototype = {
  createCheckBox: function() {
    if (this.checkBox) return this.checkBox;
    this.checkBox = document.createElement("div");
    this.checkBox.style.backgroundImage = "url(image/new_icon.png)";
    this.checkBox.style.width = this.skinList[0].w + "px";
    this.checkBox.style.height = this.skinList[0].h + "px";
    this.checkBox.style.backgroundPositionX = -this.skinList[0].x + "px";
    this.checkBox.style.backgroundPositionY = -this.skinList[0].y + "px";
    this.checkBox.addEventListener("click", this.clickHandler.bind(this));
    return this.checkBox;
  },
  clickHandler: function(e) {
    if (!e) {
      e = window.event;
    }
    this.selected = !this.selected;
  },
  set selected(value) {

    if (this._selected == value) return;
    var i = 0;
    if (value) {
      i = 1;
    }

    this.checkBox.style.backgroundPositionX = -this.skinList[i].x + "px";
    this.checkBox.style.backgroundPositionY = -this.skinList[i].y + "px";

    this._selected = value;

    var event = new Event(this.SELECTED_EVENT);

    event.selected = value;
    
    this.checkBox.dispatchEvent(event);
  },
  get selected() {
    return this._selected;
  }
};