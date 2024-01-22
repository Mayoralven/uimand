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