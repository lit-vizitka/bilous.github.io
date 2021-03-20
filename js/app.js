$(function() {

	var header = $("#header"),
		introH = $("#intro").innerHeight();
		scrollOfset = $(window).scrollTop();

	/*Fixed header*/
	checkScroll(scrollOfset);

	$(window).on("scroll", function(){
		scrollOfset = $(this).scrollTop();

		checkScroll(scrollOfset);

	});


	function checkScroll() {
		if ( scrollOfset >= introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}

	/*Smooth scrol*/
	$("[data-scroll]").on("click", function(event){
		event.preventDefault();

		var blockId = $(this).data('scroll'),
			blockOffset = $(blockId).offset().top;

		$('html, body').animate({
			scrollTop: blockOffset
		}, 500);
	});


	/*nav-toggle*/
	$("#nav-toggle").on("click", function(event) {
		event.preventDefault();

		$(this).toggleClass("active");
		$("#nav").toggleClass("active");
	});

})