window.addEventListener("DOMContentLoaded", () => {
    const mainSlider = new Swiper(".mainSlider", {
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
    // const mainSlogan = new Swiper(".mainSlogan", {
    //     loop: true,
    //     autoplay: {
    //         delay: 2500,
    //         disableOnInteraction: false,
    //     },
    //     touchRatio: 0,
    // });

    // mainSlider.controller.control = mainSlogan;

    const smartP = document.querySelectorAll(".Smart .left>p");
    const txt = document.querySelectorAll(".Smart .txt");
    smartP.forEach((i, idx) =>
        i.addEventListener("click", (e) => {
            smartP.forEach((i) => {
                i.classList.remove("on");
            });
            i.classList.add("on");

            txt.forEach((j) => j.classList.remove("on"));
            let txtIdx = txt[idx];
            txtIdx.classList.add("on");
        })
    );

    const storySlider = new Swiper(".storySlider", {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "2",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 500,
            modifier: 1,
            slideShadows: false,
        },
        // pagination: {
        //     el: ".swiper-pagination",
        // },
    });
});
