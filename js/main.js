window.addEventListener("DOMContentLoaded", () => {
    const MainSlider = new Swiper(".MainSlider", {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});
