/* Load basic 'Services' sidebar???

(maintenance, paving, concrete, 
home? finished work?)

*/



/* 
Load Footer 
*/
$(function(){ 
	/* pull footer html */
	$(".footer-container .wrapper").load("footer.html");
	
	/* scroll to top function */
	$('#up-top').click(function () {
		$('body,html').animate({scrollTop: 0}, 500);
		return false;
	});
});



