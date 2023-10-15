// Function to show the welcome popup
function showWelcomePopup() {
    document.getElementById('welcome-popup').style.display = 'block';
}

// Function to close the welcome popup
function closeWelcomePopup() {
    document.getElementById('welcome-popup').style.display = 'none';
}

// Wait for the page to load and then display the welcome popup
window.addEventListener('load', showWelcomePopup);

// Close the popup when the close button is clicked
document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code here
    document.getElementById('close-popup').addEventListener('click', closeWelcomePopup);
});
