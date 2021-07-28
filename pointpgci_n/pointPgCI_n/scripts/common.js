$(function(){


    /* header css */
    $(window).scroll(function(){
        if( $(this).scrollTop() >1 ){
            $('.header').addClass('fixed');
        }else{
            $('.header').removeClass('fixed');
        }
    });


    /* 약관 전체선택 */
    var $agreeAll = $('#agreeAll');
    $agreeAll.change(function () {
        var $this = $(this);
        var checked = $this.prop('checked'); // checked 문자열 참조(true, false)
        // console.log(checked);
        $('input[name="agree"]').prop('checked', checked);
    });

    var boxes = $('input[name="agree"]');
    boxes.change(function () {
        var boxLength = boxes.length;
        // 체크된 체크박스 갯수를 확인하기 위해 :checked 필터를 사용하여 체크박스만 선택한 후 length 프로퍼티를 확인
        var checkedLength = $('input[name="agree"]:checked').length;
        var selectAll = (boxLength == checkedLength);

        $agreeAll.prop('checked', selectAll);

    });


    /* 휴대폰 본인인증 */

    // 성별선택 z-index 
    $('.cert-radio').change(function(){
        if( $(this).is(':checked') ){
            $('.cert-radio').parent().css('z-index',' 0');
            $(this).parent().css('z-index',' 10');
        }
    });


    /* 포인트 조회 사용 */

    // 포인트 사용 내역 상세보기
    $(document).ready(function(e) {

        var $toggleItems = $('.list-accordion dt > a');
        var $lastToggleItem = null;
    
        $toggleItems.off('click').on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
    
            var $this = $(this).closest('dt');
            if( $this.is($lastToggleItem) && $this.hasClass("is-opened") ) {
                $this.removeClass("is-opened");
                return;
            }
    
            if( $lastToggleItem !== null ) {
                $lastToggleItem.removeClass("is-opened");
            }
    
            $this.addClass('is-opened');
            $lastToggleItem = $this;
        });
    
    
        $('.list-accordion dt > a').click(function(){
         $('html, body').animate( { scrollTop : 135 }, 'slow');
         return false;
        });
    
        $( '.btn-top' ).click( function() {
            $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
            return false;
        });
    
    });

    // common - 포인트 입력 시 숫자만 입력 가능, 3자리 이상 입력 시 콤마 자동 생성
    $(document).on("keypress", ".usepoint-input", function () {
        if  ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105) && (event.keyCode != 8) && (event.keyCode != 46))
            event.returnValue = false;    
    });
        
    $(document).on("keyup", ".usepoint-input", function () {
        var $this = $(this);
        var num = $this.val().replace(/[^0-9]/g, "");
        var parts = num.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        $this.val(parts.join("."));  
    });        

    // 본인 인증 부분에서 숫자만 입력해야할 경우 input 한글 입력 막기
    $(".not-kor").keyup(function(e) { 
        if (!(e.keyCode >=37 && e.keyCode<=40)) {
            var v = $(this).val();
            $(this).val(v.replace(/[^a-z0-9]/gi,''));
        }
    });

    // input 엔터 입력 시 submit 막기
    $('.usepoint-input').keydown(function(){
        if (event.keyCode === 13) {
            event.preventDefault();
        }
    });    

});

// 카드사별 안내 정보 더 보기 팝업  
$(document).ready(function(e) {
    
	// modal
	$('.modal-open').click(function(){
        $('.modal-wrap').css({'display':'block'});
        $('body').css({'overflow': ''});
		return false;               
	});
	$('.modal-close').click(function(){
		$(this).parents('.modal-wrap').hide();
        $('body').css({'overflow': ''});
		return false;
    });
    
});

    //$('.modal-open').click(function(){
    //    var modalId = $(this).attr('data-modal');
    //    document.getElementById(modalId).style.display = "block";
    //    var modalID = 
    //    $('body').css({'overflow': 'hidden'});
    //    return false;
    //});
    //$('.modal-close').click(function(){
    //    $(this).parents('.modal-wrap').hide();
    //    $('body').css({'overflow': ''});
    //    return false;
    //});

// 카드사별 안내 정보 더 보기 팝업 
function dEI(elementID){
    return document.getElementById(elementID);
}

function openLayer(IdName){
   var pop = dEI(IdName);
    pop.style.display = "block";
}

function closeLayer( IdName ){
    var pop = dEI(IdName);
    pop.style.display = "none";
}
