function Event() {}

// 添加事件
Event.addEvent = function(DOM, EventName, callBack) {
  if (DOM.addEventListener) {
    DOM.addEventListener(EventName, callBack);
  } else {
    DOM.attachEvent("on" + EventName, callBack);
  }
};

// 移除事件
Event.removeEvent = function(DOM, EventName, callBack) {
  if (DOM.removeEventListener) {
    DOM.removeEventListener(EventName, callBack);
  } else {
    DOM.detachEvent("on" + EventName, callBack);
  }
}

// 阻止事件冒泡

Event.stopBubble = function(e) {
  // var e=e||window.event;
  if (e.stopPropagation) {
    e.stopPropagation()
  } else {
    e.cancelBubble = true;
  }
}

Event.stopPrevent = function(e) {
  if (e.preventDefault) {
    e.preventDefault()
  } else {
    e.returnValue = false;
  }
}