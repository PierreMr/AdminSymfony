$('.flash').on('click', function() {
	$(this).hide(400)
})

setInterval(function() {
	$('.flash').hide(400)
} ,5000);