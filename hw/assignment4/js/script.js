$(function(){
  //alert("hello");

  $('#getStarted,#finish,#previous,.hide,#survey').hide();

  $('#title').on('mouseover', function(){
    $('.fa-arrow-alt-circle-left').toggleClass('fa-arrow-alt-circle-right');
      $('#getStarted').show();
    });

  $('#title').on('mouseleave', function(){
    $('.fa-arrow-alt-circle-left').toggleClass('fa-arrow-alt-circle-right');
  });
    $('#getStarted').on('click', function(){
      $('.hide').show();
      $('#getStarted').hide();
    });

    $('#finish').on('click', function(){
      $('.hide,#next,#previous,#finish').hide();
      $('#survey').show();
  });

//survey
  $('#yes').on('click', function(){
      $('#surveytitle').css("background-color", "green");
      $('#survey').css({
        "border": "2px solid green",
        "background":"#c6c9fc"
    });
  });
  $('#no').on('click', function(){
      $('#surveytitle').css("background-color", "red");
      $('#survey').css({
        "border": "2px solid red",
        "background":"#c6c9fc"
    });
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

if($('li').first().hasClass('active')) {
$('#previous').hide();
} else{
$('#previous').show();
}

    });

    $('#previous').on('click', function(){
        var currentItem = $('li.active');
        var previousItem = $('li.active').prev();

        currentItem.toggleClass('active');
        previousItem.toggleClass('active');

  if($('li').last().hasClass('active')) {
  $('#next').hide();
  $('#finish').show();
  } else{
  $('#next').show();
    }

  if($('li').first().hasClass('active')) {
  $('#previous').hide();
  } else{
  $('#previous').show();
  }



    });



});
