document.addEventListener("DOMContentLoaded", function () {
  /* ============ Variables ============ */
  const mobileMenu = document.querySelector(".mobile-menu");
  const navMenu = document.querySelector("nav ul");
  const header = document.querySelector("header");
  const heroSection = document.querySelector(".hero");
  const typewriterSpan = document.getElementById("typewriter");
  const statNumbers = document.querySelectorAll(".stat-number");

  /* ============ Mobile Menu Toggle ============ */
  mobileMenu?.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  /* ============ Smooth Scrolling ============ */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetSection = document.querySelector(this.getAttribute("href"));
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 70,
          behavior: "smooth",
        });
        navMenu.classList.remove("active");
      }
    });
  });

  /* ============ Header Background Change on Scroll ============ */
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 100);
  });

  /* ============ Hero Background Slider ============ */
  const bgImages = [
    "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=2070&q=80')",
    "url('https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&w=2070&q=80')",
    "url('https://plus.unsplash.com/premium_photo-1698084059560-9a53de7b816b?auto=format&fit=crop&w=2070&q=80')",
    "url('https://images.unsplash.com/photo-1589216532372-1c2a367900d9?auto=format&fit=crop&w=2070&q=80')",
  ];
  let bgIndex = 0;

  function changeHeroBg() {
    heroSection.style.backgroundImage = bgImages[bgIndex];
    bgIndex = (bgIndex + 1) % bgImages.length;
  }

  changeHeroBg();
  setInterval(changeHeroBg, 5000);

  /* ============ Typewriter Effect ============ */
  const textArray = [
    "Trusted Legal Experts",
    "Strategic Counsel",
    "Strong Representation",
    "Protecting Your Business",
    "Your Rights, Secured",
    "Solutions That Deliver",
    "Confidence in Every Case",
    "Legal Excellence",
  ];

  let txtIndex = 0;
  let charIndex = 0;

  function typeEffect() {
    if (charIndex < textArray[txtIndex].length) {
      typewriterSpan.textContent += textArray[txtIndex].charAt(charIndex++);
      setTimeout(typeEffect, 70);
    } else {
      setTimeout(eraseEffect, 2000);
    }
  }

  function eraseEffect() {
    if (charIndex > 0) {
      typewriterSpan.textContent = textArray[txtIndex].substring(0, --charIndex);
      setTimeout(eraseEffect, 40);
    } else {
      txtIndex = (txtIndex + 1) % textArray.length;
      setTimeout(typeEffect, 250);
    }
  }

  typeEffect();

  /* ============ Count Up Stats ============ */
  function animateCountUp(el) {
    const target = +el.getAttribute("data-target");
    let current = 0;
    const increment = target / 100;

    function update() {
      current += increment;
      if (current < target) {
        el.textContent = Math.ceil(current);
        requestAnimationFrame(update);
      } else {
        el.textContent = target + "+";
      }
    }
    update();
  }

  let started = false;
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !started) {
        statNumbers.forEach((num) => animateCountUp(num));
        started = true;
      }
    },
    { threshold: 0.5 }
  );

  observer.observe(document.querySelector(".stats"));

  /* ============ Swiper - Services (3D Coverflow) ============ */
  new Swiper(".services-swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: { delay: 2500, disableOnInteraction: false },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /* ============ Swiper - Client Logos Slider ============ */
  new Swiper(".clientsSwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 150,
      modifier: 2,
      slideShadows: false,
    },
    autoplay: { delay: 2000, disableOnInteraction: false },
  });
});
