function handleToggleMenu() {
  const toggle = document.querySelector("nav .toggle");
  const menu = document.querySelector("nav menu");
  const linkMenu = document.querySelectorAll("nav menu a");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("change");
    menu.classList.toggle("slide");
  });
  linkMenu.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("slide");
      toggle.classList.remove("change");
    });
  });
}

window.addEventListener('scroll', () => {
  const buttonToTop = document.querySelector(".go-top");
  if (window.scrollY >= 50) {
    buttonToTop.style.display = "flex";
    buttonToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0 });
    });
  } else buttonToTop.style.display = "none";
})

document.querySelector("nav") && handleToggleMenu();
