$(".divTop").hover(function(){
	$(".divTop img").attr("src", "img/home/home_pic_one_h.png");
	$(".divTop .desc").css({
		background: "#cfdb00",
	})
}, function(){
	$(".divTop img").attr("src", "img/home/home_pic_one.png");
	$(".divTop .desc").css({
		background: "#b0b0b0",
	})
})




$(".divCenter").hover(function(){
	$(".divCenter img").attr("src", "img/home/home_pic_two_h.png");
	$(".divCenter .desc").css({
		background: "#cfdb00",
	})
}, function(){
	$(".divCenter img").attr("src", "img/home/home_pic_two.jpg");
	$(".divCenter .desc").css({
		background: "#b0b0b0",
	})
})




$(".divBottom").hover(function(){
	$(".divBottom img").attr("src", "img/home/homes_pic_three_h.jpg");
	$(".divBottom .desc").css({
		background: "#cfdb00",
	})
}, function(){
	$(".divBottom img").attr("src", "img/home/homes_pic_three.jpg");
	$(".divBottom .desc").css({
		background: "#b0b0b0",
	})
})