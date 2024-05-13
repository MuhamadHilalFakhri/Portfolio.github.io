/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalClose = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    modal(i);
  });
});

modalClose.forEach((mc) => {
  mc.addEventListener("click", () => {
    modalViews.forEach((mv) => {
      mv.classList.remove("active-modal");
    });
  });
});
/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

/* Link active work */
const linkWork = document.querySelectorAll(".work__item");

function activeWork() {
  linkWork.forEach((l) => l.classList.remove("active-work"));
  this.classList.add("active-work");
}

linkWork.forEach((l) => l.addEventListener("click", activeWork));

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav__menu a");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute("id");

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        if (link.getAttribute("href") === "#" + sectionId) {
          link.classList.add("active-link");
        } else {
          link.classList.remove("active-link");
        }
      });
    }
  });
};

window.addEventListener("scroll", scrollActive);

/*=============== LIGHT DARK THEME ===============*/

const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "bx-sun";

// Mendapatkan tema terpilih sebelumnya (jika pengguna sudah memilih)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// Mendapatkan tema saat ini dengan memeriksa apakah class dark-theme ada di body
const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "light" : "dark";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx-sun" : "bx-moon";

// Memeriksa apakah pengguna sebelumnya memilih tema
if (selectedTheme) {
  // Jika ada tema sebelumnya, kita terapkan kembali tema tersebut
  document.body.classList[selectedTheme === "light" ? "add" : "remove"](
    lightTheme
  );
  themeButton.classList[selectedIcon === "bx-sun" ? "add" : "remove"](
    iconTheme
  );
}

// Mengaktifkan/menonaktifkan tema secara manual dengan tombol
themeButton.addEventListener("click", () => {
  // Toggle light theme/icon theme
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);
  // Menyimpan tema dan ikon saat ini yang dipilih oleh pengguna
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  //reset: true,
});

sr.reveal(".home__data");
sr.reveal(".home__handle", { delay: 700 });
sr.reveal(".home__social, .home__scroll", { delay: 900, origin: "bottom" });
