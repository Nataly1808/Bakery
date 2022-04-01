$(document).ready(function () {
	$('.header__search-btn').click(function () {
		$('.header__search').toggleClass('active');
		$('.header__search-txt').toggleClass('field');
		$('.header__search-btn').toggleClass('close');
	});
});


