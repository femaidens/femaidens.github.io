// Handle opening and closing of the sidebar
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    
    sidebar.classList.toggle('open'); // Toggle the 'open' class on sidebar
    
    // Add/remove the 'sidebar-open' class to the content for proper alignment
    content.classList.toggle('sidebar-open');
}

// Add event listener for mobile swipe (optional)
let startX = 0; // Store the starting touch point for swipe gesture

// Detect swipe gestures for mobile devices
function handleTouchStart(event) {
    startX = event.touches[0].clientX; // Get the initial touch position
}

// Handle swipe movement and detect swipe direction
function handleSwipe(event) {
    const sidebar = document.querySelector('.sidebar');
    const touchEndX = event.changedTouches[0].clientX; // Get the ending touch position

    const swipeDistance = startX - touchEndX; // Calculate swipe distance

    if (swipeDistance > 50) {
        sidebar.classList.add('open'); // Swipe left to open the sidebar
    } else if (swipeDistance < -50) {
        sidebar.classList.remove('open'); // Swipe right to close the sidebar
    }
}

// Attach event listeners for swipe gestures
document.addEventListener('touchstart', handleTouchStart);
document.addEventListener('touchend', handleSwipe);

// Toggle button for opening/closing sidebar
document.querySelector('.sidebar-toggle').addEventListener('click', toggleSidebar);
