$(function () {
   // Для СИСТЕМЫ...........................
   var ua = window.navigator.userAgent;
   var msie = ua.indexOf("MSIE ");
   var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

   function isIE() {
      ua = navigator.userAgent;
      var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
      return is_ie;
   }

   if (isIE()) {
      document.querySelector('html').classList.add('ie');
   }

   if (isMobile.any()) {
      document.querySelector('html').classList.add('_touch');
   }

   // Липкий scroll
   window.onload = function () {
      document.addEventListener("click", documentActions);
      // Actions (делегирование события click)
      function documentActions(e) { }
      // scroll
      const headerElement = document.querySelector('.header');
      const callback = function (entries, observer) {
         if (entries[0].isIntersecting) {
            headerElement.classList.remove('_scroll');
         } else {
            headerElement.classList.add('_scroll');
         }
      };
      const headerObserver = new IntersectionObserver(callback);
      headerObserver.observe(headerElement);
   }

   // Картинки _ibg
   function ibg() {
      $.each($('._ibg'), function (index, val) {
         if ($(this).find('img').length > 0) {
            $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
         }
      });
   }
   ibg();
   //..............................

   // Липкая кнопка
   $('body').append('<div class="upbtn"></div>');
   $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
         $('.upbtn').css({
            bottom: '15px'
         });
      } else {
         $('.upbtn').css({
            bottom: '-80px'
         });
      }
   });
   $('.upbtn').on('click', function () {
      $('html, body').animate({
         scrollTop: 0
      }, 500);
      return false;
   });

   // Плавный скролл меню HEADER
   $(".menu").on("click", "a", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
         top = $(id).offset().top;
      $('body,html').animate({ scrollTop: top }, 1300);
   });

   // Плавный скролл кнопки Портфолио
   $(".full-screen__content").on("click", "a", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
         top = $(id).offset().top;
      $('body,html').animate({ scrollTop: top }, 1500);
   });

   // Меню-Бургер
   $(".header__burger").click(function (event) {
      $(".header__burger, .menu__body").toggleClass("active");
      $("body").toggleClass("lock");
   });


   // Пупап Сертификаты
   $(".hover-image").magnificPopup({
      delegate: "a",
      type: "image",
      tloading: "loading image #%curr%...",
      mainClass: "mfp-img-mobile",
      gallery: {
         enabled: true,
         navigateByImgClick: true,
         preload: [0, 1],
      },
   });


});

