$(document).ready(function () {
    $(".heading").click(function () {
        $(this).parent(".accordion-item").find(".panel").slideToggle();
        $(this).parent(".accordion-item").toggleClass("active-menu");
        $(this).parent(".accordion-item").prevAll(".accordion-item").find(".panel").slideUp();
        $(this).parent(".accordion-item").nextAll(".accordion-item").find(".panel").slideUp();
    });

    $('.toggle').click(function () {
        $('.section_text').addClass('visible');
        $('.closebtn').fadeIn();
        $('.nav-overlay-panel').toggleClass('hay');
    });

    $('.closebtn').click(function () {
        $('.section_text').removeClass('visible');
        $('.closebtn').fadeOut()
        $('.nav-overlay-panel').removeClass('hay');
    });
    $('.nav-overlay-panel').click(function () {
        $('.section_text').removeClass('visible');
        $('.closebtn').fadeOut()
        $('.nav-overlay-panel').removeClass('hay');
    });
    $('.tog').click(function () {
        $('form').fadeIn('slow');
        $('.nav').addClass('conto');
        $('.aside').addClass('conto');
        $('.section').addClass('conto');
    });
    $('.tag').click(function () {
        $('form').fadeOut('slow');
        $('.section_text').removeClass('visible');
        $('.nav').removeClass('conto');
        $('.aside').removeClass('conto');
        $('.section').removeClass('conto');
    });

    $("#one").click(function () {
        $('.panel12').slideToggle(function () {
            if ($(this).is(':visible'))
                $(this).css('display', 'grid');
            $(this).css('grid-template-columns', '1fr 1fr 1fr 1fr');
            $(this).css('opacity', '1');
        });
        $(".panel2").slideUp();
        $(".panel3").slideUp();
        $(".panel4").slideUp();
        $(".panel5").slideUp();
        $(".panel6").slideUp();
        $("#one").toggleClass("active1")
        $("#two").removeClass("active1");
        $("#three").removeClass("active1");
        $("#four").removeClass("active1");
        $("#five").removeClass("active1");
        $("#six").removeClass("active1");
    })
    $("#two").click(function () {
        $('.panel2').slideToggle(function () {
            if ($(this).is(':visible'))
                $(this).css('display', 'grid');
            $(this).css('grid-template-columns', '1fr 1fr 1fr 1fr');
            $(this).css('opacity', '1');
        });
        $(".panel12").slideUp();
        $(".panel3").slideUp();
        $(".panel4").slideUp();
        $(".panel5").slideUp();
        $(".panel6").slideUp();
        $("#two").toggleClass("active1")
        $("#one").removeClass("active1");
        $("#three").removeClass("active1");
        $("#four").removeClass("active1");
        $("#five").removeClass("active1");
        $("#six").removeClass("active1");
    })
    $("#three").click(function () {
        $('.panel3').slideToggle(function () {
            if ($(this).is(':visible'))
                $(this).css('display', 'grid');
            $(this).css('grid-template-columns', '1fr 1fr 1fr 1fr');
            $(this).css('opacity', '1');
        });
        $(".panel12").slideUp();
        $(".panel2").slideUp();
        $(".panel4").slideUp();
        $(".panel5").slideUp();
        $(".panel6").slideUp();
        $("#three").toggleClass("active1")
        $("#two").removeClass("active1");
        $("#one").removeClass("active1");
        $("#four").removeClass("active1");
        $("#five").removeClass("active1");
        $("#six").removeClass("active1");
    })
    $("#four").click(function () {
        $('.panel4').slideToggle(function () {
            if ($(this).is(':visible'))
                $(this).css('display', 'grid');
            $(this).css('grid-template-columns', '1fr 1fr 1fr 1fr');
            $(this).css('opacity', '1');
        });
        $(".panel12").slideUp();
        $(".panel3").slideUp();
        $(".panel2").slideUp();
        $(".panel5").slideUp();
        $(".panel6").slideUp();
        $("#four").toggleClass("active1")
        $("#two").removeClass("active1");
        $("#three").removeClass("active1");
        $("#one").removeClass("active1");
        $("#five").removeClass("active1");
        $("#six").removeClass("active1");
    })
    $("#five").click(function () {
        $('.panel5').slideToggle(function () {
            if ($(this).is(':visible'))
                $(this).css('display', 'grid');
            $(this).css('grid-template-columns', '1fr 1fr 1fr 1fr');
            $(this).css('opacity', '1');
        });
        $(".panel12").slideUp();
        $(".panel3").slideUp();
        $(".panel4").slideUp();
        $(".panel2").slideUp();
        $(".panel6").slideUp();
        $("#five").toggleClass("active1")
        $("#two").removeClass("active1");
        $("#three").removeClass("active1");
        $("#four").removeClass("active1");
        $("#one").removeClass("active1");
        $("#six").removeClass("active1");
    })
    $("#six").click(function () {
        $('.panel6').slideToggle(function () {
            if ($(this).is(':visible'))
                $(this).css('display', 'grid');
            $(this).css('grid-template-columns', '1fr 1fr 1fr 1fr');
            $(this).css('opacity', '1');
        });
        $(".panel12").slideUp();
        $(".panel3").slideUp();
        $(".panel4").slideUp();
        $(".panel5").slideUp();
        $(".panel2").slideUp();
        $("#six").toggleClass("active1")
        $("#two").removeClass("active1");
        $("#three").removeClass("active1");
        $("#four").removeClass("active1");
        $("#five").removeClass("active1");
        $("#one").removeClass("active1");
    })

})