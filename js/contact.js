function finishedForm() {
    var fname = document.getElementById("fname-input").value;
    var lname = document.getElementById("lname-input").value;
    var email = document.getElementById("email-input").value;
    var message = document.getElementById("message-input").value;

    if (fname.length > 0 && lname.length > 0 && email.length > 0 && message.length > 0) {
        document.getElementById("finished-form").innerHTML = "Thank you " + fname + " for submitting the form! We will get back to you as soon as possible!";
    } else {
        document.getElementById("finished-form").innerHTML = "Please make sure all boxes are filled out.";
    }
}

//reset boxes so theyre empty after user fills form