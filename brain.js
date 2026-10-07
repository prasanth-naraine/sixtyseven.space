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

// -------------------------------------------------------------------------
// process steps
const processSteps = document.querySelectorAll(".process-steps");

processSteps.forEach((step) => {
  step.addEventListener("mouseenter", () => {
    processSteps.forEach((item) => {
      item.classList.remove("active");
    });

    step.classList.add("active");
  });
});

// -------------------------------------------------------------------------
const skills = document.querySelectorAll(".skill-set img");

skills.forEach((img) => {
    img.addEventListener("mouseenter", () => {
        const tooltip = document.createElement("div");

        tooltip.className = "skill-tooltip";
        tooltip.textContent = img.alt;

        document.body.appendChild(tooltip);

        const rect = img.getBoundingClientRect();

        tooltip.style.left = `${rect.left + rect.width / 2}px`;
        tooltip.style.top = `${rect.top - 8}px`;

        img._tooltip = tooltip;
    });

    img.addEventListener("mouseleave", () => {
        img._tooltip?.remove();
        img._tooltip = null;
    });
});
