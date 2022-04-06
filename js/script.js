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

})()