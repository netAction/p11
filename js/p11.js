$(function() {

	$('.navilink').click(function() {
		var color = $(this).attr('class');
		color = color.split('-');
		color = color[1].split("\\s+");
		color = color[0];

		$('.content').not('.content-'+color).stop().slideUp();
		$('.content-'+color).stop().slideDown();
	});

	$('.navilink-red').trigger('click');
});

