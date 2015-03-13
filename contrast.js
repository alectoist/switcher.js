var originalbackground = [];
var originalborder = [];
var contraston = false;
var b = '';

jQuery('#contrast').on('click', function(){

  if (originalbackground.length < 1) {

    bodycolor = jQuery('body').css('color');
    
    bodybg = jQuery('body').css('background');
    
    jQuery('body *').each(function () {
        var b = jQuery(this).css('background');
        originalbackground.push(b);

        var b = jQuery(this).css('border-color');
        originalborder.push(b);
    });  
    console.log(originalbackground);
    console.log(originalborder);
  }

  if (contraston == false ) {
    jQuery('body').css('color', 'white');
  
    jQuery('body').css('background', '#000');
  
    jQuery('body *').each(function (index, value) {
        jQuery(this).css('background', '#000');
        jQuery(this).css('border-color', '#fc0');
    });
  
    contraston = true;
  } else {

   jQuery('body').css('color', bodycolor);
   jQuery('body').css('background', bodybg);

   jQuery('body *').each(function (index, value) {
        jQuery(this).css('background', originalbackground[index]);
        jQuery(this).css('border-color', originalborder[index]);
    });

   contraston = false;

  }
});