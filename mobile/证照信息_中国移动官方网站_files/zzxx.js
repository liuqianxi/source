$(function(){
	//浮层效果
	var layer = $('.layer');
	$('.xkxq .xqclose').click(function(){
		$('.xkxq,.layer').hide();
	})
	
	$('.more').each(function(x){
	     $(this).click(function(){
		   $('.xkxq').eq(x).show();
		   $('.layer').show();
		   $('.xkxqcon').scrollTop(0);
		});
	});
	
	$('#myTabContent a').each(function(x){
	    $(this).click(function(){
		   $('.xkxq').eq(x).show();
		   $('.layer').show();
		   $('.xkxqcon').scrollTop(0);
		});
	});
})