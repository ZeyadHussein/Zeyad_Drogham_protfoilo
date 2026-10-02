console.log("Portfolio Loaded Successfully 🚀");

// Active navbar link toggling
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});

// Smooth scroll for internal links
document.querySelectorAll("a[href^='#']").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Scroll-to-Top Button
const scrollBtn = document.createElement("button");
scrollBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
scrollBtn.classList.add("scroll-top-btn");
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Scroll Reveal Animation for Sections
const sections = document.querySelectorAll(".section");

const revealOnScroll = () => {
  sections.forEach((sec) => {
    const sectionTop = sec.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100) {
      sec.classList.add("show-section");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();