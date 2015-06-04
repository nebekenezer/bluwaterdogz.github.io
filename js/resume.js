
$(document).ready(function(){

	var speedOffset = 1,
		xPos = 0,
		speed900 = 0.8;
		
		$window = $(window),

		winW = $window.width(),
		wimH = $(window).height();

		if(winW < 400){
			speed900 = 0.001;
		}



$('section').each(function(){


	var $bgobj = $(this),
	objPosTop = $bgobj.offset().top,
	yPos = 0;//$bgobj.position.y;

	
	$window.resize(function() {
		var	objPosTop = $bgobj.offset().top,
			wimH = $(window).height(),
			winW = $window.width();

		if(winW < 400){
			speed900 = 0.3;
		}else{
			speed900 = 1;

		}

	});

	$window.scroll(function() {

		var objClass = $bgobj.attr("class"),
		windowPosY = $window.scrollTop(),
		yPos = 0;
	console.log($bgobj+" "+yPos);
		if(
			windowPosY + $window.height() >=  objPosTop && windowPosY  <= objPosTop + $bgobj.height()

		){


			if( objClass == "overlay"  || objClass == "overlayR" ){
				yPos -= winW/4  * speedOffset;
			}else{
				yPos -= winW/12 ;
			}

			yPos -= ( ( windowPosY - objPosTop ) / $bgobj.attr("data-speed"));
			
			var coords = xPos + 'vw '+ yPos + 'px';

			$bgobj.css("background-position", coords);
		}
	});
});


$('#divider4').each(function(){


			var $bgobj = $(this);
			var objPosTop = $bgobj.offset().top;

			$window.scroll(function() {
				var objClass = $bgobj.attr("class");
				var windowPosY = $window.scrollTop();

				if(
			windowPosY + $window.height() >=  objPosTop && windowPosY  <= objPosTop + $bgobj.height()
					){
					console.log("made it");
					console.log(windowPosY + $window.height());
					console.log( objPosTop);

				}
		});
	});



});

