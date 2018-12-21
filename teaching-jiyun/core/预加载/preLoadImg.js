//图片预加载插件
function LoadImg(imgSrcList,callBack){

   var self = this;

   this.list = [];

   this.addEvent = function(obj,event,func){
   	if(obj.addEventListener){
   		obj.addEventListener(event,func);
   	}else{
   		obj.attachEvent("on"+event,func);
   	}
   };

   this.removeEvent = function(obj,event,func){
      
      if(obj.removeEventListener){
         obj.removeEventListener(event,func);
      }else{
         obj.detachEvent("on"+event,func);
      }
   };
   
   this.loadImgHandler = function(){

   	    self.list.push(this);         
        self.removeEvent(this,"load",self.loadImgHandler);

        if(self.list.length < imgSrcList.length){
           
          var img = new Image();

          img.src = imgSrcList[self.list.length];        
          
          self.addEvent(img,"load",self.loadImgHandler);
        }
        if(self.list.length == imgSrcList.length){

           callBack();
        }
   };

   var img = new Image();
   img.src = imgSrcList[0];
   this.addEvent(img,"load",this.loadImgHandler);        
}

