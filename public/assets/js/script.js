$('.toggle').on('click', function() {
	$(this).parents('.block').children('.block-body').slideToggle(400, function() {
		toggle = $(this).parents('.block').find('.toggle')
		if($(this).attr('style')) toggle.text(' + ')
		else toggle.text(' - ')
	})
})