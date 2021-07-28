// JavaScript Document

	var imgWidth=620; 
	var $imgWrap;
	var imgNum;
	var currentIndex=0; 
	var $dot;
	var rightMove = false;
	
	$(document).ready(function(e) {
		
		$imgWrap=$("#banner_content");
		$imgNum=$imgWrap.children("li").size();

		$imgWrap.css("width", imgWidth*$imgNum); 	
		$dot=$("#banner_nav li button"); 
		
		$dot.bind("click",onClick);				
		$("#btn_next").bind("click",onNext);	
		$("#btn_prev").bind("click",onPrev);
		
		//$("#banner_nav li button").eq(0).click();
		$dot.eq(0).addClass("select");
		$dot.eq(0).append('<span class="offscreen">selected</span>');
		
		$('#banner_content li').focusout(function(e) {
            $(e.currentTarget).removeAttr("tabindex"); 
        });

    });
	function onClick(e){
		var overNum=$dot.index($(this)); 
		
		if(overNum > currentIndex) movePage('left', overNum);
		else if(overNum < currentIndex) movePage('right', overNum);
		else movePage('init', overNum);

		$dot.find('.offscreen').remove();
		$dot.eq(overNum).append('<span class="offscreen">selected</span>');
		
	}
	function onNext(){ 
	    rightMove = true;
		var newIndex=currentIndex+1;
		if(newIndex>=$imgNum){
			newIndex=0;				
		}
		
		movePage('left', newIndex);
	}
	
	function onPrev(){
	    rightMove = false;
		var newIndex=currentIndex-1;
		if(newIndex<0){
			newIndex=$imgNum-1; 			
		}
		
		movePage('right', newIndex);
	}
	
	
	function movePage(direction, newIndex) {
        var $container = $('#banner_content');
        var itemWidth = imgWidth;
        var delay = 300;

        $container.find('.content_item').removeAttr('tabindex');
        $container.find('.content_item').stop();
        
        
        if(direction === "left") {
            var leftPos = 0 - itemWidth;
            $container.find('.content_item').each(function(idx) {
                $(this).animate({'left' : leftPos + 'px'}, delay);
            });

            $container.find('.content_item').promise().done(function() {
                var cloneItem = $container.find('.content_item:first').clone();
                $container.find('.content_item').css('left', '0px');
                $container.find('.content_item').eq(newIndex).attr("tabindex", "-1").focus(); 
            });
        }
        if(direction === "right") {
            var cloneItem = $container.find('.content_item:last').clone();
            var leftPos = 0 - itemWidth;

            $container.find('.content_item').css('left', leftPos);

            $container.find('.content_item').each(function(idx) {
                $(this).animate({'left' : '0px'}, delay);
            });

            $container.find('.content_item').promise().done(function() {
                $container.find('.content_item').eq(newIndex).attr("tabindex", "-1").focus();  
            });
        }else{
            $container.find('.content_item').promise().done(function() {
                $container.find('.content_item').eq(newIndex).attr("tabindex", "-1").focus();  
            });
        }
        
        
        $dot.eq(currentIndex).removeClass("select"); 
		$dot.eq(newIndex).addClass("select");
		
		currentIndex=newIndex;
        
    }