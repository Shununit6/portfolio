document.addEventListener('DOMContentLoaded', () => {
    const viewWorkButton = document.querySelector('button');

    viewWorkButton.addEventListener('click', () => {
        // For demonstration purposes, we'll just log to the console.
        // You can replace this with the actual functionality needed.
        console.log('View Work button clicked!');

        // Scroll to a specific section, if needed:
        // document.getElementById('some-section-id').scrollIntoView({ behavior: 'smooth' });

        // Navigate to another page, if needed:
        // window.location.href = 'path/to/your/page.html';
    });
});
