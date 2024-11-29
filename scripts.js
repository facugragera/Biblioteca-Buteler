//burguer
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');

burger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    burger.classList.toggle('toggle');
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});


// para carrusel
let counter = 0;

function updateNavButtons() {
    navButtons.forEach((button, index) => {
        if (index === counter) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

function updateCarousel() {
    const size = document.querySelector('.carousel-slide img').clientWidth;
    document.querySelector('.carousel-slide').style.transition = "transform 0.5s ease-in-out";
    document.querySelector('.carousel-slide').style.transform = 'translateX(' + (-size * counter) + 'px)';
    updateNavButtons();
}

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const navButtons = document.querySelectorAll('.nav-button');

prevButton.addEventListener('click', () => {
    counter = (counter <= 0) ? navButtons.length - 1 : counter - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    counter = (counter >= navButtons.length - 1) ? 0 : counter + 1;
    updateCarousel();
});

navButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        counter = index;
        updateCarousel();
    });
});

// Initialize the nav buttons
updateCarousel();


  document.getElementById("miImagen").addEventListener("click", function() {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSchrMONfwUd1wJBU5djlCN0g-_ZEemu92__3k-LofwbkYE_1w/viewform", "_blank");
  });

/* para calendario eventos */
/*document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.services-content h3');
    
    sections.forEach(section => {
        section.addEventListener('click', () => {
            section.nextElementSibling.classList.toggle('active');
        });
    });
});*/




//para espacio
// Script para inicializar el mapa (usa Google Maps o similar)
// Ejemplo básico:
/*function initMap() {
    var location = { lat: -34.397, lng: 150.644 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: location
    });
    var marker = new google.maps.Marker({ position: location, map: map });
}*/

/*
function iniciarMap(){
	var coord = {lat: -31.4216484,lng: -64.1891174};
	var map = new google.maps.Map(document.getElementById('map'),{
		zoom: 10,
		center: coord
	});
	var marker = new google.maps.Marker({
		position: coord,
		map: map
	});
}
*/
