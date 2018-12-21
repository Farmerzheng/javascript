$(function() {
	$(".waitWrap .wait div").on("click", function(){
		var i = $(this).children("p:nth-of-type(2)").text()
//		console.log(i);
	$(".showWrap #outshow").hide();
	$(".showWrap iframe").attr("src", i).show();
	
	})
})