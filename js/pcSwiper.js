var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
      delay: 3000, // Delay between slide transitions in milliseconds
      disableOnInteraction: false, // Allow autoplay to continue even when user interacts with the slider
    },
    effect: "slide",
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
       
      },
      768: {
        slidesPerView: 3,
        
      },
      1024: {
        slidesPerView: 3,
       
      },
    },
  });

 var slider2 = new Swiper(".slider2", {
  slidesPerView: "auto", // Set slidesPerView to "auto" to enable overflow on the x-axis
  spaceBetween: 20, // Adjust the space between slides as needed
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false, // Show the scrollbar
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  });