/* 
Sub-Nav scroll between sections
(maintenance, paving, concrete)  

*** NOT - finished work ***
*** finished work needs reworked for changing pic icons between categories ***

*/
$(function(){
	
	$('.page-sub-nav li, .page-sub-nav-floater li').click(function () {
		var sub_section = this.getAttribute('title');
		$('body,html').animate({
			scrollTop: $("#"+sub_section).offset().top
		}, 500);
		return false;
	});
	
	$('#floater-nav-top').click(function() {
		$('body,html').animate({scrollTop: 0}, 500);
		return false;
	});
});


/*
Sub-Nav: floating nav with scroll between categories
shows and hides as user scrolls past beginning of categories on page 
*/

$(document).scroll(function() {
  
  var y = $(this).scrollTop();
  if ( y >= $('.first-sub-content-block').offset().top ) {
    $('.page-sub-nav-floater').fadeIn(500);
  } else {
    $('.page-sub-nav-floater').fadeOut(500);
  }
});


