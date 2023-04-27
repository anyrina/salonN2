var windowWidth = $(window).width();
var windowSm = 768;
if (windowWidth >= windowSm) {
//横幅768px以下（スマホ）に適用させるJavaScriptを記述
jQuery(function(){

	var header = jQuery('#header');
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 0) { //スクロールが10pxを越えたら
			header.addClass('invert');
		} else { //スクロールが500pxを越えなければ
			header.removeClass('invert');
		}
	});

    var none = jQuery('#none');
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 0) { //スクロールが10pxを越えたら
			none.addClass('invert');
		} else { //スクロールが500pxを越えなければ
			none.removeClass('invert');
		}
	});

    var  nameHeader= jQuery('#name_header');
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 0) { //スクロールが10pxを越えたら
			nameHeader.addClass('invert');
		} else { //スクロールが500pxを越えなければ
			nameHeader.removeClass('invert');
		}
	});

    var  nameHeaderSpan= jQuery('#name_header_span');
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 0) { //スクロールが10pxを越えたら
			nameHeaderSpan.addClass('invert');
		} else { //スクロールが500pxを越えなければ
			nameHeaderSpan.removeClass('invert');
		}
	});

});
}
