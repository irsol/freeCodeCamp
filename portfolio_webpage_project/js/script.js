$('#navbar li').click(function(){
	$(this).addClass('active').siblings().removeClass('active');
});

$('.parallax-window').parallax({
    naturalWidth: 1200
    
  });