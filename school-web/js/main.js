document.addEventListener('DOMContentLoaded', function() {
    // Menu functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navbarMenu = document.querySelector('.navbar ul');
    
    // Toggle menu and button state
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        menuToggle.classList.toggle('active');
        navbarMenu.classList.toggle('active');
        // Close search box if open
        searchBox.classList.remove('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        const isClickInside = navbarMenu.contains(e.target) || menuToggle.contains(e.target);
        if (!isClickInside && navbarMenu.classList.contains('active')) {
            navbarMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });

    // Close menu when window is resized past mobile breakpoint
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navbarMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });

    // Prevent menu from closing when clicking inside
    navbarMenu.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Search functionality
    const searchToggle = document.querySelector('.search-toggle');
    const searchBox = document.querySelector('.search-box');
    const searchInput = document.querySelector('.search-box input');
    const searchSubmit = document.querySelector('.search-submit');

    // Toggle search box
    searchToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        searchBox.classList.toggle('active');
        if (searchBox.classList.contains('active')) {
            searchInput.focus();
            // Close mobile menu if open
            navbarMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });

    // Handle search submission
    searchSubmit.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    function handleSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            // You can customize this to search within your website
            // For now, we'll just alert the search term
            alert('Searching for: ' + searchTerm);
            searchInput.value = '';
            searchBox.classList.remove('active');
        }
    }

    // Close search when clicking outside
    document.addEventListener('click', function(e) {
        const isClickInsideSearch = searchBox.contains(e.target) || searchToggle.contains(e.target);
        
        if (!isClickInsideSearch) {
            searchBox.classList.remove('active');
        }
    });

    // Close search when window is resized past mobile breakpoint
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            searchBox.classList.remove('active');
        }
    });

    // Prevent search from closing when clicking inside
    searchBox.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});
