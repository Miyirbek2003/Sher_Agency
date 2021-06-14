$(document).ready(function($) {
    $('.tab_content').hide();
    $('.tab_content:first').show();
    $('.tabs li:first').addClass('active');
    $('.tabs li').click(function(event) {
      $('.tabs li').removeClass('active');
      $(this).addClass('active');
      $('.tab_content').hide();
  
      var selectTab = $(this).find('a').attr("href");
  
      $(selectTab).fadeIn();
    });
  });


$(document).ready(function(){
  $('.show').click(function(){
    document.getElementById('list').style.right= 0 + 'px';
    $('.hide').show();
    $('.show').hide();
  });
});
$(document).ready(function(){
  $('.hide').click(function(){
    document.getElementById('list').style.right= -500 + 'px';
    $('.hide').hide();
    $('.show').show();
  });
});