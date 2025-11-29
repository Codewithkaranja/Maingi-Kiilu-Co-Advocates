 // Mobile menu functionality
      document
        .querySelector(".mobile-menu")
        .addEventListener("click", function () {
          const nav = document.querySelector("nav ul");
          nav.classList.toggle("active");
        });

      // Team member hover effects
      document.querySelectorAll(".team-member").forEach((member) => {
        member.addEventListener("mouseenter", function () {
          this.style.transform = "translateY(-15px) scale(1.02)";
        });

        member.addEventListener("mouseleave", function () {
          this.style.transform = "translateY(0) scale(1)";
        });
      });

      // Structure member hover effects
      document.querySelectorAll(".structure-member").forEach((member) => {
        member.addEventListener("mouseenter", function () {
          this.style.transform = "translateY(-8px)";
        });

        member.addEventListener("mouseleave", function () {
          this.style.transform = "translateY(0)";
        });
      });