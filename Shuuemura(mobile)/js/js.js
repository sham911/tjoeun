$(function() {
  var rolling_imglist = new Swiper('.rolling_imglist', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.rolling_imglist .swiper-pagination',
        clickable: true,
      },
      // autoplay: {
      //    delay: 1500,
      //    // disableOnInteraction: false,
      //  },
    });

  var rolling_newitem_imglist = new Swiper('.rolling_newitem_imglist', {
      slidesPerView: 2,
      // spaceBetween: 30,
      slidesPerGroup: 2,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.rolling_newitem_imglist .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.rolling_newitem_imglist .swiper-button-next',
        prevEl: '.rolling_newitem_imglist .swiper-button-prev',
      },
      // autoplay: {
      //    delay: 1500,
      //    // disableOnInteraction: false,
      //  },
    });

  var rolling_bestitem_imglist = new Swiper('.rolling_bestitem_imglist', {
      slidesPerView: 2,
      // spaceBetween: 30,
      slidesPerGroup: 2,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.rolling_bestitem_imglist .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.rolling_bestitem_imglist .swiper-button-next',
        prevEl: '.rolling_bestitem_imglist .swiper-button-prev',
      },
      // autoplay: {
      //    delay: 1500,
      //    // disableOnInteraction: false,
      //  },
    });

  var ranking_box_imglist = new Swiper('.ranking_box_imglist', {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
      scrollbar: {
        el: '.ranking_box_imglist .swiper-scrollbar',
        hide: true,
      },
    });

    $(window).resize(function(){
      ranking_box_imglist.update();
    })

    $(window).trigger('resize');


})
