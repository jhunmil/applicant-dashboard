const mainSidebarToggle = () => {
    const sidebarToggler = document.querySelector("#cc-mainAside-toggler");
    const mainSidebarSection = document.querySelector("#cc-mainAside");
    const mainConten = document.getElementById('cc-mainContent');

    const toggleMenu = () => {
        mainSidebarSection.classList.toggle("is-shrink");
        sidebarToggler.classList.toggle("is-shrink");
        mainConten.classList.toggle("is-shrink");
    }
    
    sidebarToggler.addEventListener('click', toggleMenu)
}

const mainSidebarmToggle = () => {
  const sidebarToggler = document.querySelector("#cc-mainAside-mtoggler");
  const mainSidebarSection = document.querySelector("#cc-mainAside");
  const mainConten = document.getElementById('cc-mainContent');
  
  const toggleMenu = () => {
      mainSidebarSection.classList.toggle("is-shrink");
      sidebarToggler.classList.toggle("is-shrink");
      mainConten.classList.toggle("is-shrink");
    

      const navIcon = sidebarToggler.getElementsByClassName('las');
  
      Array.from(navIcon).forEach(targetElement => {
       // targetElement.classList.toggle("la-times");
      });

  }
  
  sidebarToggler.addEventListener('click', toggleMenu)
}

const initApp = () => {
    mainSidebarToggle();
    mainSidebarmToggle();
};
  
  document.addEventListener("DOMContentLoaded", initApp);



  window.addEventListener('load', function() {

    var sidebarToggler = document.querySelector("#cc-mainAside-toggler");
    var mainSidebarSection = document.querySelector("#cc-mainAside");
    var mainConten = document.getElementById('cc-mainContent');

     if (window.innerWidth < 768) {
       sidebarToggler.classList.add('is-shrink');
       mainSidebarSection.classList.add('is-shrink');
       mainConten.classList.add("is-shrink");
     }
   });
  
 
  window.addEventListener('resize', function() {
    var sidebarToggler = document.querySelector("#cc-mainAside-toggler");
    var mainSidebarSection = document.querySelector("#cc-mainAside");
    var mainConten = document.getElementById('cc-mainContent');

 
 
    function isMobileOrTablet() {
     // Check if the user agent matches a mobile phone or tablet
     return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
   }
   
   if (isMobileOrTablet()) {
 
    if (window.innerWidth < 768) {
      sidebarToggler.classList.add('is-shrink');
      mainSidebarSection.classList.add('is-shrink');
      mainConten.classList.add("is-shrink");
    } 
   } else {
     if (window.innerWidth < 768) {
       sidebarToggler.classList.add('is-shrink');
       mainSidebarSection.classList.add('is-shrink');
       mainConten.classList.add("is-shrink");
     } 
   }
 
    
  });
 