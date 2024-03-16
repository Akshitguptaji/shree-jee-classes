document.addEventListener("DOMContentLoaded", function() {
    const socialSidebar = document.getElementById("socialSidebar");
  
    // Toggle sidebar visibility when clicking on a button
    document.addEventListener("click", function(event) {
      if (event.target.matches(".toggle-sidebar")) {
        socialSidebar.classList.toggle("show");
      }
    });
  
    // Share content on social media when clicking on a link
    socialSidebar.addEventListener("click", function(event) {
      if (event.target.matches("a")) {
        const platform = event.target.classList[0]; // Get the first class of the clicked link
        const shareUrl = getShareUrl(platform); // Get the share URL based on the platform
        if (shareUrl) {
          window.open(shareUrl, "_blank"); // Open the share URL in a new tab
        }
      }
    });
  
    // Function to get share URL based on the social media platform
    function getShareUrl(platform) {
      switch (platform) {
        case "facebook":
          return "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href);
        case "twitter":
          return "https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href);
        case "instagram":
          return "https://www.instagram.com/";
        case "linkedin":
          return "https://www.linkedin.com/shareArticle?url=" + encodeURIComponent(window.location.href);
        case "whatsapp":
          return "https://api.whatsapp.com/send?text=" + encodeURIComponent(window.location.href);
        default:
          return null;
      }
    }
  });
  