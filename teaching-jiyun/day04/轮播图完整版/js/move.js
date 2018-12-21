  /*
          obj  需要移动的盒子
          beginTime  开始的时间 ，一般为零
          beginPos  开始移动的位置
          iTarget  终止的位置
          duration  动画的执行时间
        */
		function move(obj,beginTime,beginPos,iTarget,duration){

		   var animation;
		 //防止重复点击加速 
			cancelAnimationFrame(animation);
            
            //让浏览器刷新的时候执行step函数
			animation = requestAnimationFrame(step);
             
             var t = beginTime;//起始时间一般为零
	 	     var d = duration;//终止时间越小速度越快
             var b = beginPos;//起始位置
	 	     var c = iTarget - beginPos;//位置的增加量

		 function step(){  	 	  

              t++;//时间不断增加
            
              var x;

	 	     if(t < d){  //没有到达终点的判断条件           
                //对应t时间物体的位置
                 // 1s  10m
                 // 2s  15m
                 // 3s  22m
                 // 4s  30m
		 	    x = Tween.Cubic.easeOut(t,b,c,d);

	             // console.log(x);

	             obj.style.left = x +"px";
	 	     }

	 	       animation = requestAnimationFrame(step);

		 	  if(t == d){
		 	  	  //防止重复点击加速 
		 	  	 obj.style.left = iTarget +"px";

		 	  	// console.log(iTarget)

				cancelAnimationFrame(animation);
		 	  }

        
		 }
		}
         