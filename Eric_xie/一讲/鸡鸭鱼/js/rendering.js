$(function() {
	$(".wait div img:nth-of-type(2)").hover(function() {
		$(this).attr("src", "img/3d/play_small_b.png")
	}, function() {
		$(this).attr("src", "img/3d/play_small_h-1.png")
	})
})