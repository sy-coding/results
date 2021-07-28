	
	// 메인페이지 롤링배너 슬라이드
	$(window.document).ready(function(e){
		var slickSettings = {
			infinite: true,
			dots: true,
			autoplay: true,
			autoplaySpeed: 2000,
			slidesToShow: 1,
			slidesToScroll: 1,
			slide: '.slide-item'
		}

		var $slickElement = $('.mainslider-wrap .mainslider');
		$slickElement.slick(slickSettings);
	});

$(function () {

	// 메인페이지 롤링배너 멈춤/재생
	$('.mainslider-pause').on('click', function () {
		$('.mainslider-pause').hide();
		$('.mainslider-play').show();
		$('.mainslider').slick('slickPause');
	});
	$('.mainslider-play').on('click', function () {
		$('.mainslider-pause').show();
		$('.mainslider-play').hide();
		$('.mainslider').slick('slickPlay');
	});

	// 서비스 롤링
	$('.service-slider').slick({
		dots: true,
		arrows: false,
		infinite: true,
		autoplay: true,
		adaptiveHeight: true
	});
	$('.service-benefit').slick({
		dots: true,
		arrows: false,
		infinite: true,
		autoplay: false
		//,adaptiveHeight: true
	});
	$('.service-slider-join').slick({
		dots: true,
		arrows: false,
		infinite: true,
		autoplay: true,
		asNavFor: '.service-slider-nav',
		adaptiveHeight: true
	});
	$('.service-slider-nav').slick({
		dots: false,
		arrows: false,
		asNavFor: '.service-slider-join',
		speed: 0
	});	

	// 매거진 롤링
	$('.magazine-slider').slick({
		dots: false,
		infinite: false,
		autoplay: false,
		rtl: true
	});
	$('.magazine-slider').on('afterChange', function (event, slick, currentSlide) {
		if (currentSlide === 2) {
			$('.slick-next').addClass('hidden');
		} else {
			$('.slick-next').removeClass('hidden');
		}
		if (currentSlide === 0) {
			$('.slick-prev').removeClass('show');
		} else {
			$('.slick-prev').addClass('show');
		}
	});


	// GMP Intro (daily swiper)
	$('.gmp-center').slick({
		centerMode: true,
		centerPadding: '10px',
		infinite: true,
		slidesToShow: 5,
		speed: 500,
		variableWidth: false,
		arrows: false,
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '10px',
				slidesToShow: 5
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '10px',
				slidesToShow: 5
			  }
			}
		  ]		
	});
	$('.gmp-center').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		console.log('beforeChange', currentSlide, nextSlide);
	});
	$('.gmp-center').on('afterChange', function(event, slick, currentSlide){
		console.log('afterChange', currentSlide);
	});

	// GMP 프리미엄 서비스 이용하기 Message 닫기
	$('#proposal_msg_close').click(function () {
		$('.proposal_message').hide();
	});	


	// 네비게이션 
	$('.nav>li>a').on('click', function () {
		$('.nav>li>a').removeClass('active');
		$(this).addClass('active');
	});

	// accordion_접힌 상태에서 클릭하면 펼쳐짐 (클릭한 것만 활성화)	
    var $toggleItems = $('.accordion-title');
    var $lastToggleItem = null;	
	
	$toggleItems.off('click').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
	
	  	var $this = $(this).closest('.accordion-title');
		if( $this.is($lastToggleItem) && $this.hasClass("active") ) {
			$this.removeClass("active");
			$this.next().removeClass('show');
			$this.next().slideUp(200);			
            return;
		} else {
			$this.addClass('active');
			$this.parent().parent().find('.accordion-content').removeClass('show');
			$this.parent().parent().find('.accordion-content').slideUp(200);
			$this.next().toggleClass('show');
			$this.next().slideToggle(200);
		}

        if( $lastToggleItem !== null ) {
            $lastToggleItem.removeClass("active");
		}

        $this.addClass('active');
        $lastToggleItem = $this;
 	});

	// accordion_펼침 상태에서 클릭하면 접힘
	$('.accordion-content2').show();
	$('.accordion-title2').on("click", function () {
		// 클릭했을 때
		$this = $(this);
		$target = $this.next();

		if (!$this.hasClass('active')) {
			$this.addClass('active');
			$target.addClass('active').slideUp(200);
		} else {
			$this.removeClass('active');
			$target.removeClass('active').slideDown(200);
		}
	});
	$('.accordion-title2').keypress(function (event) {
		//엔터키 눌렀을 때
		if (event.which == 13) {
			$this = $(this);
			$target = $this.next();

			if (!$this.hasClass('active')) {
				$this.addClass('active');
				$target.addClass('active').slideUp(200);
			} else {
				$this.removeClass('active');
				$target.removeClass('active').slideDown(200);
			}
		}
	});	

	// tab
	$('ul.tab-nav li a').click(function () {
		var $thisMenu = $(this).parent();
		var activeTab = $(this).attr('data-tab');
		$('ul.tab-nav li').removeClass('current');
		$('.tab-content').removeClass('current');
		$thisMenu.addClass('current');
		$('#' + activeTab).addClass('current');
	});

	// ========================================= 200907 ISMS 약관 분리 =========================================

	// 약관 - 세부약관 보기
	$('.agree-view-more').click(function () {
		var $this = $(this);
		var $icon = $this.find('.icon-agree');
		var target = $this.attr('data-target');
		var $view = $('.toggle-view').attr('data-target', target);
		$icon.toggleClass('icon-agree-more-close').toggleClass('icon-agree-more');
		$view.toggle(200);
	});

	// Step1 본인인증) 약관 체크박스 전체 동의 선택/해제
	var $essentialAll = $('#essentialAll');
	$essentialAll.on('click', function(e) {
		var $checkboxes = $('.join-agree-wrap2 .join-agree .form-text input[name="agree"]');
		if( $(this).is(":checked") ) {
			$checkboxes.prop("checked", true);
			$('.join-agree-wrap2 .join-agree').css({'display':'none'});
			$('.join-agree-wrap2 .terms-list-wrap').css({'background':'#effcf8'});
			$('.join-agree-wrap2 .terms-list-wrap').css({'border':'none'});
			$('.step1b').css({'display':'block'}); // 기본정보 입력부분 표시
			window.scrollTo({top:320, left:0, behavior:'smooth'}); // 기본정보 입력부분으로 스크롤 이동
		} else {
			$checkboxes.prop("checked", false);
			$('.join-agree-wrap2 .join-agree').css({'display':'block'});
			$('.join-agree-wrap2 .terms-list-wrap').css({'background':'#FFF'});
			$('.join-agree-wrap2 .terms-list-wrap').css({'border':'1px solid #d8d8d8'});
			//$('.step1b').css({'display':'none'});
			window.scrollTo({top:0, left:0, behavior:'smooth'}); // 해제 시 상단 스크롤 이동		
		}
	});

	// Step1 본인인증) 약관 체크박스 개별 선택 시 전체 동의
	$essentialAll.each(function(e) {
		var $localAll = $(this);
		var $checkboxes = $('.join-agree-wrap2 .join-agree .form-text input[name="agree"]');
		$checkboxes.on('click', function(e) {
			if($checkboxes.filter(':checked').length == $checkboxes.length) {
				$localAll.prop('checked', true);
				$('.join-agree-wrap2 .join-agree').css({'display':'none'});
				$('.join-agree-wrap2 .terms-list-wrap').css({'background':'#effcf8'});
				$('.join-agree-wrap2 .terms-list-wrap').css({'border':'none'});
				$('.step1b').css({'display':'block'}); // 기본정보 입력부분 표시
				window.scrollTo({top:320, left:0, behavior:'smooth'}); // 기본정보 입력부분으로 스크롤 이동
			} else {
				$localAll.prop('checked', false);	
				$('.join-agree-wrap2 .join-agree').css({'display':'block'});
				$('.join-agree-wrap2 .terms-list-wrap').css({'background':'#FFF'});
				$('.join-agree-wrap2 .terms-list-wrap').css({'border':'1px solid #d8d8d8'});
				//$('.step1b').css({'display':'none'});
				window.scrollTo({top:0, left:0, behavior:'smooth'}); // 해제 시 상단 스크롤 이동						
			}
		});
	});		

    // Step2 약관동의) 약관 체크박스 전체 동의 선택/해제
	var $joinAll = $('#joinAll');
	$joinAll.on('click', function(e) {
		var $checkboxes = $('.join-agree-wrap2 .join-agree .form-text input[name="agree-join"]');
		if( $(this).is(":checked") ) {
			$checkboxes.prop("checked", true);
			$('.join-agree-wrap2 .step2a .join-agree').css({'display':'none'});
			$('.join-agree-wrap2 .step2a').css({'background':'#effcf8'});
			$('.join-agree-wrap2 .step2a').css({'border':'none'});
			$('.button-middle').removeClass('gray'); // 가입하기 버튼 활성화 색상 표시
			$('.join-step-indicator ul li:nth-child(2)').removeClass('current'); // step 단계 2단계 비활성화
			$('.join-step-indicator ul li:nth-child(2)').addClass('done'); // step 단계 2단계 완료 처리
			$('.join-step-indicator ul li:nth-child(3)').addClass('current'); // step 단계 3단계 활성화

		} else {
			$checkboxes.prop("checked", false);
			$('.join-agree-wrap2 .step2a .join-agree').css({'display':'block'});
			$('.join-agree-wrap2 .step2a').css({'background':'#FFF'});
			$('.join-agree-wrap2 .step2a').css({'border':'1px solid #d8d8d8'});	
			$('.button-middle').addClass('gray'); // 가입하기 버튼 비활성화 색상
			$('.join-step-indicator ul li:nth-child(2)').addClass('current'); // step 단계 2단계 활성화
			$('.join-step-indicator ul li:nth-child(2)').removeClass('done');
			$('.join-step-indicator ul li:nth-child(3)').removeClass('current');			
		}
	});	

	$joinAll.each(function(e) {
		var $local = $(this);
		var $checkboxes = $('.join-agree-wrap2 .join-agree .form-text input[name="agree-join"]');
		$checkboxes.on('click', function(e) {
			if($checkboxes.filter(':checked').length == $checkboxes.length) {
				$local.prop('checked', true);
				$('.join-agree-wrap2 .step2a .join-agree').css({'display':'none'});
				$('.join-agree-wrap2 .step2a').css({'background':'#effcf8'});
				$('.join-agree-wrap2 .step2a').css({'border':'none'});
				$('.button-middle').removeClass('gray'); // 가입하기 버튼 활성화 색상 표시
			} else {
				$local.prop('checked', false);
				$('.join-agree-wrap2 .step2a .join-agree').css({'display':'block'});
				$('.join-agree-wrap2 .step2a').css({'background':'#FFF'});
				$('.join-agree-wrap2 .step2a').css({'border':'1px solid #d8d8d8'});	
				$('.button-middle').addClass('gray'); // 가입하기 버튼 비활성화 색상	 								
			}
		});
	});	
	
    // Step2 약관동의) 약관 체크박스 개별 선택 시 전체 동의
	var $joinSelectAll = $('#joinSelectAll');
	$joinSelectAll.on('click', function(e) {
		var $checkboxes = $('.join-agree-wrap2 .join-agree .form-text input[name="agree-joinselect"]');
		if( $(this).is(":checked") ) {
			$checkboxes.prop("checked", true);
			$('.join-agree-wrap2 .step2b .join-agree').css({'display':'none'});
			$('.join-agree-wrap2 .step2b').css({'background':'#effcf8'});
			$('.join-agree-wrap2 .step2b').css({'border':'none'});
		} else {
			$checkboxes.prop("checked", false);
			$('.join-agree-wrap2 .step2b .join-agree').css({'display':'block'});
			$('.join-agree-wrap2 .step2b').css({'background':'#FFF'});
			$('.join-agree-wrap2 .step2b').css({'border':'1px solid #d8d8d8'});	
		}
	});	

	$joinSelectAll.each(function(e) {
		var $local = $(this);
		var $checkboxes = $('.join-agree-wrap2 .join-agree .form-text input[name="agree-joinselect"]');
		$checkboxes.on('click', function(e) {
			if($checkboxes.filter(':checked').length == $checkboxes.length) {
				$local.prop('checked', true);
				$('.join-agree-wrap2 .step2b .join-agree').css({'display':'none'});
				$('.join-agree-wrap2 .step2b').css({'background':'#effcf8'});
				$('.join-agree-wrap2 .step2b').css({'border':'none'});
			} else {
				$local.prop('checked', false);
				$('.join-agree-wrap2 .step2b .join-agree').css({'display':'block'});
				$('.join-agree-wrap2 .step2b').css({'background':'#FFF'});
				$('.join-agree-wrap2 .step2b').css({'border':'1px solid #d8d8d8'});										
			}
		});
	});		




    //var boxes2 = $('.form-text2 input[name="agree"]');
    //boxes2.change(function () {
     //   var box2Length = boxes2.length;
    //    var checkedLength2 = $('.form-text2 input[name="agree"]:checked').length;
     //   var selectAll2 = (box2Length == checkedLength2);

     //   $selectiveAll.prop('checked', selectAll2);
    //}); 

	
	// ========================================= 200723 약관 체크 수정 =========================================

	// 방문택배 예약 쿠폰 발급
	$('.coupon-issue').on('click', function(){
		if ( $(this).prop('click') ){
			$('.coupon-issue').hide();
			$('.coupon-issued').show();
		} else {
			$('.coupon-issued').show();
			$('.coupon-issue').hide();			
		}
	});	
	
    // 배송조회 상세보기
    //$('.beefup-body').hide();
    //$('.beefup-head').click(function() {
    //    $(this).next('.beefup-body').slideToggle();
	//});	
});

	// 오토패스워드 안내 페이지
	$(document).ready(function () {
		
		var i;
		var $btn_li = $('.tabBtns >li');
		var $box_div = $('.box>.tab');

		$btn_li.on('click', function (e) {
			e.preventDefault();

			i = $(this).index();
			activeBtn();
			activePanel();

		});

		function activeBtn() {
			$btn_li.removeClass('active');
			$btn_li.eq(i).addClass('active');
		};

		function activePanel() {
			$box_div.removeClass('on');
			$box_div.eq(i).addClass('on')
			var step0Hei = $('.step-0').outerHeight();
			var isActive = $box_div.hasClass('on');
			
			if (isActive) {
				$("HTML, BODY").animate({
					scrollTop: step0Hei
				}, 300);
			}
		}

		$( '.btn-top' ).click( function() {
			$( 'html, body' ).animate( { scrollTop : 0 }, 300 );
			return false;
		});

	});