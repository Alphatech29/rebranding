// Header scroll function
window.addEventListener('scroll', function() {
   const header = document.querySelector('.nav-header');
   const scrolled = window.scrollY > 0;
    header.classList.toggle('scrolled', scrolled);
  });

//Code for counting section
  let valueDisplays = document.querySelectorAll(".num1");
  let interval = 4000;
  
  valueDisplays.forEach(valueDisplay => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let setValue = startValue; 
    let counter = setInterval(function(){
      setValue += 1;
      valueDisplay.textContent = setValue + "+";
      if(setValue === endValue){ 
        clearInterval(counter);
      }
    }, duration);
  });
  
   // Code that update the years of founding
   const currentYear = new Date().getFullYear();
   let foundingYear = 2009;

   function updateYearsSinceFounding() {
     const yearsSinceFounding = currentYear - foundingYear;
     document.getElementById("yearsSinceFounding").textContent = yearsSinceFounding;
   }
   updateYearsSinceFounding(); 
   setInterval(() => {
     foundingYear++;
     updateYearsSinceFounding(); 
   }, 1000 * 60 * 60 * 24 * 365);

   function updateYearsSinceFounding() {
    const yearsSinceFounding = currentYear - foundingYear;
    const yearsText = yearsSinceFounding >= 0 ? `${yearsSinceFounding}+` : "";
    document.getElementById("yearsSinceFounding").textContent = yearsText;
  }
  

  