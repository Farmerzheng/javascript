  dispatchEvent是作为高级浏览器(如chrome、Firfox等)的事件触发器来使用的，那么什么是事件触发器？就是触发事件的东西。可能有人觉得有点莫名其妙，触发事件不是在交互中被触发的吗？
  的确，通常情况下，事件的触发都是由用户的行为如点击、刷新等操作实现，但是，其实有的情况下，事件的触发必须由程序来实现，比如ajax框架的一些自定义事件