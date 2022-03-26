$(document).ready(function(){
    $('form input').change(function () {
      $('form p').text(this.files.length + " file(s) selected");
    });
  });


  $(document).ready(function(){
    $('.counter').counterUp({
      delay: 10,
      time: 1200
    });
  });
