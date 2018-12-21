function LoadImg(imgList,callBack) {
    this.imgList=imgList;
    this.callBack=callBack;
    this.sum=0;
    this.list=[];
    var img=new Image();
    img.that=this;
    img.addEventListener("load",this.loadEventHandler);
    img.src=imgList[0];

}
LoadImg.LOAD_FINSH="load_Finsh";
LoadImg.prototype={
    loadEventHandler:function (e) {
        if(!e){
            e=window.event;
        }
        if(this.that.sum<this.that.imgList.length-1){
            this.that.sum++;
            this.that.list.push(this);
            this.removeEventListener("load",this.loadEventHandler);
            var img=new Image();
            img.that=this.that;
            img.addEventListener("load",this.that.loadEventHandler);
            img.src=this.that.imgList[this.that.sum];
        }else{
            this.that.callBack(this.that.list);
        }
    }
};