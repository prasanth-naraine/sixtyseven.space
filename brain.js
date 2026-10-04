window.addEventListener("load", () => {
    const preloader = document.querySelector("#preloader");

    setTimeout(() => {
        preloader.classList.add("hide");
    }, 2700);

    setTimeout(() => {
        preloader.style.display = "none";
    }, 4000);
});
