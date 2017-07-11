$(document).ready(function() {
		$(".tab").hide();
		$("#mainNav li:first a").addClass("active").show();
		$(".tab:first").show();
		$("#mainNav li a").click(function() {
			$("#mainNav li a").removeClass("active").css('background-image', 'url(presentation/images/bg_mainNav.jpg)');
			$("#mainNav li a.last").css('background-image', 'none');
			Cufon.replace('#mainNav li a', { color: '#a7aaaf', textShadow: '#fff 0.7px 0.7px' } );
			$(this).parent().prev().children().css('background-image', 'none');
			$(this).addClass("active").css('background-image', 'url(presentation/images/bg_mainNav_active.png)');
			Cufon.replace(this, { color: '#4472ab', textShadow: '#fff 0.7px 0.7px' } );
			$(".tab").hide();
			var activeTab = $(this.hash);
			$(activeTab).fadeIn();
			return false;
		});
	});