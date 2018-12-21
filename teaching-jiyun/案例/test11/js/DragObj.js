/**
 * Created by DELL on 2017/5/18.
 */
function DragObj(obj) {
    this.obj=obj;
    obj.that=this;
    obj.indexZ;
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
            if(this.style.zIndex.length>0){
                this.indexZ=this.style.zIndex;
                this.style.zIndex="999";
            }
            this.addEventListener("mousemove",this.that.mouseHandler);
            this.addEventListener("mouseout",this.that.mouseHandler);
            this.addEventListener("mouseup",this.that.mouseHandler);
        }else if(e.type=="mouseup")
        {
            this.removeEventListener("mouseup",this.that.mouseHandler);
            this.removeEventListener("mousemove",this.that.mouseHandler)
            this.style.zIndex=this.indexZ;
        }else if(e.type=="mousemove"){

            if(this.parentElement==document.body){
                this.style.left=e.clientX-this.offsetWidth/2+"px";
                this.style.top=e.clientY-this.offsetHeight/2+"px";
            }else{
                this.style.left=e.clientX-this.parentElement.offsetLeft-this.offsetWidth/2+"px";
                this.style.top=e.clientY-this.parentElement.offsetTop-this.offsetHeight/2+"px";
            }

            var evt=new Event(DragObj.MOVE_EVENT);
            evt.data=e;
            this.dispatchEvent(evt);
            e.preventDefault();
        }else if(e.type=="mouseout"){
            this.removeEventListener("mouseup",this.that.mouseHandler);
            this.removeEventListener("mousemove",this.that.mouseHandler)
            this.removeEventListener("mouseout",this.that.mouseHandler)
            this.style.zIndex=this.indexZ;
        }
    },
    removeDrag:function () {
        this.obj.removeEventListener("mousedown",this.mouseHandler);
        this.obj=null;
    }
};