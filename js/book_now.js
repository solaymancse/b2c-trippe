window.addEventListener('scroll', function() {
  var bookNowDiv = document.querySelector('.book-now');
  var heroSectionDiv = document.querySelector('.hero-content');
  var scrollPosition = window.scrollY;
  var scrollThreshold = heroSectionDiv.offsetTop; // Adjust this value to set the scroll threshold based on the top position of the hero-section div
  var scrollThresholdBottom = heroSectionDiv.offsetTop + heroSectionDiv.offsetHeight - bookNowDiv.offsetHeight;

  if (scrollPosition >= scrollThreshold && scrollPosition <= scrollThresholdBottom) {
    bookNowDiv.style.position = 'fixed';
    bookNowDiv.style.top = '110px';
    bookNowDiv.style.transition = 'opacity 0.5s'; // Adjust this value to set the desired top position
  } else {
    bookNowDiv.style.position = 'absolute';
    bookNowDiv.style.top = 'auto';
    bookNowDiv.style.transition = 'opacity 0.5s';
  }
});
