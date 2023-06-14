document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the "Learn More" buttons
    var learnMoreButtons = document.querySelectorAll('.btn');
    learnMoreButtons.forEach(function(button) {
      button.addEventListener('click', function(event) {
        event.preventDefault();
        alert("Learn More button clicked!");
      });
    });
  });
