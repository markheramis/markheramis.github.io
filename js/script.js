(function () {
    _386.magicCursor();
    _386.scrollLock();

    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    $(window).scroll(function () {
        var top = $(document).scrollTop();
        if (top > 50)
            $('#home > .navbar').removeClass('navbar-transparent');
        else
            $('#home > .navbar').addClass('navbar-transparent');
    });
    $("a[href='#']").click(function (e) {
        e.preventDefault();
    });
})();

(function () {

    $(document).ready(() => {
        let play = () => {
            var audio = new Audio('assets/error.mp3');
            audio.play();
        }
        var serviceModal1 = new bootstrap.Modal(document.getElementById('service_modal_1'), {
            keyboard: true
        })

        var serviceModalBtn1 = document.getElementById("serviceModalBtn1");
        serviceModalBtn1.addEventListener("click", (e) => {
            play();
            setTimeout(function () {
                serviceModal1.toggle();
            }, 500);


        })

        var serviceModal2 = new bootstrap.Modal(document.getElementById('service_modal_2'), {
            keyboard: true
        })

        var serviceModalBtn2 = document.getElementById("serviceModalBtn2");
        serviceModalBtn2.addEventListener("click", (e) => {
            play();
            setTimeout(function () {
                serviceModal2.toggle();
            }, 500);


        })

        var serviceModal3 = new bootstrap.Modal(document.getElementById('service_modal_3'), {
            keyboard: true
        })

        var serviceModalBtn3 = document.getElementById("serviceModalBtn3");
        serviceModalBtn3.addEventListener("click", (e) => {
            play();
            setTimeout(function () {
                serviceModal3.toggle();
            }, 500);
        })
    })

})();

(function () {
    $(document).ready(() => {
        var profileTitle = document.getElementById('profile-title');
        var typewriter = new Typewriter(profileTitle, {
            loop: true,
            cursor: "_"
        });

        typewriter.typeString('BACKEND DEVELOPER')
            .pauseFor(2500)
            .deleteAll()
            .typeString('SOFTWARE ARCHITECH')
            .pauseFor(2500)
            .deleteAll()
            .typeString('SYSTEM ADMINISTRATOR')
            .pauseFor(2500)
            .deleteAll()
            .typeString('TECH INNOVATOR')
            .pauseFor(2500)
            .start();
    })

    $('body').scrollspy({ target: '#navbar-example' })
})()