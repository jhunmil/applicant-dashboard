//Components used for dropdown menu
const dropDownMenuApp = () => {
  // naviation dropdown
  let dropdownButton = document.querySelectorAll(".cc-nav-link");
  let dropdownMenu = document.querySelectorAll(".cc-dropdown-menu");
  let allLink = document.querySelectorAll(".cc-dropdown-menu ul>li a,.cc-dropdown-menu ul>li button");
  let isDropdownOpen = false;



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

  //Close hide menu dropdown once link is clicked
  allLink.forEach((link, index) => {
    link.addEventListener("click", (event) => {
      let dropdownMenu = link.closest(".cc-dropdown-menu");
      dropdownMenu.classList.add('hidden');
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
  let allLink = document.querySelectorAll(".cc-more-toggle-content ul>li a,.cc-more-toggle-contentul>li button");
  let isDropdownOpen = false;



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

  
 //Close hide menu dropdown once link is clicked
 allLink.forEach((link, index) => {
  link.addEventListener("click", (event) => {
    let dropdownMenu = link.closest(".cc-more-toggle-content");
    dropdownMenu.classList.add('hidden');
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


//show message Box for message.html
const showMessageSection = () => {

  let element = document.getElementById("cc-message-container"); // Replace with the ID of your element
  element.classList.remove("hidden");


}


const disableMessageBox = () => {
  let element = document.getElementById("cc-message-editor"); // Replace with the ID of your element
  if (element && !element.classList.contains("disabled")) {
    element.classList.add("disabled");
    //  element.disabled = true;
  }
}

const enableMessageBox = () => {


  let element = document.getElementById("cc-message-editor");
  element.classList.remove("disabled");

  element.scrollIntoView();
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });
  return false;

}


const initModule = () => {
  dropDownMenuApp();
  dropdownMore();
};

document.addEventListener("DOMContentLoaded", initModule);