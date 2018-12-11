$('.sidebar-nav-dropdown-toggle').on('click', function() {
	$(this).parent('.nav-item').children('.nav-dropdown').slideToggle(400)
})