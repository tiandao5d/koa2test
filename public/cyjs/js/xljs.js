function getHF () {
    $.get('./foot.html', function (txt) {
        $('.foot-box').html(txt)
    })
    $.get('./head.html', function (txt) {
        $('.nav-box').html(txt)
    })
}
getHF();