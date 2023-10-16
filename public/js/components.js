//Components used for dropdown menu
const dropDownMenuApp = () => {
  // naviation dropdown
  const dropdownButton = document.querySelectorAll(".cc-nav-link");
  const dropdownMenu = document.querySelectorAll(".cc-dropdown-menu");

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





const initModule = () => {
  dropDownMenuApp();
};

document.addEventListener("DOMContentLoaded", initModule);
