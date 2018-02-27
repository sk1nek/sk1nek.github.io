

function showContactForm() {
    $('#initial').hide();
    $('#contact-form-holder').show();
}

function hideContactForm(){
    $('#contact-form-holder').hide();
    $('#initial').show();
}

function sendMail() {

    var title = encodeURIComponent($('#title').val());
    var msg = encodeURIComponent($('#msg').val());

    console.log(title);
    console.log(msg);

    var mailTo = "mailto:me@mjaroszewicz.me?subject=" + title  + "&body=" + msg
    window.location = mailTo;

}