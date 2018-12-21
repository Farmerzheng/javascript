var Event = {
  addEvent: function(DOM, EventName, callBack) {
    if (DOM.addEventListener) {
      DOM.addEventListener(EventName, callBack);
    } else {
      DOM.attachEvent("on" + EventName, callBack);
    }
  },
  removeEvent: function(DOM, EventName, callBack) {
    if (DOM.removeEventListener) {
      DOM.removeEventListener(EventName, callBack);
    } else {
      DOM.detachEvent("on" + EventName, callBack);
    }
  },
  stopBubble: function(e) {
    if (e.stopPropagation) {
      e.stopPropagation()
    } else {
      e.cancelBubble = true;
    }
  },
  stopPrevent: function(e) {
    if (e.preventDefault) {
      e.preventDefault()
    } else {
      e.returnValue = false;
    }
  }
};