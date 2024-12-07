//---------Toggle icon navbar-----------------

let menuIcon = document.querySelector('#menu-icon'); // Using '#' for ID selector
let navbar = document.querySelector('.navbar'); // Using '.' for class selector

menuIcon.onclick = () => { // Correct syntax
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active');
}

//--------Scroll section active link----------------

let sections = document.querySelectorAll('section'); // Selecting multiple sections
let navLinks = document.querySelectorAll('header nav a'); // Selecting multiple nav links

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => { // Using forEach correctly
        link.classList.remove('active');
        if (link.getAttribute('href').includes(id)) {
          link.classList.add('active');
        }
      });
    }
  });

  //----------Sticky navbar----------------

  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  //--------------Remove toggle icon and navbar----------
  menuIcon.classList.remove('fa-xmark');
  navbar.classList.remove('active');
}



  //----------scroll reval----------------


ScrollReveal({

  distance: '80px',
  duration: 2000,
  delay:200,
});

ScrollReveal().reveal('.home-content, heading',{ origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'buttom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right'});



// //----------typed js----------------


// var typed = new Typed('.multiple-text', {

//   strings: ['Frontend Developer', 'Web Designer', 'Youtuber'],

//   typeSpeed: 70,
//   backSpeed: 70,
//   backDelay: 1000,
//   loop: true,

// });
