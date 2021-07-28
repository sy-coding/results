// JavaScript Document

	var imgWidth=620; 
	var $imgWrap;
	var imgNum;
	var currentIndex=0; 
	var $dot;
	
	$(document).ready(function(e) {
		
		$imgWrap=$("#banner_content");
		$imgNum=$imgWrap.children("li").size();

		$imgWrap.css("width", imgWidth*$imgNum); 	
		$dot=$("#banner_nav li button"); 
		showDot(0);
		
		$dot.bind("click",onClick);				
		$("#btn_next").bind("click",onNext);	
		$("#btn_prev").bind("click",onPrev);

    });

	function showDot(newIndex){
		$dot.eq(currentIndex).removeClass("select"); 
		$dot.eq(newIndex).addClass("select");
	}
	
	function onClick(){
		var overNum=$dot.index($(this)); 
		onSlide(overNum); 	
	}
		
	function onSlide(newIndex){
		var newPosition=-newIndex*imgWidth 
		$("#banner_content:not(:animated)").animate({left:newPosition},500,"easeOutCubic"); 
		showDot(newIndex);
		currentIndex=newIndex;
	}	
	
	function onNext(){ 
		var newIndex=currentIndex+1;
		if(newIndex>=$imgNum){
			newIndex=0;				
		}
		
		onSlide(newIndex); 
	}
	
	function onPrev(){
		var newIndex=currentIndex-1;
		if(newIndex<0){
			newIndex=$imgNum-1; 			
		}
		
		onSlide(newIndex);
	}