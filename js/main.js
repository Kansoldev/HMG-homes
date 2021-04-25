$(function () {
    // Preloader
    $(".loader").fadeOut();
    $("#preloader-active").delay(450).fadeOut("slow");

    $(".js-sticky-header").sticky({ topSpacing: 0 });

    // Background Set
    $(".set-bg").each(function () {
        var bg = $(this).data("setbg");
        $(this).css("background-image", "url(" + bg + ")");
    });

    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 80) {
            $("#site-header").addClass("nav-fixed");
        } else {
            $("#site-header").removeClass("nav-fixed");
        }
    });
});

document.querySelector(".user-menu").addEventListener("click", function () {
    this.classList.toggle("active");
});

document.querySelector("#movetop").addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", () => {
    // When the user scrolls down 20px away from the top, show the button
    if (
        document.body.scrollTop > 250 ||
        document.documentElement.scrollTop > 250
    ) {
        document.getElementById("movetop").style.display = "block";
    } else {
        document.getElementById("movetop").style.display = "none";
    }
});
