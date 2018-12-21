function ShoppingCart(_imgSrc,_shopInfo){
    this._src=_imgSrc;
    if(_shopInfo){
        this._info=_shopInfo;
    }else{
        this._info="";
    }
}
ShoppingCart.prototype={
    createShopDiv:function () {
        if(this.shopDiv) return this.shopDiv;
        this.shopDiv=$("<div></div>").css(
            {
                position:"relative",
                width:"600px",
                height:"200px",
                border:"1px solid #000000"
            }
        );
        var img=$("<img>");
        var span=$("<span>"+this._info+"</span>");
        var bn=$("<input type='button' value='删除'>");
        this.shopDiv.append(img);
        this.shopDiv.append(span);
        this.shopDiv.append(bn);
        img.on("load",this.loadHandler);
        bn.on("click",this.clickHandler);
        if(this._src){
            img.attr("src",this._src);
        }
        return this.shopDiv;
    },
    loadHandler:function (e) {
        $(this).css({
            position:"absolute",
            width:"100px",
            height:"100px",
            left:"20px",
            top:"50px"
        });

        $(this).next().css({
            position:"absolute",
            width:"300px",
            height:"100px",
            lineHeight:"100px",
            left:$(this).offset().left+$(this).width()+20+"px",
            top:"50px",
            overflow:"hidden"
        });

        $(this).next().next().css({
            position:"absolute",
            width:"70px",
            height:"30px",
            left:$(this).next().offset().left+$(this).next().width()+20+"px",
            top:(200-30)/2+"px"
        })
    } ,
    clickHandler:function (e) {
        $(this).parent().hide(1000,function () {
             $(this).remove();
        })
    },
    set src(value){
        this._src = value;
        if(!this.shopDiv) return;
        this.shopDiv.children().eq(0).attr("src", value);
    },
    get src(){
        return this._src;
    },
    set info(value){
        this._info=value;
        if(!this.shopDiv) return;
        this.shopDiv.children().eq(1).text(value);
    },
    get info(){
        return this._info;
    }

};
ShoppingCart.prototype.constructor=ShoppingCart;