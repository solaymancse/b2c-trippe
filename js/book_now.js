window.addEventListener('scroll', function() {
  var bookNowDiv = document.querySelector('.book-now');
  var heroSectionDiv = document.querySelector('.hero-content');
  var scrollPosition = window.scrollY;
  var scrollThreshold = heroSectionDiv.offsetTop; // Adjust this value to set the scroll threshold based on the top position of the hero-section div
  var scrollThresholdBottom = heroSectionDiv.offsetTop + heroSectionDiv.offsetHeight - bookNowDiv.offsetHeight;

  if (scrollPosition >= scrollThreshold && scrollPosition <= scrollThresholdBottom) {
    bookNowDiv.style.position = 'fixed';
    bookNowDiv.style.top = '110px';
     // Adjust this value to set the desired top position
  } else {
    bookNowDiv.style.position = 'absolute';
    bookNowDiv.style.top = 'auto';
   
  }
});
window.addEventListener('scroll', function() {
  var bookNowDiv = document.querySelector('.booking-right');
  var heroSectionDiv = document.querySelector('.booking-body');
  var scrollPosition = window.scrollY;
  var scrollThreshold = heroSectionDiv.offsetTop; // Adjust this value to set the scroll threshold based on the top position of the hero-section div
  var scrollThresholdBottom = heroSectionDiv.offsetTop + heroSectionDiv.offsetHeight - bookNowDiv.offsetHeight;

  if (scrollPosition >= scrollThreshold && scrollPosition <= scrollThresholdBottom) {
    bookNowDiv.style.position = 'fixed';
    bookNowDiv.style.top = '82px';
   
     // Adjust this value to set the desired top position
  } else {
    bookNowDiv.style.position = 'absolute';
    bookNowDiv.style.top = 'auto';
   
  }
});
