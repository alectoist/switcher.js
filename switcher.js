var originalcss = [];
var size2 = false;
var size3 = false;
var value2 = 1.2;
var value3 = 1.5;

jQuery('#font-large, #font-larger, #restore').on('click', function() {
	if (originalcss.length < 1) {
			jQuery('body *').each(function () {
				var a = parseInt(jQuery(this).css('font-size'));
				originalcss.push(a);
		});
			
	};
	console.log(originalcss)
});

jQuery('#font-large').on('click', function() {
	if (size2 == false) {
		jQuery('body *').each(function (index, value) {
			jQuery(this).css('font-size', originalcss[index]);
		});

		jQuery('body *').each(function () {
			var a = parseInt(jQuery(this).css('font-size'));
				
			var a = a * value2;
			jQuery(this).css('font-size', a);
								
		});
		size2 = true;
		if (size3 == true) { size3 = false };
	};
});


jQuery('#font-larger').on('click', function() {
	if (size3 == false) {
		jQuery('body *').each(function (index, value) {
			jQuery(this).css('font-size', originalcss[index]);
		});

		jQuery('body *').each(function () {
			var a = parseInt(jQuery(this).css('font-size'));
				
			var a = a * value3;
			jQuery(this).css('font-size', a);
								
		});
		size3 = true;
		if (size2 == true) { size2 = false };
	};	
});
	

jQuery('#restore').on('click', function() {

	jQuery('body *').each(function (index, value) {
		jQuery(this).css('font-size', originalcss[index]);
	});

	size2 = false;
	size3 = false;
});