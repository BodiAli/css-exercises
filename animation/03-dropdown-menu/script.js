const dropdownContainer = document.querySelector(".dropdown-container");
const menuTitle = document.querySelector(".menu-title");
const dropdownMenu = document.querySelector(".dropdown-menu");

menuTitle.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    if (dropdownMenu.classList.contains("drop-in")) {
      dropdownMenu.classList.add("drop-out");
      dropdownMenu.classList.remove("drop-in");
    } else {
      dropdownMenu.classList.remove("drop-out");
      dropdownMenu.classList.add("drop-in");
    }
  }
});

window.addEventListener("click", (e) => {
  if (!dropdownContainer.contains(e.target)) {
    dropdownMenu.classList.add("drop-out");
    dropdownMenu.classList.remove("drop-in");
  }
});
