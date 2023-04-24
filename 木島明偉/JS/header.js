
jQuery(function(){

	var header = jQuery('#header');
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 10) { //スクロールが500pxを越えたら
			header.addClass('invert');
		} else { //スクロールが500pxを越えなければ
			header.removeClass('invert');
		}
	});

    var none = jQuery('#none');
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 10) { //スクロールが500pxを越えたら
			none.addClass('invert');
		} else { //スクロールが500pxを越えなければ
			none.removeClass('invert');
		}
	});

    var  nameHeader= jQuery('#name_header');
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 10) { //スクロールが500pxを越えたら
			nameHeader.addClass('invert');
		} else { //スクロールが500pxを越えなければ
			nameHeader.removeClass('invert');
		}
	});

    var  nameHeaderSpan= jQuery('#name_header_span');
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 10) { //スクロールが500pxを越えたら
			nameHeaderSpan.addClass('invert');
		} else { //スクロールが500pxを越えなければ
			nameHeaderSpan.removeClass('invert');
		}
	});

});

