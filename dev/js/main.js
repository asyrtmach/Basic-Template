
$(function() {
		// target _blank
		$("a[href^=http]").click(function() {
			$(this).attr("target","_blank")
			});
			
		// Высота сайта на 100% при недостатке контента
		var windowMon = $(window).height();
		var heightPage = $("#wrap").height();
		if(windowMon > heightPage)
		{
			//$("#wrap").css({minHeight:windowMon-67});
		}


		$("html").niceScroll({
			cursorcolor: "#777",
			cursoropacitymax: .7,
			cursorwidth: "9",
			cursorborder: "none",
			cursorborderradius: "10px",
			background: "#ccc",
			zindex: "9999999",
			bouncescroll: true,
			touchbehavior: !1
		})

		// Маска поля
		$("#phoneInput").inputmask("+7(999)999-99-99");

		// Подмена mailto
		$('a.mailto').mailto();


});