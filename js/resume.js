
$(document).ready(function(){

	var speedOffset = 1,
		xPos = 0,
		speed900 = 0.8;
		
		$window = $(window),

		winW = $window.width(),
		wimH = $window.height();

		if(winW < 400){
			speed900 = 1;
		}



$('section').each(function(){


	var $bgobj = $(this),
	objPosTop = $bgobj.offset().top,
	yPos = 0;//$bgobj.position.y;
	console.log($bgobj+" "+yPos);
	
	$window.resize(function() {
		var	objPosTop = $bgobj.offset().top,
			wimH = $(window).height(),
			winW = $window.width();

		// if(winW < 900){
		// 	speed900 = 3;
		// }else{
		// 	speed900 = 1;

		// }

	});

	$window.scroll(function() {

		var objClass = $bgobj.attr("class"),
		windowPosY = $window.scrollTop();
		yPos = 0;

		if(
			windowPosY + $window.height() >=  objPosTop && windowPosY  <= objPosTop + $bgobj.height()

		){


			if( objClass == "overlay"  || objClass == "overlayR" ){
				yPos -= winW/4  ;//* speedOffset;
			}else{
				yPos -= winW/12 ;
			}

			yPos -= ( ( windowPosY - objPosTop ) / $bgobj.attr("data-speed") );
			
			var coords = xPos + 'vw '+ yPos + 'px';

			$bgobj.css("background-position", coords);
		}
	});
});
$('h2,table').addClass("scrollfade transparent");


$('.scrollfade').each(function(){

			var $obj = $(this),
				objPosTop = $obj.offset().top;
				objPosBottom = $obj.offset().bottom;

			
			// $window.resize(function (){
			// 	objPosTop = $obj.offset().top;
			// 	windowPosY = $window.scrollTop();

			// });

			$window.scroll(function() {

				var windowPosY = $window.scrollTop();				

				if(
					windowPosY + $window.height()/2 >=  objPosTop

					){

					console.log("hit");
					$obj.removeClass("scrollfade transparent");
				}
		});
});


$(".projects").on("mouseover","li",function(){


	var newImg = $(this).index();
	$(".img-over").addClass("transparent");
	$(".img-over").eq(newImg).removeClass("transparent");
});

// $(".projects a").hover(function(){
// 	var $this = $(this);
// 	bg = $this.data("pic");
// 	console.log(bg);


// //	$(".viewer").css("background","url("+bg+")");


// 	// $(".viewer").animate({
// 	// 	background: "url("+bg+")"
// 	// });


// });

$('.skill img').on("click", function(){

	$(this).siblings().fadeIn();

});

});