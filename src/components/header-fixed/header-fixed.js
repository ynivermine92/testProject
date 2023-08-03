const headerFixed = document.querySelector(".header");
window.addEventListener("scroll", () => {
  window.pageYOffset > 0
    ? headerFixed.classList.add("fixed")
    : headerFixed.classList.remove("fixed");
});
