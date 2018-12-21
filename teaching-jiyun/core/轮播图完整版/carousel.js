 function Carousel(container,imgList,dotList,leftBtn,rightBtn,time){
         
         this.container = container;
         container.that = this;

         this.imgList =imgList;         
         this.dotList = dotList || null;
         this.leftBtn = leftBtn || null;
         this.time = time || 1000;
         this.leftMove = true ;

         if(leftBtn){
            leftBtn.that = this;
         }

         this.rightBtn = rightBtn || null;

         if(rightBtn){
            rightBtn.that = this;
         }

         this.timer = null;
         this.index = 0;        

    }

    Carousel.prototype = {
        init:function(){
            this.dotList[0].style.backgroundColor = "red" ;
            this.autoPlay();
            this.addEvent();
        },
        showImage:function(width){

                if(this.leftMove == true){
                    move(this.imgList[this.index],0,0,-width,30);
                    this.index++;
                    if(this.index == 4){
                        this.index = 0;
                    }       
                    move(this.imgList[this.index],0,width,0,30); 
                }else{
                    move(this.imgList[this.index],0,0,width,30); 
                    this.index--;
                    if(this.index == -1){
                        this.index = 3;
                    };
                    move(this.imgList[this.index],0,-width,0,30);
                }
               
                this.changeDot();
        },
        autoPlay : function (){

            var self = this;
            this.leftMove = true;
            this.timer = setInterval(function(){
               self.showImage(self.container.offsetWidth);
            },self.time); 
    
        },
        changeDot:function(){
               for(var i = 0 ; i < this.dotList.length ; i++){
                    this.dotList[i].style.backgroundColor = "yellow"
                }
              this.dotList[this.index].style.backgroundColor = "red";
        },
        addEvent:function(){ 

            if(this.leftBtn){
                this.leftBtn.onclick = this.leftClickHandler;
            }           
            if(this.rightBtn){
                this.rightBtn.onclick = this.rightClickHandler;
            }
           
            this.container.onmouseover = this.mouseoverHandler;
            this.container.onmouseout = this.mouseoutHandler;



            for(var i = 0 ; i < this.dotList.length ; i++){
                this.dotList[i].index = i;
                this.dotList[i].that = this;
                this.dotList[i].onmouseover = this.dotClickHandler;
            }

        },
        leftClickHandler:function(){
            this.that.leftMove = true;
            this.that.showImage(this.that.container.offsetWidth);
        },
        mouseoverHandler:function(){
            clearInterval(this.that.timer)
        },
        mouseoutHandler:function(){
            this.that.autoPlay();
        },
        rightClickHandler:function(){
            this.that.leftMove = false;
            this.that.showImage(this.that.container.offsetWidth);
        },
        dotClickHandler:function(){

            console.log(1);
               
            if(this.index > this.that.index){
                move(this.that.imgList[this.index],0,300,0,30);
                move(this.that.imgList[this.that.index],0,0,-300,30);
            }else{
                move(this.that.imgList[this.index],0,-300,0,30);
                move(this.that.imgList[this.that.index],0,0,300,30);
            }

            this.that.index = this.index;
            this.that.changeDot(); 

        }
    }
