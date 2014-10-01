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


	$('input[type=password]').on('propertychange keyup input paste change', function() {
		var password = $(this).val();

		$('.encrypted').each( function() {
			var ciphertext = $(this).html();
			var plaintext = Aes.Ctr.decrypt(ciphertext, password, 256);

			if (plaintext.lastIndexOf('plaintext', 0) === 0) {
				$(this)
					.removeClass('encrypted')
					.hide()
					.html( plaintext.substring(9) )
					.slideDown();
				$('.password-container').slideUp();
			}
		});

	});

});

