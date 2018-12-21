function MaskImage(_src,_width,_height) {
    this.imgDiv=null;
    this.src=_src;
    this._info="";
    this.width=_width;
    this.height=_height;
    this.infoColor="rgba(0,0,0,0.3)"
}
MaskImage.prototype={
    createMaskImage:function () {
        if(this.imgDiv) return this.imgDiv;
        this.imgDiv=$("<div></div>").css({
            width:this.width+"px",
            height:this.height+"px",
            overflow:"hidden",
            position:"absolute"
        });
        var img=$("<img>").css({
            position:"absolute",
            width:this.width+"px",
            height:this.height+"px",
            transition:"all 1s",
            left:"0px",
            top:"0px"
        });
        var alphaDiv=$("<div>"+this.info+"</div>").css(
            {
                width:this.width+"px",
                height:"0px",
                backgroundColor:this.infoColor,
                position:"absolute",
                bottom:"0px",
                color:"#FFFFFF",
                textAlign:"center",
                lineHeight:"30px",
                transition:"all 1s"
            }
        );

        this.imgDiv.append(img);
        this.imgDiv.append(alphaDiv);
        img.attr("src",this.src);
        this.imgDiv.hover(this.mouseOverHandler.bind(this),this.mouseOutHandler.bind(this));
        return this.imgDiv
    },
    mouseOverHandler:function () {

        this.imgDiv.children().eq(0).css({
            "width":this.width+50+"px",
            "height":this.height+50+"px",
            "left":-25+"px",
            "top":-25+"px"
        });
        this.imgDiv.children().eq(1).css({
            "height":"30px"
        })
    },
    mouseOutHandler:function () {
        this.imgDiv.children().eq(0).css({
            "width":this.width+"px",
            "height":this.height+"px",
            "left":"0px",
            "top":"0px"
        });
        this.imgDiv.children().eq(1).css({
            "height":"0px"
        })
    },
    set info(value)
    {
        this._info=value;
        if(!this.imgDiv) return;
        this.imgDiv.children().eq(1).text(value);
    },
    get info(){
        return this._info;
    }
};
MaskImage.prototype.constructor=MaskImage;