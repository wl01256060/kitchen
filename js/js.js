var swipeEnable = 0;

$("#gas").on("tap",function(){
	$("#gas").animate({
		left: "+=1600",
		top: "+=70",
	}, 1000, function(){
		$("#gas").fadeOut();
		$("#bag").animate({
			width: "+=20",
		},200, function(){
			$("#bag").animate({
				width: "-=20"
			})
		})		
	})
});

$("#bottle1").on("tap",function(){
	$("#bottle1").animate({
		left: "+=1530",
		top: "-=600",
	}, 1000, function(){
		$("#bottle1").fadeOut();
		$("#bag").animate({
			width: "+=15",
		},200, function(){
			$("#bag").animate({
				width: "-=15"
			})
		})		
	})
});

$("#bottle2").on("tap",function(){
	$("#bottle2").animate({
		left: "+=1630",
		top: "-=600",
	}, 1000, function(){
		$("#bottle2").fadeOut();
		$("#bag").animate({
			width: "+=15",
		},200, function(){
			$("#bag").animate({
				width: "-=15"
			})
		})		
	})
});


$("#right_arrow").on("tap", function(){
	$("#kitchen").animate({
		left: "-=2048"
	})
	$("#gas").animate({
		left: "-=2048"
	})
	$("#bottle1").animate({
		left: "-=2048"
	})
	$("#bottle2").animate({
		left: "-=2048"
	})
	$("#left_arrow").css("display","block")
	$("#left_arrow").animate({opacity: 0},500)
	$("#left_arrow").animate({opacity: 1},500)
	$("#right_arrow").css("display","none")
	swipeEnable =1 ;
})
$("#left_arrow").on("tap", function(){
	$("#kitchen").animate({
		left: "+=2048"
	})
	$("#gas").animate({
		left: "+=2048"
	})
	$("#bottle1").animate({
		left: "+=2048"
	})
	$("#bottle2").animate({
		left: "+=2048"
	})
	$("#right_arrow").css("display","block")
	$("#right_arrow").animate({opacity: 0},500)
	$("#right_arrow").animate({opacity: 1},500)
	$("#left_arrow").css("display","none")
	swipeEnable = 0;
})

$("img").on("swipeleft", function(){
	if(swipeEnable === 0){
		$("#kitchen").animate({
			left: "-=2048"
		})
		$("#gas").animate({
			left: "-=2048"
		})
		$("#bottle1").animate({
			left: "-=2048"
		})
		$("#bottle2").animate({
			left: "-=2048"
		})
		$("#left_arrow").css("display","block")
		$("#left_arrow").animate({opacity: 0},500)
		$("#left_arrow").animate({opacity: 1},500)
		$("#right_arrow").css("display","none")
		swipeEnable =1 ;
	}
})

$("img").on("swiperight", function(){
	if(swipeEnable ===1){
		$("#kitchen").animate({
			left: "+=2048"
		})
		$("#gas").animate({
			left: "+=2048"
		})
		$("#bottle1").animate({
			left: "+=2048"
		})
		$("#bottle2").animate({
			left: "+=2048"
		})
		$("#right_arrow").css("display","block")
		$("#right_arrow").animate({opacity: 0},500)
		$("#right_arrow").animate({opacity: 1},500)
		$("#left_arrow").css("display","none")
		swipeEnable = 0;
	}
})

