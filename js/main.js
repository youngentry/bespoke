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

    const mainSlogan = new Swiper(".mainSlogan", {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

    mainSlider.controller.control = mainSlogan;

    // const smartP = document.querySelector(".Smart p:nth-child(1)");
    // smartP.addEventListener("click", function () {
    //     this.classList.add("on");
    // });

    const smartP = document.querySelectorAll(".Smart .left>p");
    let idx = 0;
    smartP.forEach((i, index) =>
        i.addEventListener("click", (e) => {
            idx = index;
            smartP.forEach((i) => {
                i.classList.remove("on");
            });
            i.classList.add("on");

            const txt = document.querySelectorAll(".Smart .txt");
            txt.forEach((j) => j.classList.remove("on"));
            let txtIdx = txt[idx];
            txtIdx.classList.add("on");
        })
    );
});
