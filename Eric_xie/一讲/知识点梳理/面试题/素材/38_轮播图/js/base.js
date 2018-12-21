var box = document.getElementById('box');
	var left = document.getElementById('left');
	var right = document.getElementById('right');

	var arr = ['url(imgs/01.jpg)','url(imgs/02.jpg)','url(imgs/03.jpg)','url(imgs/04.jpg)'];
	var index = 0;

	//切换图片
	right.onclick = function(){
		index++;   // 1
		if(index > 3){
			index = 0;
		}
		box.style.backgroundImage = arr[index];

	}


	left.onclick = function(){
		index--;
		if(index < 0){
			index = 3;
		}
		box.style.backgroundImage = arr[index];
	}