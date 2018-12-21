function Fade(img)
{
	this.img=img;
	this.fadeInBoolean=false;
	this.fadeoutBoolean=false;
	img.style.opacity=1;
	// img.style.filter = "alpha(opacity=100)";
	img.self=this;
	this.img.addEventListener("mouseenter",this.mouseenter);
	this.img.addEventListener("mouseout",this.mouseleaveHandler);
}

Fade.prototype={
	mouseenter:function(e){
		if(!e){
			e=window.event;
		}
		this.self.fadeInBoolean=true;
		this.self.fadeOutBoolean=false;		
	},
	mouseleaveHandler:function(e){
		if(!e){
			e=window.event;
		}
		this.self.fadeInBoolean=false;
		this.self.fadeOutBoolean=true;
	},
	fadein:function(){
		// console.log(this.img.style.opacity);
		if(!this.fadeInBoolean) return;
		if(this.img.style.opacity<=0){
			this.fadeInBoolean=false;
			return;
		}
		this.img.style.opacity=parseFloat(this.img.style.opacity)-0.01;
	},
	fadeOut:function(){
		if(!this.fadeOutBoolean) return;
		if(this.img.style.opacity>=1){
			this.fadeOutBoolean=false;
			return;
		}
		this.img.style.opacity=parseFloat(this.img.style.opacity)+0.01;
	},
	update:function(){
		this.fadein();
		this.fadeOut();
	}
}