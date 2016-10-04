jQuery.fn.mailto=function(){return this.each(function(){var email=$(this).html().replace(/\s*\(.+\)\s*/,"@");$(this).before('<a href="mailto:'+ email+'" rel="nofollow" title="Email '+ email+'">'+ email+'</a>').remove();});};

// Использование
//HTML
// Стандартный но с этим вариантом есть проблемы
//<a href="user(at)domain.ru" class="mailto">user(at)domain.ru</a> // с этим вариантом есть проблемы
// или
//<a class="mailto">user(at)domain.ru</a>

//Вызов
//if ( $("a.mailto").length > 0 ) {
	// $.getScript('/bitrix/templates/vpp/js/jquery.mailto.js',function(){ 
	// $('a.mailto').mailto();
//});
//}