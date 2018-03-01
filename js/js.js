

function showContactForm() {
    $('#initial').hide();
    $('#contact-form-holder').show();
}

function hideContactForm(){
    $('#contact-form-holder').hide();
    $('#initial').show();
}

function onEmailSend(){

    $('#contact-form-holder').hide();
    $('#after-submit').show();

}

function hideMessage() {
    $('#after-submit').hide();
    $('#initial').show();
}
