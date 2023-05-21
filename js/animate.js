//This is ScrollReveal code
ScrollReveal({
  reset: true,
  distance: "60px",
  duration: "2500",
  delay: 400,
});

ScrollReveal().reveal(".top2, .side-logo, .top-clutch", { delay: 500, origin: "left" });
ScrollReveal().reveal(".top3, .card1", { delay: 600, origin: "bottom" });
ScrollReveal().reveal(".about-info, .clutch", { delay: 700, origin: "right" });
ScrollReveal().reveal(".alpha1, .awards1", { delay: 400, origin: "left", interval:"300"});

//This is Typed Text Animation Code
const typed = new Typed('#typed-text', {
  strings: ['Web Application','Mobile Application.', 'Fintech System.'],
  typeSpeed: 50,
  backSpeed: 20,
  loop: true
});

