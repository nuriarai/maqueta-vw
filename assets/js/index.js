const toggleView = document.querySelector(".widget__view-switcher");
toggleView.addEventListener("change", (e) => {
  toggleView.setAttribute("aria-checked", toggleView.checked);
  document.querySelector(".widget__list").classList.toggle("widget__cards");
});
