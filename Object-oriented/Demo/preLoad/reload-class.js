/*
   Reload构造函数的作用 ： 下载图片，并在所有图片下载完成后通知外界
   Params(参数): 
      imgSrcList: 外界传入的图片链接数组
      callBack: 图片下载完成后执行的回调函数

*/
function Reload(imgSrcList, callBack) {
  // 将传入的参数作为对象本身的属性
  this.imgSrcList = imgSrcList;
  this.callBack = callBack;

  // 数组中图片的索引
  this.imgIndex = 0;
}

Reload.prototype = {

  init: function() {
    //初始化对象
    this.loadImg();
  },
  loadImg: function() {
    // 下载图片
    // 创建一个新的图片对象
    var img = new Image();
    // 为图片对象的src属性赋值
    img.src = this.imgSrcList[this.imgIndex];
    // 监听图片是否下载完成（为图片对象添加事件监听器，来监听图片是否下载完成）
    img.addEventListener("load", this.loadImgHandler.bind(this));
  },
  loadImgHandler: function() {
    // 图片下载完成以后会执行此方法
    console.log("第" + this.imgIndex + "张图片下载完成");

    // 判断是否是最后一张图片，如果是最后一张图片，终止图片的下载，通知外界图片全部加载完成（执行外界传入的函数）
    if (this.imgIndex == this.imgSrcList.length-1) {
      this.callBack();
      return;
    }
    // 下载下一张图片
    this.imgIndex++;


    this.loadImg(this.imgIndex);


  }
}