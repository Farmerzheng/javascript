
var bool=false;
updates();
function updates() {
    var id=requestAnimationFrame(updates);
    TWEEN.update();
    if(TWEEN.getAll()>0){
        bool=true;
    }
    if(TWEEN.getAll().length==0 && bool){
        cancelAnimationFrame(id);
    }
}

var TweenGuset=TweenGuset || (function () {
       return{
           tweenAB:function (target,begin,end,duration,easingName) {
               begin["target"]=target;
               end["target"]=target;
               if(TWEEN.getAll().length==0 && bool){
                   updates();
               }
               var tween=new TWEEN.Tween(begin)
                   .to(end,duration);
               if(easingName){
                        tween.easing(easingName)
                    }
               tween.onComplete(this.completeHandler)
               tween.onStart(this.startHandler)
               tween.onUpdate(this.tweenUpdate);
               tween.start();
           },
           startHandler:function () {
               
           },
           completeHandler:function () {

           },
           tweenUpdate:function () {

               for(var str in this){
                   if(str=="top" || str=="left"|| str=="right" || str=="bottom" || str=="width"|| str=="height"){
                       this.target.style[str]=this[str]+"px";
                       // console.log(str,this[str])
                   }else if(str.indexOf("olor")>-1){

                       this.target.style[str]="#"+Math.floor(this[str]).toString(16);
                   }else{
                       this.target.style[str]=this[str];
                   }
               }

           }

       }
    })();

