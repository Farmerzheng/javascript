/**
 * Created by DELL on 2017/5/18.
 */
function DragObj(obj) {
    this.obj=obj;
    obj.that=this;
    obj.addEventListener("mousedown",this.mouseHandler);
}
DragObj.MOVE_EVENT="Move_Event";
DragObj.prototype={

    mouseHandler:function (e) {
        if(!e){
            e=window.event;
        }
        e.preventDefault();
        if(e.type=="mousedown"){
            this.addEventListener("mousemove",this.that.mouseHandler);
            this.addEventListener("mouseout",this.that.mouseHandler);
            this.addEventListener("mouseup",this.that.mouseHandler);
        }else if(e.type=="mouseup")
        {
            this.removeEventListener("mouseup",this.that.mouseHandler);
            this.removeEventListener("mousemove",this.that.mouseHandler)
        }else if(e.type=="mousemove"){
            this.style.left=e.clientX-this.offsetWidth/2+"px";
            this.style.top=e.clientY-this.offsetHeight/2+"px";
            var evt=new Event(DragObj.MOVE_EVENT);
            evt.data=e;
            this.dispatchEvent(evt);
        }else if(e.type=="mouseout"){
            this.removeEventListener("mouseup",this.that.mouseHandler);
            this.removeEventListener("mousemove",this.that.mouseHandler)
            this.removeEventListener("mouseout",this.that.mouseHandler)
        }
    }
};