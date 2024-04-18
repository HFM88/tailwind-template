document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("closeBtn");
  const navlinks = document.querySelector(".navlinks");

  menuBtn.addEventListener("click", function () {
    navlinks.classList.remove("hidden");
    navlinks.classList.add("flex");
  });

  closeBtn.addEventListener("click", function () {
    navlinks.classList.add("hidden");
  });

  const currentPage = window.location.pathname;

  // Get all links
  const links = document.querySelectorAll(".links a");

  // Loop through each link to check if it matches the current page
  links.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("font-bold");
    }
  });
});


