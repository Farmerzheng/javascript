function MaskImage(_src,_width,_height) {
    this.imgDiv=null;
    this.src=_src;
    this.width=_width;
    this.height=_height;
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
            transition:"all 2s",
            left:"0px",
            top:"0px"
        });
        this.imgDiv.append(img);
        img.attr("src",this.src);
        this.imgDiv.hover(this.mouseOverHandler.bind(this),this.mouseOutHandler.bind(this));
        return this.imgDiv
    },
    mouseOverHandler:function () {
        this.imgDiv.children(0).css({
            "width":this.width+50+"px",
            "height":this.height+50+"px",
            "left":-25+"px",
            "top":-25+"px"
        })
    },
    mouseOutHandler:function () {
        this.imgDiv.children(0).css({
            "width":this.width+"px",
            "height":this.height+"px",
            "left":"0px",
            "top":"0px"
        })
    }
};
MaskImage.prototype.constructor=MaskImage;