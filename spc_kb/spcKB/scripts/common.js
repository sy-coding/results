// top scroll
$(window).scroll(function () {
	if ($(this).scrollTop() > 100) {
		$('.top').fadeIn();
	} else {
		$('.top').fadeOut();
	}
});
$(document).on('click', 'button.top', function () {
	$('html, body').animate({
		scrollTop: 0
	}, 400);
	return false;
});


$(function(){

    // slidemenu
    $('#asideOpen').click(function(){
        $('#asidebar').stop().animate({ left: "0%"}, 300);
    });
    $('#asideClose').click(function(){
        $('#asidebar').stop().animate({ left: "-120%"}, 300);
	});
	

	// mainvisual
	$('.mainvisual').slick({
		dots: true, // 2개 이상시 true
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		adaptiveHeight: true
	});

	
	// 200622 포샵 이벤트 slide 추가
	$('#eventSlide').on('init', function(event, slick) {
		$(this).append('<div class="slick-counter"><span class="current"></span> / <span class="total"></span></div>');
		$('.current').text(slick.currentSlide + 1);
		$('.total').text(slick.slideCount);
	})
	.slick({
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		autoplay: true,
		arrows: false
	})
	.on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.current').text(nextSlide + 1);
	});	


	// barcode modal
	$('.openModalBarcode').on('click', function(){
		var target = "#" + $(this).attr('data-target');
		$(target).css('display', 'block');
	});
	$('#closeModalBarcode').on('click', function(){
		$(this).parents('.barcode-modal-wrap').hide();
	});
    

});