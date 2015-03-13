//Change font sizes for, well, different font sizes

var originalcss = [];
var fontlarge = 1.2;
var fontlarger = 1.5;

function restore () {
	if (originalcss.length != 0) {
		jQuery('body *').each(function (index, value) {
			jQuery(this).css('font-size', originalcss[index]);
		});
	};
}

function resize_font (font_size) {
	if (originalcss.length == 0) {
			jQuery('body *').each(function () {
				var a = parseInt(jQuery(this).css('font-size'));
				originalcss.push(a);

		});
	};

	jQuery('body *').each(function (index, value) {
			jQuery(this).css('font-size', originalcss[index]);
	});

	jQuery('body *').each(function () {
			var a = parseInt(jQuery(this).css('font-size'));
				
			var a = a * font_size;
			jQuery(this).css('font-size', a);
								
	});
};

jQuery('#font-large').on('click', function(){resize_font(fontlarge)});
jQuery('#font-larger').on('click', function(){resize_font(fontlarger)});
jQuery('#restore').on('click', function(){resize_font(restore)});
