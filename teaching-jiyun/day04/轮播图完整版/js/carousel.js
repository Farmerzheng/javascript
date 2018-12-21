function Carousel(container,containerWidth,imgList,dotList,leftBtn,rightBtn){


	   //对象自身的属性
	    this.container = container;
	    this.container.that = this;
	    this.imgList = imgList;
	    this.dotList = dotList;
	    this.leftBtn = leftBtn;
	    this.leftBtn.that = this;
	    this.rightBtn = rightBtn;
	    this.rightBtn.that = this;
        this.index = 0;
	    this.timer;
	    this.leftMoveBoolean = true;
	    this.width = containerWidth;
	    //为对象的属性添加事件
        this.addEvent(this.container,"mouseover",this.mouseOverHandler); 

	    this.addEvent(this.container,"mouseout",this.mouseOutHandler);
	    this.addEvent(this.leftBtn,"click",this.leftClickHandler);
        this.addEvent(this.rightBtn,"click",this.rightClickHandler);   

	    for(var i = 0 ; i < this.dotList.length ; i++){

            this.dotList[i].dotIndex = i;
            this.dotList[i].that = this;
	    	this.addEvent(dotList[i],"mouseover",this.dotMouseHandler)	    	
	    }
}
//对象的原型（父亲）
Carousel.prototype = {

	     init:function(){
             this.autoPlay();
	       },

         changeDot:function (){      	
	    	for(var i = 0 ; i < this.dotList.length ; i++){
	    		this.dotList[i].style.backgroundColor = "pink"
	    	}
	    	this.dotList[this.index].style.backgroundColor = "red";
	     },
	     showImage:function (dotIndex){
        	    if(this.leftMoveBoolean == true){
	        	    move(this.imgList[this.index],0,0,-this.width,50);
			    	this.index++;
			    	if(this.index == 4){
			    		this.index = 0;
			    	}

			    	if(dotIndex == 0 || dotIndex){
			    		move(this.imgList[dotIndex],0,this.width,0,50);
			    		this.index = dotIndex;
			    	}else{
			    		move(this.imgList[this.index],0,this.width,0,50);
			    	}	            
			    	
        	    }else{
        	        move(this.imgList[this.index],0,0,this.width,50);
			    	if(this.index == 0){
			    		this.index = 4;
			    	}
			    	this.index--;

			    	if(dotIndex == 0 || dotIndex){
	                    move(this.imgList[dotIndex],0,-this.width,0,50);
	                    this.index = dotIndex;
			    	}else{
			    		move(this.imgList[this.index],0,-this.width,0,50);
			    	}  
        	    }     

	            this.changeDot();
             },
          autoPlay:function (){
		             this.leftMoveBoolean = true;
		             window.that = this;
			         this.timer = setInterval(function(){
		                this.that.showImage()		    
				      },2000)
                   },
          addEvent:function (obj,event,func){
		        	if(obj.addEventListener){
		        		obj.addEventListener(event,func);
		        	}else{
		        		obj.attachEvent("on"+event,func);
		        	}
          },
          //事件处理函数（回调函数）
          //回调函数  ： 当满足某些条件的时候才执行的函数 
                         //例如事件处理函数就是回调函数
          mouseOverHandler:function(){
              clearInterval(this.that.timer);
          },
          mouseOutHandler:function(){
          	this.that.autoPlay();	   
          },
          leftClickHandler:function(){
          	   this.that.leftMoveBoolean = true;
               this.that.showImage();
          },
          rightClickHandler:function(){
	    	   this.that.leftMoveBoolean = false;
               this.that.showImage();
	      },
	      dotMouseHandler:function(){

	    		//this.dotIndex > index  //左移动
                //this.dotIndex < index  //右移动

                if(this.dotIndex > this.that.index){
                	 //左移
                	 this.that.leftMoveBoolean = true;
                	 //展示图片
                	 this.that.showImage(this.dotIndex);
                }else{
                	//右移
                	 this.that.leftMoveBoolean = false;
                	 //展示图片
                	 this.that.showImage(this.dotIndex);
                }
	    	}  
}