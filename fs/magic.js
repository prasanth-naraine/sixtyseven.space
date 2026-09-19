// -------------------------------------------------------------------------
setInterval(function () {
    const preloader = document.querySelector('#preloader');
    preloader.classList.add('hide');
}, 900);

// -------------------------------------------------------------------------
// menu
const hamClose = document.querySelector(".navbar-clickable");
const menuShow = document.querySelector(".responsive-lap-mobile");

hamClose.addEventListener("click", function () {
    menuShow.classList.toggle("active");
    hamClose.classList.toggle("active");

    // const audio = new Audio("./mp3/music1.mp3");
    // audio.play();
});

// -------------------------------------------------------------------------
// marquee
function createMarquee(track, speed = 1) {
    let position = 0;

    // Ã°Å¸â€Â Duplicate content for seamless loop
    track.innerHTML += track.innerHTML;

    const trackWidth = track.scrollWidth / 2;

    function animate() {
        position -= speed;

        // Reset when half (original content) is scrolled
        if (Math.abs(position) >= trackWidth) {
            position = 0;
        }

        track.style.transform = `translateX(${position}px)`;

        requestAnimationFrame(animate);
    }

    animate();
}

// Apply to both tracks
const track = document.querySelector(".marquee-track");
const track2 = document.querySelector(".marquee-footer .marquee-track");

if (track) createMarquee(track, 1);
if (track2) createMarquee(track2, 1);


// -------------------------------------------------------------------------
// testimonal-swiper
const swiperTestimonial = new Swiper('.swiper-testimonial', {
    loop: false,
    speed: 700,
    slidesPerView: 1,
    grabCursor: true,
    centeredSlides: false,
    spaceBetween: 0,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
        pauseOnMouseEnter: false
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    breakpoints: {
        800: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1700: {
            slidesPerView: 3.5,
            spaceBetween: 25,
        }
    },
});