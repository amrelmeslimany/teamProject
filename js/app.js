// Swiper
$(document).ready(function() {
    // Consts
    const allSectionsName = $("#fullpage .section"),
        arrayAllSections = [],
        boxes_about = $(".services .second-side .box-ideas"),
        ourstory_present_img = $(".ourstory .presentation .img-present"),
        ourstory_present_paragraph = $(".ourstory .presentation .present-text"),
        ourstory_present_buttons = $(".ourstory .buttons-content button"),
        btn_back_to_top = $(".back-to-top");

    //  Lets
    height_1 = 0;
    // Get Classes and put in  array
    allSectionsName.each(function() {
        arrayAllSections.push($(this)[0].classList[1].toUpperCase())
    });
    // Full Page Animation
    $('#fullpage').fullpage({
        //options here
        autoScrolling: true,
        navigation: true,
        navigationTooltips: arrayAllSections,
        responsiveSlides: true,
        autoScrolling: false
    });
    // Make Height equals in about section
    boxes_about.each(function() {
        // What is the max
        while ($(this).innerHeight() > height_1) {
            height_1 = $(this).innerHeight();
        }
    });
    boxes_about.css({
        height: height_1 + "px"
    });
    // Swiper
    let swiper = new Swiper(".swiper-container", {

        spaceBetween: 50,
        breakpoints: {
            // when window width is >= 320px
            200: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            380: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            576: {
                spaceBetween: 10,
                slidesPerView: 3,
            }
        },
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
        }
    });
    /*  Our Story */
    // Presentarion
    const ourStoryJson = [{
            "date": "2008-2014",
            "img": "../public/Our Story/1.jpg",
            "contnet": "(Text Here)"
        },
        {
            "date": "2014-2016",
            "img": "../public/Our Story/2.jpg",
            "contnet": "(Text Here)"
        },
        {
            "date": "2016-2019",
            "img": "../public/Our Story/3.jpg",
            "contnet": "(Text Here)."
        },
        {
            "date": "2019-Now",
            "img": "../public/Our Story/4.jpg",
            "contnet": "(Text Here)"
        }
    ];
    ourstory_present_buttons.each(function() {
        $(this).on("click", function() {
            $(this).siblings("button").removeClass("active");
            $(this).addClass("active");
            ourStoryJson.forEach(e => {
                if (e.date == $(this).data("presentdates")) {
                    // Change Img
                    ourstory_present_img.attr("src", e.img);
                    // Change Content
                    ourstory_present_paragraph.text(e.contnet);
                }
            });
        });
    });
    // Back to top button
    btn_back_to_top.on("click", () => {
        $("html,body").animate({
            scrollTop: 0
        }, 800);
    });
});