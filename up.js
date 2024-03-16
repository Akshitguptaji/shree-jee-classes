// Show the up button when scrolling down
window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    var upButton = document.getElementById("upButton");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      upButton.style.display = "block";
    } else {
      upButton.style.display = "none";
    }
  }
  
  // Smooth scroll to the top when the up button is clicked
  document.getElementById("upButton").addEventListener("click", function() {
    scrollToTop(600); // Adjust scroll duration as needed
  });
  
  function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollInterval); 
    },15);
  }
  