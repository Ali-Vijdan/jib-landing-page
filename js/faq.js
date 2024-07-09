document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item h2");

  faqItems.forEach((item) => {
    item.addEventListener("click", function () {
      const targetContent = document.getElementById(
        this.getAttribute("data-target")
      );

      if (this.classList.contains("active")) {
        this.classList.remove("active");
        targetContent.classList.remove("active");
      } else {
        document
          .querySelectorAll(".faq-item h2")
          .forEach((h2) => h2.classList.remove("active"));
        document.querySelectorAll(".accordion-content").forEach((content) => {
          content.classList.remove("active");
        });
        this.classList.add("active");
        targetContent.classList.add("active");
      }
    });
  });
});
