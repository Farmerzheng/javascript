var LoadImage=LoadImage || (function () {
        return {
            imgList:[],
            num:0,
            srcList:[],
            callBack:null,
            load:function (srclist,callBack) {
                this.srcList=srclist;
                this.callBack=callBack;
                var img=new Image();
                img.addEventListener("load",this.loadImageHandler.bind(this));
                img.src=srclist[0];
            },
            loadImageHandler:function (e) {
                if(!e){
                    e=window.event;
                }

                this.imgList.push(e.target);
                e.target.removeEventListener("load",this.loadImageHandler);
                this.num++;
                if(this.num<this.srcList.length){
                    var img=new Image();
                    img.addEventListener("load",this.loadImageHandler.bind(this));
                    img.src=this.srcList[this.num];
                }else{
                    this.callBack(this.imgList)
                }
            }

        }
    })();
