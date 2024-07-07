document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab-link");
  const tabContents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function (event) {
      event.preventDefault();
      const targetTab = this.getAttribute("data-tab");

      tabs.forEach((t) => t.classList.remove("active-tab"));
      tabContents.forEach((content) => {
        content.classList.remove("active");
        content.style.display = "none";
        setTimeout(() => (content.style.opacity = "0"), 10);
      });

      this.classList.add("active-tab");
      const activeTab = document.getElementById(targetTab);
      activeTab.classList.add("active");
      activeTab.style.display = "block";
      setTimeout(() => (activeTab.style.opacity = "1"), 10);
    });
  });
});

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
