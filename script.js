// script.js

let startX = 0; // Store the starting touch point for swipe gesture

// Function to toggle the sidebar visibility
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open'); // Toggle the 'open' class to slide the sidebar in/out
}

// Detect swipe left to open sidebar and swipe right to close it
function handleSwipe(event) {
    const sidebar = document.querySelector('.sidebar');
    const touchEndX = event.changedTouches[0].clientX; // Get the ending touch point

    // Calculate swipe distance
    const swipeDistance = startX - touchEndX;

    if (swipeDistance > 50) {
        // Swipe left (show sidebar)
        sidebar.classList.add('open');
    } else if (swipeDistance < -50) {
        // Swipe right (hide sidebar)
        sidebar.classList.remove('open');
    }
}

// Detect swipe start
function handleTouchStart(event) {
    startX = event.touches[0].clientX; // Store the starting touch point
}

// Attach swipe event listeners to the document
document.addEventListener('touchstart', handleTouchStart);
document.addEventListener('touchend', handleSwipe);

