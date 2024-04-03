document.addEventListener('DOMContentLoaded', () => {
  const dropdownLinks = document.querySelectorAll('.nav-item.dropdown');

  // Function to show the dropdown and add the class
  function showDropdown(dropdownLink) {
    const dropdownButton = dropdownLink.querySelector('.nav-arrow-down');
    const submenu = dropdownLink.querySelector('.dropdown-menu');
    submenu.classList.add('show');
    dropdownButton.setAttribute('aria-expanded', 'true');
    submenu.setAttribute('aria-hidden', 'false');
    dropdownLink.classList.add('show-children');
  }

  // Function to hide the dropdown and remove the class
  function hideDropdown(dropdownLink) {
    const dropdownButton = dropdownLink.querySelector('.nav-arrow-down');
    const submenu = dropdownLink.querySelector('.dropdown-menu');
    submenu.classList.remove('show');
    dropdownButton.setAttribute('aria-expanded', 'false');
    submenu.setAttribute('aria-hidden', 'true');
    dropdownLink.classList.remove('show-children');
  }

  // Toggle the dropdown on click
  dropdownLinks.forEach((dropdownLink) => {
    const dropdownButton = dropdownLink.querySelector('.nav-arrow-down');
    const submenu = dropdownLink.querySelector('.dropdown-menu');

    dropdownButton.addEventListener('click', function (e) {
      e.stopPropagation();
      if (submenu.classList.contains('show')) {
        hideDropdown(dropdownLink);
      } else {
        showDropdown(dropdownLink);
      }
    });
  });

  // Show the dropdown on hover for screens larger than 1200px
  if (window.innerWidth >= 1200) {
    dropdownLinks.forEach((dropdownLink) => {
      dropdownLink.addEventListener('mouseenter', function () {
        showDropdown(dropdownLink);
      });

      dropdownLink.addEventListener('mouseleave', function () {
        hideDropdown(dropdownLink);
      });
    });
  }

  // Close dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    dropdownLinks.forEach((dropdownLink) => {
      if (!dropdownLink.contains(e.target)) {
        hideDropdown(dropdownLink);
      }
    });
  });

  // Function to add/remove class "p-0" to/from the ".container"
  function toggleMobileClass() {
    const container = document.querySelector('.container');
    if (container) {
      container.classList.toggle('p-0');
    }
  }

  // Function to add/remove class "p-0" to/from the ".navbar-brand"
  function toggleMobileNavbarBrand() {
    const navbarBrand = document.querySelector('.navbar-brand');
    if (navbarBrand) {
      navbarBrand.classList.toggle('px-custom');
    }
  }

  // Function to add "show" class to the closest .close-search
  function addShowToClosestCloseSearch(siteSearch) {
    const closestCloseSearch = siteSearch.nextElementSibling;
    if (
      closestCloseSearch &&
      closestCloseSearch.classList.contains('close-search')
    ) {
      closestCloseSearch.classList.add('show');
    }
  }

  // Function to remove "show" class from .close-search
  function removeShowFromClassCloseSearch() {
    const closeSearch = document.querySelectorAll('.close-search.show');
    closeSearch.forEach(function (element) {
      element.classList.remove('show');
    });
  }

  // Function to check if it's a mobile screen (less than 1200px)
  function isMobileScreen() {
    return window.innerWidth < 1200;
  }

  // Toggle the search bar on click
  document.querySelectorAll('#site-search').forEach(function (element) {
    element.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent the default behavior of the anchor tag
      document
        .querySelector('.block-hamilton-exposedformsearchpage-1--2')
        .classList.toggle('show');
      element.classList.toggle('show');
      addShowToClosestCloseSearch(element); // Add "show" class to the closest .close-search
      // Check if the screen width is less than 1200px
      if (window.innerWidth < 1200) {
        toggleMobileClass(); // Toggle the "p-0" class for .container
        toggleMobileNavbarBrand(); // Toggle the "px-custom" class for .navbar-brand
      }
      // Set focus to the form text input
      document.querySelector('#edit-combine--2').focus();
    });
  });

  // Toggle the mobile search bar on click
  document.querySelectorAll('#site-search-mobile').forEach(function (element) {
    element.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent the default behavior of the anchor tag
      document
        .querySelector('.block-hamilton-exposedformsearchpage-1--2')
        .classList.toggle('show');
      element.classList.toggle('show');
      addShowToClosestCloseSearch(element); // Add "show" class to the closest .close-search
      // Check if the screen width is less than 1200px
      if (window.innerWidth < 1200) {
        toggleMobileClass(); // Toggle the "p-0" class for .container
        toggleMobileNavbarBrand(); // Toggle the "px-custom" class for .navbar-brand
      }
      // Set focus to the form text input
      document.querySelector('#edit-combine--2').focus();
    });
  });

  // Add an event listener for the .close-search button
  document.querySelectorAll('.close-search').forEach(function (element) {
    element.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent the default behavior of the anchor tag
      document
        .querySelector('.block-hamilton-exposedformsearchpage-1--2')
        .classList.remove('show');
      document
        .querySelectorAll('#site-search.show')
        .forEach(function (siteSearch) {
          siteSearch.classList.remove('show');
        });
      document
        .querySelectorAll('#site-search-mobile.show')
        .forEach(function (siteSearchMobile) {
          siteSearchMobile.classList.remove('show');
        });
      removeShowFromClassCloseSearch(); // Remove "show" class from all .close-search elements
      // Check if the screen width is less than 1200px
      if (window.innerWidth < 1200) {
        toggleMobileClass(); // Toggle the "p-0" class for .container
        toggleMobileNavbarBrand(); // Toggle the "px-custom" class for .navbar-brand
      }
      // Set focus to the close-search button
      element.focus();
    });
  });

  // Handle the tab key press for form-submit button
  document.querySelectorAll('.js-form-submit').forEach(function (element) {
    element.addEventListener('keydown', function (e) {
      if (e.key === 'Tab' && !e.shiftKey) {
        e.preventDefault(); // Prevent default tab behavior
        if (isMobileScreen()) {
          // On mobile, focus on the ".wrapper-right .close-search" button
          const closeSearchMobile = document.querySelector(
            '.wrapper-right .close-search',
          );
          if (closeSearchMobile) {
            closeSearchMobile.focus();
          }
        } else {
          // On desktop, focus on the ".close-search" button
          const closeSearchDesktop = document.querySelector('.close-search');
          if (closeSearchDesktop) {
            closeSearchDesktop.focus();
          }
        }
      }
    });
  });
});
