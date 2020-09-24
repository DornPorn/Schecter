function sendMail() {
    var link = "mailto:gungan722121@gmail.com"
        + "?cc=" + encodeURIComponent(' ' + document.getElementById('email').value)
            + "&subject=" + encodeURIComponent("Contact support")
        + "&body=" + encodeURIComponent('Hi! My name is ' + document.getElementById('firstname').value + ' ' + document.getElementById('lastname').value + '. ' + document.getElementById('question').value)
    ;

    window.location.href = link;
}