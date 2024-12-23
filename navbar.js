document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    const dropdownItems = document.querySelectorAll('.nav-item-dropdown');

    // Toggle mobile menu
    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Handle dropdowns in mobile view
    dropdownItems.forEach(item => {
        const dropdownTrigger = item.querySelector('.dropdown-trigger');
        
        dropdownTrigger.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                item.classList.toggle('active');
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !mobileMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            mobileMenu.classList.remove('active');
            dropdownItems.forEach(item => item.classList.remove('active'));
        }
    });

    // Reset on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
            mobileMenu.classList.remove('active');
            dropdownItems.forEach(item => item.classList.remove('active'));
        }
    });
});