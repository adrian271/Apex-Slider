$(document).ready(function() {
	var biggestwidth = 0;
	var biggestheight = 0;
	var attrcount = 0;
	$(window).bind("load", function() {
		$('.apex-slider').children().each(function() {
			if( $(this).width() == 0 ) {
				console.log($(this).width());
				if($(this).find('img')) {
					var newWidth = $(this).find('img').first().width();
					var newHeight = $(this).find('img').first().height();
					$(this).css({'width':newWidth,'height':newHeight});
				}
			}
		}); 
		if( $('.apex-slider').children().length > 1) {
			$('.apex-slider').children().each(function() {
				$(this).attr('slideindex',attrcount).addClass('apex-slider-child');
				attrcount++;
				if($(this).width() > biggestwidth) { 
					biggestwidth = $(this).width();
				}
				if($(this).height() > biggestheight) { 
					biggestheight = $(this).height();
				}
			});	
			$('.apex-slider').css({'height':biggestheight+'px','width':biggestwidth+'px'}).addClass('apex-slider-relative-position');
			$('.apex-slider').children().addClass('apex-slider-absolute-position apex-slider-slides');
			$('.apex-slider').children().first().addClass('active-slide');

			setInterval(function() {
				var currentSlideNum = $('.active-slide').attr('slideindex');
				var slideIndex = parseInt(currentSlideNum);
				var nextSlideIndex = (slideIndex + 1) % $('.apex-slider').children().length;
				$('.apex-slider-child[slideindex='+nextSlideIndex+']').addClass('next-slide').show();
				$('.active-slide').fadeOut('slow',function() {	
					$('.active-slide').removeClass('active-slide')			
					$('.next-slide').addClass('active-slide').removeClass('next-slide');
				});
			}, 5000);
		}
	});
});