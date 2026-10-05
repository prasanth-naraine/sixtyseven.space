// -------------------------------------------------------------------------
// preloader
window.addEventListener("load", () => {
  const preloader = document.querySelector("#preloader");

  setTimeout(() => {
    preloader.classList.add("hide");
  }, 2700);

  setTimeout(() => {
    preloader.style.display = "none";
  }, 4500);
});

// -------------------------------------------------------------------------
// Register scroll event listener on the global window
window.addEventListener("scroll", () => {
  // Capture current pixels scrolled from top
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  // Calculate total scrollable window height minus client viewport height
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  // Prevent division by zero if page is not scrollable
  const scrolledPercentage = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

  // Dynamically update progress bar width using DOM style manipulation
  document.getElementById("myProgressBar").style.width = `${scrolledPercentage}%`;
});

// -------------------------------------------------------------------------
// FAQ
const faqItems = document.querySelectorAll(".q-a-div");

faqItems.forEach(item => {

  // item.setAttribute("data-aos", "fade-up");

  item.addEventListener("mouseenter", () => {
    faqItems.forEach(el => {
      if (el !== item) {
        el.classList.remove("active");
      }
    });

    item.classList.add("active");
  });

  item.addEventListener("mouseleave", () => {
    item.classList.remove("active");
  });
});
