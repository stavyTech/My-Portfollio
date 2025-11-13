
// let message = 'hello';
// console.log(message);

// const message2 = 'i am connected';
// alert(message2);

document.title ='portfolio';


/****** toggle icon narv bar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// create and append a close icon into the navbar for mobile
let closeIcon = document.createElement('i');
closeIcon.className = 'bx bx-x';
closeIcon.id = 'close-icon';
// append at end of navbar so it sits inside mobile nav
if(navbar) navbar.appendChild(closeIcon);

/**********to make the togle bar active************ */
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// close button behavior (hides the mobile nav)
if(closeIcon){
    closeIcon.onclick = () => {
        if(menuIcon) menuIcon.classList.remove('bx-x');
        if(navbar){
            navbar.classList.remove('active');
            navbar.style.removeProperty('display');
        }
        if(navbarLinks) navbarLinks.forEach(a => a.style.removeProperty('display'));
    };
}

// scroll section active link//
let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            // remove active class from all nav links
            navlinks.forEach(link => link.classList.remove('active'));
            // add active to the matching anchor: header nav a[href="#id"]
            let selector = 'header nav a[href="#' + id + '"]';
            let activeLink = document.querySelector(selector);
            if(activeLink) activeLink.classList.add('active');
        };
    });

    // ///// sticky navbar//////
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100)


// *************************remove toggle icon and navbar link(scroll)*******************************///
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};

// *****************scroll reveal******************//
ScrollReveal({
    //  reset: true, 
     distance: '80px',
     duration: 2000,
    display: 200,
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom'}); ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
 ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});

//************typed js*****************/
const typed = new Typed('.multiple-text', {
  strings: ['front-end developer', 'YouTuber', 'Blogger',],
  TypedSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});