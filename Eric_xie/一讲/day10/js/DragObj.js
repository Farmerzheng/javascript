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
    }
}