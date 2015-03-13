//Not really better

var originalbackground = [];
var originalborder = [];
var contrast_set = false; 

function toggle_contrast () {

	if (contrast_set == false) {
		if (originalbackground.length == 0) {
	
	    bodycolor = jQuery('body').css('color');
	    linkcolor = jQuery('a').css('color');
	    bodybg = jQuery('body').css('background');
	    
	    jQuery('body *').each(function () {
	        var b = jQuery(this).css('background');
	        originalbackground.push(b);
	
	        var b = jQuery(this).css('border-color');
	        originalborder.push(b);
	    });  
	    //console.log(originalbackground);
	    //console.log(originalborder);
	  }
	
		jQuery('body').css('color', 'white');
	  	jQuery('body').css('background', '#000');
		jQuery('a').css('color', '#fc0');
	  
		jQuery('body *').each(function (index, value) {
	        jQuery(this).css('background', '#000');
	        jQuery(this).css('border-color', '#fc0');
		});
	
		contrast_set = true;
	} else {
		jQuery('body').css('color', bodycolor);
		jQuery('body').css('background', bodybg);
		jQuery('a').css('color', linkcolor);

		jQuery('body *').each(function (index, value) {
	        jQuery(this).css('background', originalbackground[index]);
	        jQuery(this).css('border-color', originalborder[index]);
	    });
	
	   contrast_set = false;
	}
}

jQuery('#contrast').on('click', function(){toggle_contrast()});