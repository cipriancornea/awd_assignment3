document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".icon");
  const navResponsive = document.querySelector(".nav-responsive");
  const content = document.querySelector(".content");

  menuIcon.addEventListener("click", function () {
    navResponsive.classList.toggle("active");
    content.classList.toggle("active");
  });
});
