window.addEventListener('DOMContentLoaded', (event) => {
  // Load the navbar.html content dynamically
  fetch('navbar.html')
    .then(response => response.text()) // Get the HTML as text
    .then(data => {
      // Insert the navbar HTML into the container
      document.getElementById('navbar-container').innerHTML = data;
    })
    .catch(error => {
      console.error('Error loading navbar:', error);
    });
});
