function toggleText() {
    const moreText = document.querySelector('.more-text');
    const toggleButton = document.querySelector('.toggle-button');
    
    if (moreText.classList.contains('hidden')) {
        moreText.classList.remove('hidden');
        toggleButton.style.display = 'none'; // Hide the toggle button after opening
    } else {
        moreText.classList.add('hidden');
        toggleButton.style.display = 'inline'; // Show the toggle button when closing
    }
}
