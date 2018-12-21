//Hit 为一个静态类 ,静态类不用创建对象，直接可以调用静态类上面的方法
// "||" 前面是这个静态类名，这样写的好处是什么？   
// Math.random()
var Hit = Hit || (function(){
	return {
			test:function(obj1,obj2){

	           var obj1Pos = obj1.getBoundingClientRect();
	           var obj2Pos = obj2.getBoundingClientRect();

	           if( obj1Pos.left <= obj2Pos.left && obj1Pos.left+obj1Pos.width >obj2Pos.left && obj1Pos.top < obj2Pos.top && obj1Pos.bottom >= obj2Pos.top ){
                 return true;
	           }else if(obj1Pos.left<obj2Pos.left&&obj1Pos.right>obj2Pos.left&& obj1Pos.top >= obj2Pos.top && obj1Pos.top < obj2Pos.bottom){
                 return true;
	           }else if(obj1Pos.left <= obj2Pos.right&&obj1Pos.left >= obj2Pos.left&& obj1Pos.top < obj2Pos.top && obj1Pos.bottom >= obj2Pos.top  ){
                 return true;
	           }else if(obj1Pos.left <= obj2Pos.right &&obj1Pos.left >= obj2Pos.left && obj1Pos.top >= obj2Pos.top && obj1Pos.top < obj2Pos.bottom  ){
                 return true;
	           }else{
	           	return false;
	           }
	       }
	    }
})();