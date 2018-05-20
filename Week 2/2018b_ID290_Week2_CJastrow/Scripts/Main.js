var s = skrollr.init();

$(window).scroll(function() {
    var height = $(document).height() - $(window).height();
var scroll = $(window).scrollTop();  
      var audioElm = $('#engineRev').get(0);
    audioElm.play();
    audioElm.volume = .4;
});

$("#key").click(function(){
	$("#popUp").css('display','none');
	$("body, html").scrollTop(0);
});