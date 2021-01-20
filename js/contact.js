function finishedForm() {
    var name = document.getElementById("name-input").value;
    var email = document.getElementById("email-input").value;
    var message = document.getElementById("message-input").value;

    if (name.length > 0 && email.length > 0 && message.length > 0) {
        document.getElementById("finished-form").innerHTML = "Thank you for submitting the form! We will get back to you as soon as possible!";
    } else {
        document.getElementById("finished-form").innerHTML = "Please make sure all boxes are filled out with the correct information.";
    }
}

//statement incomplete for email validation
//reset boxes so theyre empty after user fills form