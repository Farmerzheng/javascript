/**
 * Created by 王争 on 2017/6/11.
 */
function LoadImage(container,imgSrcList,imgCssText,callBack){
    this.container = container;
    this.imgSrcList = imgSrcList;
    this.imgList = [];
    this.imgCssText = imgCssText;
    this.callBack = callBack;
    this.imgSrcIndex = 0;

}

LoadImage.prototype = {
    calculateImgOffsetTop:function(){
       var offsetTop ;
       function calculateOffsetTop(obj){

            if(obj.parentNode && obj.parentNode!="document"){
                offsetTop += obj.offsetTop;
                calculateOffsetTop(obj.parentNode);
            }
        }

        for(var i = 0 ;i<this.imgList.length ; i++ ){
            offsetTop = 0;     
            calculateOffsetTop(this.imgList[i]);
            this.imgList[i].top = offsetTop;

        }

    },
    init:function(){
        this.createImage();
        this.calculateImgOffsetTop();
        this.scroll();

    },
    createImage:function(){
       for(var i = 0 ; i <this.imgSrcList.length; i++){
           var img = new Image();
           img.style.cssText = this.imgCssText;
           this.container.appendChild(img);
           this.imgList.push(img);
       }
    },

    loadImage:function(){
        this.visibleBottom = (document.documentElement.scrollTop||document.body.scrollTop) +            document.documentElement.clientHeight;        

         for(var i = 0 ;i<this.imgList.length ; i++ ){
             console.log(this.imgList[i].top , this.visibleBottom)
             if(this.imgList[i].top < this.visibleBottom){
                 // console.log(1)
                 this.imgList[i].src = this.imgSrcList[this.imgSrcIndex];
                 this.imgSrcIndex++;
                 this.imgList.shift();
                 if(this.callBack){
                     this.callBack();
                 }
             }
         }
    },
    scroll:function(){
        var self = this;
        window.addEventListener("scroll",this.scrollHandler);
        window.that = this;
    },
    scrollHandler:function(){
         //console.log(this.that.imgSrcIndex ,this.that.imgSrcList.length);
        if(this.that.imgSrcIndex < this.that.imgSrcList.length){
            this.that.loadImage();
        }else{
            //var self = this;
            window.removeEventListener("scroll",this.that.scrollHandler)
        }
    }

}