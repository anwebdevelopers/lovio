$(function() {
	//search
	$(document).ready(function(){
		$(".main-header__registration-search").click(function(){
			if($(".search input").is(":visible")){
				$(".search input").fadeOut(600);
			}else{
				$(".search input").fadeIn(600);
			}
		});
	});
	
	//form-list

	$(document).ready(function(){
		$(".transit__loaded-button-button").click(function(){
			if($(".transit__loaded-box ul").is(":visible")){
				$(".transit__loaded-box ul").fadeOut(600);
			}else{
				$(".transit__loaded-box ul").fadeIn(600);
			}
		});
	});

	
	//Выравнивание блоков по высоте
	$( document ).ready(function() {
		$(".news__item-small, .news__item-big").equalHeights();
		$(".widgets__item-small").equalHeights();
	});


	// popup

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

	// $("a[href=#login]").click(function() {
	// 	$("#login").val($(this).data("form"));
	// })

	//SVG Fallback
	// if(!Modernizr.svg) {
	// 	$("img[src*='svg']").attr("src", function() {
	// 		return $(this).attr("src").replace(".svg", ".png");
	// 	});
	// };

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("#callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".success").addClass("visible");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$(".success").removeClass("visible");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });


	function initialize() {     
		var myLatlng = new google.maps.LatLng(-34.397, 150.644);
		var myOptions = {
			zoom: 8,
			center: myLatlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions); 
	}
});
