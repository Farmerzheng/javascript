function RollPlayImage(imgList,width,height,LRList) {
    RollPlayImage.imgList=imgList;
    this.LRList=LRList;
    RollPlayImage.rollWidth=width;
    RollPlayImage.rollHeight=height;
    setInterval(this.showImage,16);
}
RollPlayImage.postion=0;
RollPlayImage.leftMove=true;
RollPlayImage.intervalBool=false;
RollPlayImage.div1;
RollPlayImage.imgList;
RollPlayImage.lis=[];
RollPlayImage.rollWidth;
RollPlayImage.rollHeight;
RollPlayImage.prototype={
    createRollPlay:function () {
        RollPlayImage.postion=0;
        var div0=document.createElement("div");
        div0.className="div0";
        // document.body.appendChild(div0);
        RollPlayImage.div1=document.createElement("div");
        div0.appendChild(RollPlayImage.div1);
        div0.style.width=RollPlayImage.rollWidth+"px";
        div0.style.height=RollPlayImage.rollHeight+"px";
        div0.style.overflow="hidden";
        div0.style.position="relative";
        var img=new Image();
        img.src=RollPlayImage.imgList[0];
        img.style.width=RollPlayImage.rollWidth+"px";
        img.style.height=RollPlayImage.rollHeight+"px";
        RollPlayImage.div1.appendChild(img);
        RollPlayImage.div1.style.width=RollPlayImage.rollWidth*2+"px";
        RollPlayImage.div1.style.width=RollPlayImage.rollHeight+"px";
        RollPlayImage.div1.style.position="absolute";
        var leftBn;
        var rightBn;
        if(this.LRList){
            leftBn=new Image();
            leftBn.src=this.LRList[0]
            rightBn=new Image();
            rightBn.src=this.LRList[1];
        }else{
            leftBn=document.createElement("input");
            leftBn.type="button";
            leftBn.value="左边";
            rightBn=document.createElement("input");
            rightBn.type="button";
            rightBn.value="右边";

        }
        leftBn.style.left="10px";
        rightBn.style.left=RollPlayImage.rollWidth-50+"px";
        leftBn.style.position="absolute";
        rightBn.style.position="absolute";
        leftBn.style.top=(RollPlayImage.rollHeight-20)/2+"px";
        rightBn.style.top=(RollPlayImage.rollHeight-20)/2+"px";
        leftBn.rebulidLi=this.rebulidLi;
        rightBn.rebulidLi=this.rebulidLi;
        leftBn.addEventListener("click",this.leftMoveClickHandler)
        rightBn.addEventListener("click",this.rightMoveClickHandler)
        div0.appendChild(leftBn);
        div0.appendChild(rightBn);

        var ul=document.createElement("ul");
        ul.style.listStyle="none";
        ul.style.position="absolute";
        ul.style.top=RollPlayImage.rollHeight-40+"px";
        div0.appendChild(ul);
        for(var i=0;i<RollPlayImage.imgList.length;i++){
            var li=document.createElement("li");
            li.textContent=i+1;
            li.n=i;
            li.style.float="left";
            li.style.width="20px";
            li.style.height="20px";
            li.style.borderRadius="20px";
            li.style.backgroundColor="#FFCCCC";
            li.style.textAlign="center";
            li.style.color="#FFFFFF";
            li.style.marginRight="5px";
            li.rebulidLi=this.rebulidLi;
            li.addEventListener("click",this.clickHandler);
            ul.appendChild(li);
            RollPlayImage.lis.push(li);
        }

        ul.style.width=(20+5)*RollPlayImage.imgList.length+"px";
        ul.style.left=(RollPlayImage.rollWidth-parseInt(ul.style.width))/2+"px";

        RollPlayImage.div1.style.left="0px";
        return div0;
    },
    showImage:function () {
        if(!RollPlayImage.intervalBool) return;
        if(RollPlayImage.leftMove){
            RollPlayImage.div1.style.left=parseInt(RollPlayImage.div1.style.left)-10+"px";
            if(parseInt(this.div1.style.left)<=-RollPlayImage.div1.firstElementChild.clientWidth){
                RollPlayImage.intervalBool=false;
                RollPlayImage.div1.firstElementChild.remove();
                RollPlayImage.div1.style.left="0px";
            }
        }else{
            RollPlayImage.div1.style.left=parseInt(RollPlayImage.div1.style.left)+10+"px";
            if(parseInt(RollPlayImage.div1.style.left)>=0){
                RollPlayImage.intervalBool=false;
                RollPlayImage.div1.lastElementChild.remove();
                RollPlayImage.div1.style.left="0px";

            }
        }
    },
    leftMoveClickHandler:function () {
        if(RollPlayImage.intervalBool) return;
        RollPlayImage.postion++;
        if(RollPlayImage.postion>RollPlayImage.imgList.length-1){
            RollPlayImage.postion=0;
        }
        RollPlayImage.div1.style.width=RollPlayImage.rollWidth*2+"px";
        var img=new  Image();
        img.src=RollPlayImage.imgList[RollPlayImage.postion];
        img.style.width=RollPlayImage.rollWidth+"px";
        img.style.height=RollPlayImage.rollHeight+"px";
        RollPlayImage.div1.appendChild(img);
        RollPlayImage.leftMove=true;
        RollPlayImage.intervalBool=true;
        this.rebulidLi();
    },
    rightMoveClickHandler:function () {
        if(RollPlayImage.intervalBool) return;

        RollPlayImage.postion--;
        RollPlayImage.div1.style.width=RollPlayImage.rollWidth*2+"px";
        if(RollPlayImage.postion<0){
            RollPlayImage.postion=RollPlayImage.imgList.length-1;
        }
        var img=new  Image();
        img.src=RollPlayImage.imgList[RollPlayImage.postion];
        img.style.width=RollPlayImage.rollWidth+"px";
        img.style.height=RollPlayImage.rollHeight+"px";
        RollPlayImage.div1.insertBefore(img,RollPlayImage.div1.firstElementChild);
        RollPlayImage.div1.style.left=-img.clientWidth+"px";
        RollPlayImage.leftMove=false;
        RollPlayImage.intervalBool=true;
        this.rebulidLi();
    },
    showImage:function () {
        if(!RollPlayImage.intervalBool) return;
        if(RollPlayImage.leftMove){
            RollPlayImage.div1.style.left=parseInt(RollPlayImage.div1.style.left)-10+"px";
            if(parseInt(RollPlayImage.div1.style.left)<=-RollPlayImage.div1.firstElementChild.clientWidth){
                RollPlayImage.intervalBool=false;
                RollPlayImage.div1.firstElementChild.remove();
                RollPlayImage.div1.style.left="0px";
            }
        }else{
            RollPlayImage.div1.style.left=parseInt(RollPlayImage.div1.style.left)+10+"px";
            if(parseInt(RollPlayImage.div1.style.left)>=0){
                RollPlayImage.intervalBool=false;
                RollPlayImage.div1.lastElementChild.remove();
                RollPlayImage.div1.style.left="0px";

            }
        }
    },
    clickHandler:function (e) {
        if(!e){
            e=window.event;
        }
        RollPlayImage.div1.style.width=RollPlayImage.rollWidth*2+"px";
        if(this.n>RollPlayImage.postion){
            RollPlayImage.postion=this.n;
            var img=new  Image();
            img.src=RollPlayImage.imgList[RollPlayImage.postion];
            img.style.width=RollPlayImage.rollWidth+"px";
            img.style.height=RollPlayImage.rollHeight+"px";
            RollPlayImage.div1.appendChild(img);
            RollPlayImage.leftMove=true;
            RollPlayImage.intervalBool=true;
        }else if(this.n<RollPlayImage.postion){
            RollPlayImage.postion=this.n;
            var img=new  Image();
            img.src=RollPlayImage.imgList[RollPlayImage.postion];
            img.style.width=RollPlayImage.rollWidth+"px";
            img.style.height=RollPlayImage.rollHeight+"px";
            RollPlayImage.div1.insertBefore(img,RollPlayImage.div1.firstElementChild);
            RollPlayImage.div1.style.left=-img.clientWidth+"px";
            RollPlayImage.leftMove=false;
            RollPlayImage.intervalBool=true;
        }
        this.rebulidLi();
    },
    rebulidLi:function () {
        for(var i=0;i<RollPlayImage.lis.length;i++){
            RollPlayImage.lis[i].style.backgroundColor="#CCCCCC";
        }
        RollPlayImage.lis[RollPlayImage.postion].style.backgroundColor="#FF0000";
    }
}
