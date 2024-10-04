 //header Scrolling
 window.addEventListener('scroll' , () => {
    document.querySelector('header').classList.toggle('scroll', window.scrollY > 0)
})

//Scroll
window.onscroll = function () {
    document.querySelector('.search-box').classList.remove('active_1')
    document.querySelector('.cart').classList.remove('active_2')
    document.querySelector('.navbar').classList.remove('active')
}

//new arrival
/*const swiper = new Swiper('.new-arrival', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });*/