function toggleHamburger() {
  const toggle = document.querySelector("nav .toggle");
  const menu = document.querySelector("nav menu");
  const itemMenu = document.querySelectorAll("menu a");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("change");
    menu.classList.toggle("slide");
  });
  itemMenu.forEach((item) => {
    item.addEventListener("click", () => {
      menu.classList.remove("slide");
      toggle.classList.remove("change");
    });
  });
}

window.onscroll = () => {
  const buttonToTop = document.querySelector(".go-top");
  if (window.scrollY >= 50) {
    buttonToTop.style.display = "flex";
    buttonToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0 });
    }) 
  } else {
    buttonToTop.style.display = "none";
  }
}
  
document.querySelector("nav") && toggleHamburger();
