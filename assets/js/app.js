$(function () {

    var nav = $("#nav"),
        introH = $("#intro").innerHeight(),
        introW = $("#intro").innerWidth(),
        scrollOffset = $(window).scrollTop();

    /* Tabs */
    var tabsBtn = document.querySelectorAll(".tabs__nav-btn");
    var tabsItems = document.querySelectorAll(".tabs__item");

    tabsBtn.forEach(onTubClick);

    function onTubClick(item) {
        item.addEventListener("click", function() {
            event.preventDefault();

            let currentBtn = item;
            let tabId = currentBtn.getAttribute("data-tab");
            let currentTab = document.querySelector(tabId);

            if(!currentBtn.classList.contains('active')) {
                currentBtn.blur();

                tabsBtn.forEach(function(item) {
                    item.classList.remove('active');
                });

                tabsItems.forEach(function(item) {
                    item.classList.remove('active');
                });

                currentBtn.classList.add('active');
                currentTab.classList.add('active');
            }
        });
    };

    /* Fixed Header */
    function checkScroll(scrollOffset) {
        scrollOffset = $(this).scrollTop();

        if (scrollOffset >= introH - 1) {
            nav.addClass("fixed");
        } else {
            nav.removeClass("fixed");
        }
    };

    checkScroll(scrollOffset);

    $(window).on("scroll", function () {

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });




    /* Slider */
    $(".slider").slick({
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 4000,
    });

    $(".footer-slider").slick({
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      fade: true
    });


        /* Smoth Scroll */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });


});