jQuery.fn.mailto=function(){return this.each(function(){var email=$(this).html().replace(/\s*\(.+\)\s*/,"@");$(this).before('<a href="mailto:'+ email+'" rel="nofollow" title="Email '+ email+'">'+ email+'</a>').remove();});};

// �������������
//HTML
// ����������� �� � ���� ��������� ���� ��������
//<a href="user(at)domain.ru" class="mailto">user(at)domain.ru</a> // � ���� ��������� ���� ��������
// ���
//<a class="mailto">user(at)domain.ru</a>

//�����
//if ( $("a.mailto").length > 0 ) {
	// $.getScript('/bitrix/templates/vpp/js/jquery.mailto.js',function(){ 
	// $('a.mailto').mailto();
//});
//}