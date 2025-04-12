// Get the toggle button and the body element
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check if dark mode is already enabled in local storage
if(localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode'); // Enable dark mode on load
}

// Add an event listener to the button for toggling dark mode
darkModeToggle.addEventListener('click', () => {
    // Toggle the 'dark-mode' class on the body element
    body.classList.toggle('dark-mode');
    
    // Save the current state to local storage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});
