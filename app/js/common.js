$(document).ready(function () {
  console.log(document.cookie);
  var date = new Date;
  date.setDate(date.getDate() + 30);
  //показать сообщение о сборе информации
  setTimeout(function() {
    if (!getCookie('data_collection')){
       $(".data_collection").removeClass("hide-modal");
    }
  }, 3000);
  //отметить
  $('button.close_data_collection').click(function (){
    $('.data_collection').addClass('hide-modal');
    setCookie("data_collection", "accsees", {"expires":date});
    console.log(document.cookie);
  });

  //open-menu
  $('img.hamburger').click(function () {
    $('.submenu').toggleClass('open-mob');
    $('.mainmenu').toggleClass('open-mob');
  });
  //прикрепление иображений к форме
  $('input#form3_file').on('change', function () {
    if (this.files.length == 0) {
      $('label.upfile').text('+ Прикрепить изображение');
    } else {
      $('label.upfile').text('Выбрать другой файл');
      var text = '';
      for (var i = 0; i < this.files.length; i++) {
        text += this.files[i].name + '<br>';
        $('.upfile-desc').html(text);
      }
    }
  });
  //открыть модальную форму
  $('button#btn_2').click(function (){
    $(".modal").removeClass("hide-modal");
  });
  $('span.close').click(function (){
    $(".modal").addClass("hide-modal");
  });
  $(window).scroll(function (e) {
    if (window.scrollY >= 500) {
      $('#up').fadeIn();
    } else {
      $('#up').fadeOut();
    }
  });
  $('#up').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 400);
    return false;
  });
});
