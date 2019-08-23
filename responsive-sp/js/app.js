$(function(){
  //ヘッダーメニュー
  var targetHeight = $('.js-float-menu-target').height();
  $(window).on('scroll',function(){
    $('.js-float-menu').toggleClass('float-active',$(this).scrollTop() > targetHeight);
  });
  //タイトルアニメーション
  var siteTitle = $('.js-site-title');
  siteTitle.css('opacity','0');
  $(window).on('load',function(){
    siteTitle.animate({
      opacity: 1
    }, 2000);
  });
  
  //スクロールアニメーション
  var animationObj = $('.js-animation-obj'),
      slideInLeft = $('.js-animation-slide-left'),
      upIn = $('.js-animation-up'),
      slideInRight = $('.js-animation-slide-right');
  $(window).on('scroll',function(){
    animationObj.each(function(){
      var objPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
      if(scroll > objPos - windowHeight){
        $(this).css({
          'opacity': '1'
        });
      }else{
        $(this).css({
          'opacity': '0'
        });
      }
    });
    slideInLeft.each(function(){
      var objPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
      if(scroll > objPos - windowHeight){
        $(this).css({
          'transform': 'translateX(0)'
        });
      }else{
        $(this).css({
          'transform': 'translateX(-100%)'
        });
      }
    });
    slideInRight.each(function(){
      var objPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
      if(scroll > objPos - windowHeight){
        $(this).css({
          'transform': 'translateX(0)'
        });
      }else{
        $(this).css({
          'transform': 'translateX(100%)'
        });
      }
    });
    upIn.each(function(){
      var objPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
      if(scroll > objPos - windowHeight){
        $(this).css({
          'transform': 'translate(0,0)'
        });
      }else{
        $(this).css({
          'transform': 'translate(0,60px)'
        });
      }
    });
  });
  
  //spメニュー
  $('.js-toggle-sp-menu').on('click',function(){
    $(this).toggleClass('menu-open');
    $('.js-toggle-sp-menu-target').toggleClass('menu-open');
  });
  
  $('.js-toggle-sp-menu-target a[href]').on('click', function(event){
    $('.js-toggle-sp-menu').trigger('click');
  });
  
});