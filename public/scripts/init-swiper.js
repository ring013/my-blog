window.addEventListener('DOMContentLoaded', () => {
  if (window.Swiper) {
    console.log("✅ Swiperが読み込まれました");

    new Swiper('.swiper', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  } else {
    console.error("❌ Swiperが読み込まれていません");
  }
});
