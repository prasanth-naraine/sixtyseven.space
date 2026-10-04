// -------------------------------------------------------------------------
// preloader
window.addEventListener("load", () => {
  const preloader = document.querySelector("#preloader");

  setTimeout(() => {
    preloader.classList.add("hide");
  }, 2700);

  setTimeout(() => {
    preloader.style.display = "none";
  }, 3500);
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