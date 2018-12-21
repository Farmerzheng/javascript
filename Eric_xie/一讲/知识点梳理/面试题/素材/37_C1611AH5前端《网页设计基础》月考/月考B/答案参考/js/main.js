var lis = document.querySelectorAll("#list li");
var banner2 = document.getElementById("banner2");

for(var i = 0; i < lis.length; i++){
	lis[i].index = i;
	lis[i].onmouseover = function(){
		banner2.style.background = "url(img/" + this.index +".jpg)";
		for(var j = 0; j < lis.length; j++){
			lis[j].style.background = "";
		}
		this.style.background = "#ff5f00";
	}
}