//ReloadImg 能够优先加载网页当中的图片
function ReloadImg(imgSrcArr, callFunc) {

  //加载所有的图片，加载完成以后调用callFunc   
  //让两个形参称为对象自身的属性
  //让传入的形参imgSrcArr作为对象imgSrcList的属性值  

  this.imgSrcList = imgSrcArr;
  this.callBack = callFunc;
  //需要加载的图片数量
  this.imgNum = imgSrcArr.length;
  //需要加载的图片索引
  this.imgIndex = 0;

}

//prototype是我们创建对象的原型对象，说白了就是这个对象的父亲，父亲拥有的方法和属性都会被我们的这个对象继承

ReloadImg.prototype = {
  //初始化对象，初始化对象的作用是让我们的这个对象拥有预加载图片的功能
  init: function() {

    this.loadImg(this.imgIndex);
  },

  //原型对象加载图片的功能
  loadImg: function(imgIndex) {

    var img = new Image();
    //因为在图片的onload函数中，this指的是图片本身，函数中并不能访问到加载图片的对象，所以，我们将此对象赋给img的that
    //属性
    img.src = this.imgSrcList[imgIndex];
    //当图片下载完成的时候会调用此方法
    //为图片挂接load事件
    img.addEventListener("load", this.loadImgHandler.bind(this))

  },
  loadImgHandler: function(e) {
    // e.target = null;
    //当最后一张图片下载完成以后就不执行以下代码了
    if (this.imgIndex == this.imgSrcList.length - 1) {
      this.callBack();
      return;
    }
    //当图片下载完成以后，下载下一张图片             
    this.imgIndex++;
    this.loadImg(this.imgIndex);
  }
}
