function set_font_large_cookie() {
	jQuery.cookie('font-large', 'true', {expires: 14});

	if (jQuery.cookie('font-larger') == 'true') {
		jQuery.removeCookie('font-larger');
	};
}

function set_font_larger_cookie() {
	jQuery.cookie('font-larger', 'true', {expires: 14});

	if (jQuery.cookie('font-large') == 'true') {
		jQuery.removeCookie('font-large');
	};
}

function remove_font_sizes() {
	jQuery.removeCookie('font-large');
	jQuery.removeCookie('font-larger');
}

function set_contrast_cookie() {
	if (jQuery.cookie('contrast') == 'true') {
		jQuery.removeCookie('contrast');
	} else {
		jQuery.cookie('contrast', 'true', {expires: 14});
	}
}

jQuery('#font-large').on('click', function(){set_font_large_cookie()});
jQuery('#font-larger').on('click', function(){set_font_larger_cookie()});
jQuery('#contrast').on('click', function(){set_contrast_cookie()});
jQuery('#restore').on('click', function(){remove_font_sizes()});

jQuery(document).ready(function(){

	if (jQuery.cookie('font-large') == 'true') {
		resize_font(fontlarge);
	} else if (jQuery.cookie('font-larger') == 'true') {
		resize_font(fontlarger);
	}

	if (jQuery.cookie('contrast') == 'true') {
		toggle_contrast();
	}

});