(function Ball(){
    var ballStyle={
        width:"20px",
        height:"20px",
        borderRadius: "20px",
        backgroundColor: "bisque",
        position: "absolute"
    };
    var _y=0;
    var speed=5;
    var speedY=0.5;
    function Ball() {
        this.ball=null;
    }
    Ball.prototype={
        createBall:function (width,height,bgColor) {
            if(this.ball) return this.ball;
            this.ball=ElementUtil.createDiv("",ballStyle);
            if(width){
                this.ball.style.width=width+"px";
            }
            if(height){
                this.ball.style.height=height+"px";
            }
            if(bgColor){
                this.ball.style.backgroundColor=bgColor;
            }
            return this.ball;
        },
        set x(value){
            this.ball.style.left=value+"px";
        },
        set y(value){
            this.ball.style.top=value+"px";
            _y=value;
        },
        get y(){
            return _y;
        },
        update:function () {
            if(speedY>3) return;
            speed+=speedY;
            if(speed==10){
                speed=10;
            }
            this.y+=speed;
            if(this.y>500){
                speed=-speed;
               speedY+=0.1;
            }

        }
    };
    window.Ball=Ball;
})();
