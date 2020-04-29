//QUERY STYLE
$(document).ready(function(){

  //navbar scroll bg///////////////////

  $(window).scroll(function() {
    let $nav = $(".navbar");
    if (($(document).scrollTop() > $nav.height()) && ($(document).scrollTop() < 5200)) {
      // $nav.toggleClass('scrolled');
      $nav.addClass('scrolled');
      console.log('first');
    } else {
      $nav.removeClass('scrolled');
      console.log('pas first');
    }
  });


  $(function(){
    $('#enfin1').toggleClass('shade-in_medium');
    $('#enfin2').hide();
    $('#enfin2').toggleClass('shade-in_medium');
    setTimeout(function () {
      $("#enfin2").show();
    }, 2000);
  });

  $(function(){
    let $nav = $("#keywords");
    $nav.hide();
    $(document).scroll(function () {
      $nav.toggleClass('typewrited_start', $(this).scrollTop() > 600);
      // $nav.toggleClass('typewrited_start', $(this).scrollTop() > $nav.height());
        setTimeout(function () {
          $($nav).show();
        },500);
    });
  });

  $(function(){
    let $nav = $(".tasks");
    $nav.hide();
    $(document).scroll(function () {
      $nav.toggleClass('typewrited_start', $(this).scrollTop() > 1000);
      // $nav.toggleClass('typewrited_start', $(this).scrollTop() > $nav.height());
        setTimeout(function () {
          $($nav).show();
        },500);
    });
  });

  $(function(){
    $('marquee').toggle();
  });

  $(function(){
    $('#credit').click(function(){
      $('marquee').toggle();
    });
  });

});