
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
if(menuIcon){
    menuIcon.onclick = () => {
        if(!navbar) return;
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
}

// close button behavior (hides the mobile nav)
if(closeIcon){
    closeIcon.onclick = () => {
        if(menuIcon) menuIcon.classList.remove('bx-x');
        if(navbar) navbar.classList.remove('active');
    };
}

// scroll section active link//
let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

// Button loader: attach a delegated click handler to show a transient loading state
document.addEventListener('click', function(e){
    const btn = e.target.closest('.btn');
    if(!btn) return;

    // don't interfere with links that navigate away immediately if they have external targets
    // show loader and remove after 1.5s
    btn.classList.add('loading');
    btn.setAttribute('aria-busy', 'true');

    setTimeout(() => {
        btn.classList.remove('loading');
        btn.removeAttribute('aria-busy');
    }, 1500);
});

// Stats counters and progress bars animation when visible
// function animateStats() {
//     const stats = document.getElementById('stats');
//     if (!stats) return;

//     const counters = stats.querySelectorAll('.counter');
//     const bars = stats.querySelectorAll('.progress-bar');

//     counters.forEach(counter => {
//         const target = +counter.getAttribute('data-target') || 0;
//         const duration = 1500;
//         let start = 0;
//         const stepTime = Math.max(Math.floor(duration / target), 20);

//         const timer = setInterval(() => {
//             start += Math.ceil(target / (duration / stepTime));
//             if (start >= target) {
//                 counter.textContent = target;
//                 clearInterval(timer);
//             } else {
//                 counter.textContent = start;
//             }
//         }, stepTime);
//     });

//     bars.forEach(bar => {
//         const pct = bar.getAttribute('data-progress') || '0';
//         bar.style.width = pct + '%';
//     });
// }


  // Skill bar animation
  const bars = document.querySelectorAll('.bar-fill');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.width = entry.target.dataset.width;
      }
    });
  }, {threshold:0.5});
  bars.forEach(bar => observer.observe(bar));

// Use IntersectionObserver to trigger animateStats once when visible
document.addEventListener('DOMContentLoaded', () => {
    const stats = document.getElementById('stats');
    if (!stats) return;
    const obs = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 });
    obs.observe(stats);
});

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
if(menuIcon) menuIcon.classList.remove('bx-x');
if(navbar) navbar.classList.remove('active');

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

// Skills progress bars animation (supports multiple .skills sections)
function animateSkills(container){
    if(!container) return;
    const fills = container.querySelectorAll('.progress-fill');
    const percEls = container.querySelectorAll('.skill-percent');
    fills.forEach((fill, idx) => {
        const pct = parseInt(fill.getAttribute('data-percent')) || 0;
        fill.style.width = pct + '%';

        const el = percEls[idx];
        if(!el) return;
        let current = 0;
        const duration = 1200;
        const step = Math.max(Math.floor(duration / Math.max(pct,1)), 15);
        const timer = setInterval(()=>{
            current += 1;
            if(current >= pct){
                el.textContent = pct + '%';
                clearInterval(timer);
            } else {
                el.textContent = current + '%';
            }
        }, step);
    });
}

document.addEventListener('DOMContentLoaded', ()=>{
    const skillSections = document.querySelectorAll('.skills');
    if(!skillSections || skillSections.length === 0) return;
    const obs = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                animateSkills(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    skillSections.forEach(s => obs.observe(s));
});