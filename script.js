// JavaScript for Back to Top Button

document.addEventListener('DOMContentLoaded', function () {
    var backToTopButton = document.getElementById('back-to-top');

    // Show or hide the button based on scroll position
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) { // Adjust the scroll position to your preference
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Scroll to the top when the button is clicked
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
