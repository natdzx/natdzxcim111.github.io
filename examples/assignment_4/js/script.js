$(function(){
  //alert("hello");

  $('#getStarted').hide();

  $('#title').on('mouseover', function(){
    $('.fa-arrow-alt-circle-left').toggleClass('fa-arrow-alt-circle-right');
      $('#getStarted').show();
    });

  $('#title').on('mouseleave', function(){
    $('.fa-arrow-alt-circle-left').toggleClass('fa-arrow-alt-circle-right');
    });

    $('#next').on('click', function(){
        var currentItem = $('li.active');
        var nextItem = $('li.active').next();

        currentItem.toggleClass('active');
        nextItem.toggleClass('active');

if($('li').last().hasClass('active')) {
$('#next').hide();
  $('#finish').show();
} else{
  $('#next').show();
}


    });

});
