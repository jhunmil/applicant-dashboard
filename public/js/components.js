//Components used for dropdown menu
const dropDownMenuApp = () => {
  // naviation dropdown
  let dropdownButton = document.querySelectorAll(".cc-nav-link");
  let dropdownMenu = document.querySelectorAll(".cc-dropdown-menu");

  let isDropdownOpen = false; 

 

  dropdownButton.forEach((button, index) => {
    button.addEventListener("click", () => {
      isDropdownOpen = !isDropdownOpen;
/*
      if (isDropdownOpen) {
        dropdownMenu[index].classList.remove("hidden");
      
    
      } else {
        dropdownMenu[index].classList.add("hidden");
        isDropdownOpen = false; 
      } */
      if (dropdownMenu[index].classList.contains('hidden')) {
        dropdownMenu[index].classList.remove('hidden');
    } else {
      dropdownMenu[index].classList.add('hidden');
    }



    });
  });

  window.addEventListener("click", (event) => {
    dropdownButton.forEach((button, index) => {
      if (
        !button.contains(event.target) &&
        !dropdownMenu[index].contains(event.target)
      ) {
        dropdownMenu[index].classList.add("hidden");
        isDropdownOpen = false;
      }
    });
  });
};


const dropdownMore = () => {

  // moreButton toggle
  let dropdownButton = document.querySelectorAll('.cc-moretoggle-btn');
  let dropdownMenu = document.querySelectorAll('.cc-more-toggle-content');

  let isDropdownOpen = false; 

 console.log(dropdownButton);

  dropdownButton.forEach((button, index) => {

    button.addEventListener("click", () => {
      isDropdownOpen = !isDropdownOpen;

      if (dropdownMenu[index].classList.contains('hidden')) {
        dropdownMenu[index].classList.remove('hidden');
    } else {
      dropdownMenu[index].classList.add('hidden');
    }



    });
  });

  window.addEventListener("click", (event) => {
    dropdownButton.forEach((button, index) => {
      if (
        !button.contains(event.target) &&
        !dropdownMenu[index].contains(event.target)
      ) {
        dropdownMenu[index].classList.add("hidden");
        isDropdownOpen = false;
      }
    });
  });
};




const initModule = () => {
  dropDownMenuApp();
  dropdownMore();
};

document.addEventListener("DOMContentLoaded", initModule);
