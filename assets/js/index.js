const toggleView = document.querySelector(".widget__view-switcher");
toggleView.addEventListener("change", (e) => {
  toggleView.setAttribute("aria-checked", toggleView.checked);
  document.querySelector(".widget__list").classList.toggle("widget__cards");
});

/* sorting */

const toggleSort = document.querySelector(".widget__sort-switcher");

toggleSort.addEventListener("click", (e) => {
  const container = document.querySelector(".widget__list");

  container.classList.toggle("alfabetical");

  if (container.classList.contains("alfabetical")) {
    toggleSort.textContent = "Sort by position";
    let key = (a) => a.querySelector(".item__title").textContent.trim();
    Array.from(container.children)
      .sort((a, b) => key(a).localeCompare(key(b)))
      .forEach((child) => container.appendChild(child));
  } else {
    toggleSort.textContent = "Sort Alphabetically";
    let key = (a) => a.querySelector(".item__order").textContent.trim();
    Array.from(container.children)
      .sort((a, b) => key(a).localeCompare(key(b)))
      .forEach((child) => container.appendChild(child));
  }
});
