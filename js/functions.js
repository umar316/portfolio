$(document).ready(function(){
	
	$(".primary-nav ul li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	});
	
	$(".menu-toggle,.close-btn").click(function(){
		
		$(".primary-sidebar").toggleClass("hidden");
		$(".dashboard-conatainer").toggleClass("hidden");
		$(".logo").toggleClass("hidden");
		$(".primary-nav").toggleClass("hidden");
	
	});
	
	// Funds Tranfer (Withdrawal Process)
	
	$(".btn-next").click(function(){
		$(".wp-view").children().toggleClass("active");
		$(this).text("done");
		$(".btn-prev").toggleClass("btn-disabled");
		$(".ac-opt").toggleClass("ac-opt-disabled");
		$(".ac-opt:last-child").toggleClass("active");
		$(".ac-opt:first-child").toggleClass("ac-opt-done");
	});
	
	// Funds Tranfer (Withdrawal Process)
	
	$(".btn-prev").click(function(){
		$(".wp-view").children().toggleClass("active");
		$(".btn-next").text("next");
		$(".btn-prev").toggleClass("btn-disabled");
		$(".ac-opt").toggleClass("ac-opt-disabled");
		$(".ac-opt:last-child").toggleClass("active");
		$(".ac-opt:first-child").toggleClass("ac-opt-done");
	});
	

});