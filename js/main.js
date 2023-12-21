const toggleBtn = document.querySelector(".open-nav");
const closeBtn = document.querySelector(".close-nav");
const sidebar = document.querySelector(".side-menu");

toggleBtn.addEventListener("click", function () {
  if (sidebar.classList.contains("toggle-nav")) {
    sidebar.classList.remove("toggle-nav");
  } else {
    sidebar.classList.add("toggle-nav");
  }
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("toggle-nav");
});