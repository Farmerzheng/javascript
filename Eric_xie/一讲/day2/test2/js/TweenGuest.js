animation();
function animation() {
    requestAnimationFrame(animation);
    TWEEN.update();
}
var TweenGuest=TweenGuest || (function () {
        return {
           to:function (target,beginObj,finshObj,time,easing) {
               beginObj.target=target;
               finshObj.target=target;
               var tween=new TWEEN.Tween(beginObj);
               tween.to(finshObj,time);
               tween.onUpdate(this.update);
               tween.onComplete(this.complete)
               if(easing){
                   tween.easing(easing);
               }
               tween.start();
           },
            update:function () {
                for(var str in this){
                    this.target.style[str]=this[str]+"px";
                }
            },
            complete:function () {
                
            }
        }
    })();