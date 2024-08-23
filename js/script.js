let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

document.getElementById('prev').addEventListener('click', showPrevSlide);
document.getElementById('next').addEventListener('click', showNextSlide);

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active', 'inactive');
        if (i === index) {
            slide.classList.add('active');
        } else if (i < index) {
            slide.classList.add('inactive');
        }
    });
}

function showPrevSlide() {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
    showSlide(currentSlide);
}

function showNextSlide() {
    currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
    showSlide(currentSlide);
}

showSlide(currentSlide);




const btnMore = document.querySelectorAll('.btn-more');
const webinarContent = document.querySelector('.webinar-content');
const eventoContent = document.querySelector('.evento-content');
const publicacionContent = document.querySelector('.publicacion-content');
const closeButtons = document.querySelectorAll('.novedades .content-overlay .close-btn');

btnMore.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    if (index === 0) {
      webinarContent.classList.remove('hidden');
    } else if (index === 1) {
      eventoContent.classList.remove('hidden');
    } else {
      publicacionContent.classList.remove('hidden');
    }
  });
});


closeButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    if (index === 0) {
      webinarContent.classList.add('hidden');
    } else if (index === 1) {
      eventoContent.classList.add('hidden');
    } else {
      publicacionContent.classList.add('hidden');
    }
  });
});

// Abrir y cerrar el menú hamburguesa
document.querySelector('.hamburger').addEventListener('click', function() {
  const sideMenu = document.querySelector('.side-menu');
  sideMenu.classList.toggle('open'); // Despliega o esconde el menú al hacer clic
});

document.querySelector('.close-btn').addEventListener('click', function() {
  const sideMenu = document.querySelector('.side-menu');
  sideMenu.classList.remove('open'); // Cierra el menú al hacer clic en el botón "Cerrar"
});


//Al hacer scroll, se activan o desactivan ciertos elementos, o cambian
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const logo = document.querySelector('.logo');

  if (window.scrollY > 10) {
      header.classList.add('scrolled');
      hamburgerMenu.style.display = 'block';
      document.getElementsByClassName('nav-links-container')[0].style.display = 'none';
      logo.innerHTML = '<img src="assets/logo-small.png" alt="Logo" style="width: 40px;">';
  } else {
      header.classList.remove('scrolled');
      hamburgerMenu.style.display = 'none';
      document.getElementsByClassName('nav-links-container')[0].style.display = 'flex';
      logo.innerHTML = '<img src="assets/logo.png" alt="Logo">';
  }
});


function checkScreenWidth() {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const logo = document.querySelector('.logo');
  const navLinks = document.querySelector('.nav-links-container');

  if (window.innerWidth < 1000) {
      // Mostrar el elemento en pantallas pequeñas
      logo.style.display = 'none';
      hamburgerMenu.style.display = 'flex';
      navLinks.style.display = 'none';
      
  } else {
      // Ocultar el elemento en pantallas grandes
      hamburgerMenu.style.display = 'none';
      logo.style.display = 'flex';
      navLinks.style.display = 'flex';
  }
}

// Verificar el tamaño de la pantalla al cargar la página
checkScreenWidth();

// Verificar el tamaño de la pantalla cuando se redimensiona
window.addEventListener('resize', checkScreenWidth);