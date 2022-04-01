
/* Поиск */
$(document).ready(function () {
	$("html").on('click', function () {
		$('.header__search-btn').removeClass('none')
		$('.header__search-box').removeClass('active');
	});

	$('.header__search-btn').click(function (e) {
		e.stopPropagation()
		$('.header__search-box').addClass('active');
		$('.header__search-btn').addClass('none')
	});
	$('.header__hidden-btn').click(function () {
		$('.header__search-btn').removeClass('none')
		$('.header__search-box').removeClass('active');
	});
});

/* выбор вес\цена */

const tabsLabel = document.querySelectorAll(".tabs__label");
const labelItems = document.querySelectorAll(".tabs__price");
tabsLabel.forEach(function (item) {
	item.addEventListener("click", function () {
		let currentBtn = item;
		let labelId = currentBtn.getAttribute("data-label");
		let currentLabel = document.querySelector(labelId);

		tabsLabel.forEach(function (item) {
			item.classList.remove('red-frame');
		})

		labelItems.forEach(function (item) {
			item.classList.remove('active-price');
		})
		currentBtn.classList.add('red-frame');
		currentLabel.classList.add('active-price');
	});
});

/* количество товара */

$('.minus').click(function () {
	var $input = $(this).parent().find('input');
	var count = parseInt($input.val()) - 1;
	count = count < 1 ? 1 : count;
	$input.val(count);
	$input.change();
});
$('.plus').click(function () {
	var $input = $(this).parent().find('input');
	$input.val(parseInt($input.val()) + 1);
	$input.change();
});

/* табы новинки\хиты */

const tabsLink = document.querySelectorAll(".tabs__link");
const tabsBlock = document.querySelectorAll(".tabs__block");

tabsLink.forEach(function (item) {
	item.addEventListener("click", function () {
		let currentBtn = item;
		let tabId = currentBtn.getAttribute("data-id");
		let currentTabs = document.querySelector(tabId);

		tabsLink.forEach(function (item) {
			item.classList.remove('red-line');
		})

		tabsBlock.forEach(function (item) {
			item.classList.remove('active-block');
		})
		currentBtn.classList.add('red-line');
		currentTabs.classList.add('active-block');
	});
});

/* меню адаптив */

$(document).ready(function () {
	$('.menu__flex').click(function () {
		$('.menu__toggle span').toggleClass('menu-non');
		$('.menu__close').toggleClass('close');
		$('.menu__nav').slideToggle('medium', function () {
			if ($(this).is(':visible'))
				$(this).css('display', 'flex');
		})
		$('.menu__nav').toggleClass('menu__adaptive');
		
	})
})

