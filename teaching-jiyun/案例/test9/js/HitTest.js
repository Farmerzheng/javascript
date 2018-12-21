/**
 * Created by DELL on 2017/5/2.
 */
var HitTest=HitTest || (function () {
        return{
            test:function (testA,testB) {
                var rectA=testA.getBoundingClientRect();
                var rectB=testB.getBoundingClientRect();
                if(rectA.left>=rectB.left && rectA.left<=rectB.right && rectA.top>=rectB.top && rectA.top<=rectB.bottom){
                    return true;
                }
                if(rectA.right>=rectB.left && rectA.right<=rectB.right && rectA.top>=rectB.top && rectA.top<=rectB.bottom){
                    return true;
                }
                if(rectA.left>=rectB.left && rectA.left<=rectB.right && rectA.bottom>=rectB.top && rectA.bottom<=rectB.bottom){
                    return true;
                }
                if(rectA.right>=rectB.left && rectA.right<=rectB.right && rectA.bottom>=rectB.top && rectA.bottom<=rectB.bottom){
                    return true;
                }
                return false
            },
            mouseTest:function (testA,callBack) {
                var rectA=testA.getBoundingClientRect();
               document.addEventListener("mousemove",function mouseHandler(e) {
                   if(!e){
                       e=window.event;
                   }
                   if(e.x>=rectA.left && e.x<=rectA.right && e.y>=rectA.top && e.y<=rectA.bottom){
                       document.removeEventListener("mousemove",mouseHandler);
                       callBack(e)
                   }
               })
            }
        }

    })();
