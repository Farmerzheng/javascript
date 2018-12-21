/**
 * Created by DELL on 2017/7/10.
 */
function Plane(callBack) {
    //callBack回调，当删除飞机时告知
    this.callBack=callBack;
}
Plane.prototype={
    //飞机图片，保证飞机的独有，单例
    plane:null,
    //设置图片宽高初始值
    width:68,
    height:72,
    //创建飞机图片，如果已有飞机图片，就返回当前的飞机图片
    createPlane:function () {
        if(this.plane) return this.plane;
        this.plane=new Image();
        //地址是相对html的地址，不是相对JS的
        this.plane.src="image/feiji.png";
        //旋转图片的角度
        this.plane.style.transform="rotate(180deg)";
        // 设置图片为绝对定位
        this.plane.style.position="absolute";
        this.plane.style.top="0px"
        return this.plane;
    },
    // 缩放飞机图片的大小
    scale:function (scaleNum) {
        this.plane.style.width=this.width*scaleNum+"px";
        this.plane.style.height=this.height*scaleNum+"px";
    },
    // 向下移动飞机，并且当超出边界时删除该飞机，并调用回调
    update:function () {
        if(parseFloat(this.plane.style.top)>500){
            this.plane.remove();
            this.callBack(this);
        }
        this.plane.style.top=parseFloat(this.plane.style.top)+1+"px";
    },
    // 随机设置飞机图片的横向位置
    planeLeft:function () {
        this.plane.style.left=Math.random()*1000+"px";
    }
};