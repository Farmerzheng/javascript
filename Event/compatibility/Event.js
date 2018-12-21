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
    stopBubble: function(event) {
        // 在ie下，事件对象是在全局的，也就 window下，做为window的一个属性
        //  在其他浏览器，都做为方法的第一个参数传入，兼容:
        event = event || window.event;

        if (e.stopPropagation) {
            e.stopPropagation()
        } else {
            e.cancelBubble = true;
        }
    },
    stopPrevent: function(event) {
        event = event || window.event;
        if (e.preventDefault) {
            e.preventDefault()
        } else {
            e.returnValue = false;
        }
    }
};