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