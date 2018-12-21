var lis = document.getElementsByTagName("li");
var banner = document.getElementById("banner");


for(var i = 0; i < lis.length; i++){
	lis[i].index = i;
	lis[i].onmouseover = function(){
		banner.style.background = "url(images/" + this.index +".jpg)";
		console.log(i);
		for(var j = 0; j < lis.length; j++){
			lis[j].style.background = "";
		}
		this.style.background = "#63b504";
	}
}





