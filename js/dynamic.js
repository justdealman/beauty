$(document).ready(function() {
	if ( $('.salute').length > 0 ) {
		var max = 1;
		$('.salute > div').each(function() {
			var h = $(this).height(); 
			max = h > max ? h : max;
		});
		$('.salute > div').height(max);
	}
	$('.footer').css({'margin-top': -$('.footer').outerHeight()+'px'});
	$('.wrapper').append('<div class="clear"></div>');
	$('.clear').css({'height': $('.footer').outerHeight()+'px'});
	$('.ask .select').bind('click', function() {
		$(this).parent().find('input[type="file"]').click();
	});
	$('input[type="file"]').change(function() {
		$(this).parent().find('input[type="text"]').val($(this).val().split(/(\\|\/)/g).pop());
	});
	$('input, textarea').each(function () {
		$(this).data('holder',$(this).attr('placeholder'));
		$(this).focusin(function(){
			$(this).attr('placeholder','');
		});
		$(this).focusout(function(){
			$(this).attr('placeholder',$(this).data('holder'));
		});
	});
	$('.reviews > div:nth-child(2n), .gallery li:nth-child(4n)').css({'margin-right': '-3px'});
	$('.content .price tbody tr:nth-child(2n) td').css({'background': '#fdfbf9'});
});