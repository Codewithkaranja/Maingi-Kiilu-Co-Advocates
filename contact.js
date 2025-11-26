// Mobile Menu Toggle
      document
        .querySelector(".mobile-menu")
        .addEventListener("click", function () {
          document.querySelector("nav ul").classList.toggle("active");
        });

      // Form Submission
      document
        .getElementById("contactForm")
        .addEventListener("submit", function (e) {
          e.preventDefault();

          // In a real implementation, you would send the form data to a server here
          // For this example, we'll just show an alert
          alert(
            "Thank you for your message! We will get back to you within 24 hours."
          );
          this.reset();
        });

      // FAQ Toggle
      document.querySelectorAll(".faq-question").forEach((question) => {
        question.addEventListener("click", () => {
          const faqItem = question.parentElement;
          const answer = faqItem.querySelector(".faq-answer");

          // Close all other FAQ items
          document.querySelectorAll(".faq-item").forEach((item) => {
            if (item !== faqItem) {
              item.classList.remove("active");
              item.querySelector(".faq-answer").classList.remove("active");
            }
          });

          // Toggle current FAQ item
          faqItem.classList.toggle("active");
          answer.classList.toggle("active");
        });
      });

      // Smooth Scrolling for Anchor Links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          const targetId = this.getAttribute("href");
          if (targetId === "#") return;

          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: "smooth",
            });

            // Close mobile menu if open
            document.querySelector("nav ul").classList.remove("active");
          }
        });
      });

      // Header background on scroll
      window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        if (window.scrollY > 100) {
          header.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
        } else {
          header.style.backgroundColor = "var(--white)";
        }
      });