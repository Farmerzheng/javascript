function DragObj(_obj) {
        this.obj=_obj;
        this.point={};
        this.moveBool=false;
        this.obj.addEventListener("mousedown",this.mouseHandler.bind(this));
        this.obj.addEventListener("mouseup",this.mouseHandler.bind(this));
        this.obj.addEventListener("mousemove",this.mouseHandler.bind(this));
        this.obj.addEventListener("mouseleave",this.mouseHandler.bind(this));
}
DragObj.prototype={
    mouseHandler:function (e) {
        if(!e){
            e=window.event;
        }
        if(e.type=="mousedown"){
            this.moveBool=true;
            this.point.x=e.offsetX;
            this.point.y=e.offsetY;
        }else if(e.type=="mousemove"){
            if(!this.moveBool) return;
            this.obj.style.left=(e.clientX-this.point.x)+"px"
            this.obj.style.top=(e.clientY-this.point.y)+"px"
        }else if(e.type=="mouseup" || e.type=="mouseleave"){
            this.moveBool=false;
        }
    },
    removeEvent:function () {
        this.obj.removeEventListener("mousedown",this.mouseHandler.bind(this));
        this.obj.removeEventListener("mouseup",this.mouseHandler.bind(this));
        this.obj.removeEventListener("mousemove",this.mouseHandler.bind(this));
        this.obj.removeEventListener("mouseleave",this.mouseHandler.bind(this));
        this.obj=null;
        this.point=null;
    }
};
var HitTest=HitTest || (function () {
        return {
            to:function (display0,display1) {
                var rect=display0.getBoundingClientRect();
                var rect1=display1.getBoundingClientRect();
                if(rect.left>=rect1.left && rect.left<=rect1.left+rect1.width && rect.top>=rect1.top && rect.top<=rect1.top+rect1.height){
                   return true;
                }
                if(rect.left+rect.width>=rect1.left && rect.left+rect.width<=rect1.left+rect1.width && rect.top>=rect1.top && rect.top<=rect1.top+rect1.height){
                    return true;
                }
                if(rect.left>=rect1.left && rect.left<=rect1.left+rect1.width && rect.top+rect.height>=rect1.top && rect.top+rect.height<=rect1.top+rect1.height){
                    return true;
                }
                if(rect.left+rect.width>=rect1.left && rect.left+rect.width<=rect1.left+rect1.width && rect.top+rect.height>=rect1.top && rect.top+rect.height<=rect1.top+rect1.height){
                    return true;
                }
            }
        }
    })();
var LoadImg=LoadImg || (function () {
        return {
            load:function (listSrc,callBack) {
                this.callBack=callBack;
                this.listSrc=listSrc;
                this.num=0;
                this.imgArr=[];
                var img=new Image();
                img.addEventListener("load",this.loadHandler.bind(this));
                img.src=listSrc[0];
            },
            loadHandler:function (e) {
                if(!e){
                    e=window.event;
                }
                e.currentTarget.removeEventListener("load",this.loadHandler.bind(this));
                this.imgArr[this.num]=e.currentTarget;
                if(this.num+1>this.listSrc.length-1){
                    this.callBack(this.imgArr)
                    return;
                }
                var img=new Image();
                this.num++;
                img.addEventListener("load",this.loadHandler.bind(this));
                img.src=this.listSrc[this.num];
            }
        }
    })();