const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
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
    autoplay: {
      delay: 3000, // Set the delay between slides in milliseconds (e.g., 5000 = 5 seconds)
      disableOnInteraction: false, // Enable autoplay even when the user interacts with the slider
    },

  });