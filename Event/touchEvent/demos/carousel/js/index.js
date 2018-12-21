/**
 * Created by 王争 on 2016/5/30.
 */
    function $id(id){
    return document.getElementById(id);
}
document.addEventListener("touchmove",function(e){
    e.preventDefault();
});
var carousel={
    init:function(){
        this.autoPlay();
        this.bindEvent();
    },
    bindEvent:function(){
      this.touch();
    },
    container:$id("container"),
    imgList:$id("img-list"),
    dotList:$id("dot-list"),
    imgListTranslateX:0,
    num:1,
    autoPlay:function(){
        var self=this;
        self.timer=setInterval(function(){
            self.imgList.style.transition="0.5s";
            self.imgListTranslateX=-window.screen.width*self.num;
            self.imgList.style.transform="translateX("+self.imgListTranslateX+"px";
            self.num++;
            self.num=self.num%4;
        },1000);

    },
    touch:function(){
        var self=this;
        var distance=0;
        var startX=0;
        var endX=0;
        this.container.addEventListener("touchstart",function(e){
            clearInterval(self.timer);
            startX=e.changedTouches[0].pageX;
        });
        this.container.addEventListener("touchmove",function(e){
            //clearInterval(self.timer);
            //console.log(e.changedTouches[0].pageX);
            endX=e.changedTouches[0].pageX;
            distance=endX-startX;

        })
    }
}
carousel.init();