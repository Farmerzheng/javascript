
var Tweens=Tweens || (function () {
        return {
            to:function (target,begin,end,time,easing,completeBool,delay) {
                begin.obj=target;
                end.obj=target;
                begin.completeBool=completeBool;
                end.completeBool=completeBool;
                var tween=new TWEEN.Tween(begin);
                tween.to(end,time);
                if(delay){
                    tween.delay(delay)
                }
                tween.onComplete(this.complete)
                tween.onUpdate(this.update);
                if(easing){
                    tween.easing(easing);
                }
                tween.start();
            },
            update:function () {
                for(var str in this){
                    this.obj.style[str]=this[str]+"px";
                }
            },
            complete:function () {
                if(this.completeBool){
                    this.obj.callback()
                }

            }
            
        };
    })();
