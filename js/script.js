$(document).ready(function() {
  
  var scrollLink = $('.scroll');
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 800 );
  });
  
  // Active link switching
  $(window).scroll(function() {
    // Gets the current vertical position of the scroll bar
    var scrollbarLocation = $(this).scrollTop();
    scrollLink.each(function() {
      
      var sectionOffset = $(this.hash).offset();
      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })
  })
  
})