/**
 * Created by DELL on 2017/7/10.
 */
function MoveDiv(div,i) {
    this.div=div;
    this.div.bool=false;
    this.div.style.left="0px";
    this.div.style.top=i*60+"px";
    this.div.style.opacity=1;
    this.div.addEventListener("click",this.clickHandler)
}
MoveDiv.prototype={
    clickHandler:function (e) {
        if(!e){
            e=window.event;
        }
        this.bool=!this.bool;
    },
    update:function () {
        if(this.div.bool) return;
        this.div.style.left=parseFloat(this.div.style.left)+1+"px";
        this.div.style.opacity=parseFloat(this.div.style.opacity)-0.001;
    }
};
