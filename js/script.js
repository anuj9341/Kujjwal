document.addEventListener("DOMContentLoaded", () => {

  /* HAMBURGER */
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });

  /* ACTIVE MENU */
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (scrollY >= top) {
        current = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });
    // Close hamburger menu on scroll (mobile)
  // window.addEventListener("scroll", () => {
  //   if (navMenu.classList.contains("active")) {
  //     navMenu.classList.remove("active");
  //   }
  // });
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (Math.abs(window.scrollY - lastScrollY) > 10) {
      navMenu.classList.remove("active");
    }
    lastScrollY = window.scrollY;
  });
});