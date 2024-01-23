// Obtener todas las secciones y enlaces del menú
const sections = document.querySelectorAll('section[id]');
const menuLinks = document.querySelectorAll('.menu-link');

// Función para verificar si un elemento está en el centro del viewport
function isElementInCenterViewport(el) {
  const rect = el.getBoundingClientRect();
  const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  const topThreshold = windowHeight * 0.25; // 25% from the top
  const bottomThreshold = windowHeight * 0.75; // 25% from the bottom
  return rect.top >= -topThreshold && rect.bottom <= windowHeight + bottomThreshold;
}

// Función para actualizar las clases de los enlaces del menú
function updateMenuLinks() {
  let inViewport = null;
  sections.forEach((section) => {
    if (isElementInCenterViewport(section)) {
      inViewport = section.id;
    }
  });

  menuLinks.forEach((link) => {
    link.classList.remove('w--current');
    if (inViewport && link.getAttribute('href').slice(1) === inViewport) {
      link.classList.add('w--current');
    }
  });
}

// Evento de desplazamiento para llamar a la función de actualización
window.addEventListener('scroll', updateMenuLinks);

// Llamar a la función de actualización al cargar la página
window.addEventListener('load', updateMenuLinks);



// Get the menu element
const menu = document.querySelector('.menu');

// Get the footer element
const footer = document.querySelector('footer');

// Calculate the distance between the top of the menu and the bottom of the page
const menuOffset = menu.offsetTop + menu.offsetHeight;
const footerOffset = footer.offsetTop;

// Add an event listener to the window for scroll events
window.addEventListener('scroll', function() {
  // Calculate the current scroll position
  const scrollPosition = window.scrollY + window.innerHeight;

  // Check if the scroll position is within the range of the menu and the footer
  if (scrollPosition >= menuOffset && scrollPosition <= footerOffset) {
    // Hide the menu with a fade out and move down effect
    menu.style.opacity = '1';
    menu.style.transform = 'translateY(0)';
    menu.style.transition = 'transform 0.3s';
    menu.style.visibility = 'visible';
  } else {
    // Show the menu
    menu.style.opacity = '0';    
    menu.style.transform = 'translateY(20px)';
    menu.style.transition = 'transform 0.3s';
    menu.style.visibility = 'hidden';
  }
});



  // JavaScript to show and hide the popup on every 5 visits or reloads
  document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const closePopupButton = document.getElementById("closePopup");

    // Get the visit count from localStorage, default to 0 if not present
    let visitCount = parseInt(localStorage.getItem("visitCount")) || 0;

    // Increment the visit count on every page load
    visitCount++;

    // Update the visit count in localStorage
    localStorage.setItem("visitCount", visitCount);

    // Show the popup on every 5 visits
    if (visitCount % 5 === 0) {
      popup.classList.remove("hidden");
      // Add class to body to block scroll
      document.body.style.overflow = "hidden";
    }

    // Close the popup when the close button is clicked
    closePopupButton.addEventListener("click", function () {
      popup.classList.add("hidden");
      // Remove class from body to enable scroll
      document.body.style.overflow = "auto";
    });
  });