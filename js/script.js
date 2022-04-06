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
        var serviceModal1 = new bootstrap.Modal(document.getElementById('service_modal_1'), {
            keyboard: false
        })

        var serviceModalBtn1 = document.getElementById("serviceModalBtn1");
        serviceModalBtn1.addEventListener("click", (e) => {
            serviceModal1.toggle();
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
})()