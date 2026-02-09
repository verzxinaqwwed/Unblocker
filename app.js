'use strict';

// Navigation Functionality
function goToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    // Example: Handle a button click to navigate to a specific section
    const buttons = document.querySelectorAll('.nav-button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-target');
            goToSection(sectionId);
        });
    });
});

// Export goToSection for external usage (if needed)
module.exports = { goToSection };