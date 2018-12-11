$('.flash').on('click', function() {
	$(this).hide(400)

	console.log($(this).nextAll('.flash'))
	$(this).nextAll('.flash').each(function() {
		let top = this.style.top.replace('rem', '')-4
		$(this).css('top',top+'rem')
	})
})

setInterval(function() {
	$('.flash').hide(400)
}, 10000);