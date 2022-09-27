window.onload = function () {
    var inputEmail = document.getElementById("input-email");
    inputEmail.addEventListener("blur", emailValidation);
    inputEmail.addEventListener("focus", emailReset);
    var inputPassword = document.getElementById("input-pass");
    inputPassword.addEventListener("blur", passValidation);
    inputPassword.addEventListener("focus", passwordReset);
    var submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click", submitAlert);
};
function emailValidation () { 
    var inputEmail = document.getElementById("input-email");
    var feedbackEmail = document.getElementById("email-fb");
    var feedbackP = document.createElement("p");
    var emailCondition = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (inputEmail.value.length == 0) {
        return;
    }
    if (!emailCondition.test(inputEmail.value)) {
        feedbackEmail.innerText = "Invalid email.";
        feedbackP.classList.add("feedback-p-error");
    }
}
function passValidation() {
    var passwordInput = document.getElementById("input-pass");
    var passTry = passwordInput.value;
    var feedbackPassword = document.getElementById("pass-feedback");
    var feedbackP = document.createElement("p");
    if (passTry.length == 0) {
        return;
    }
    if (passTry.length < 8) {
        feedbackP.innerText = "Password must contain at least 8 characters.";
        feedbackPassword.appendChild(feedbackP);
        feedbackPassword.classList.add("feedback-div-error");
        return;
    }
    var hasLetter = false; 
    var hasNumber = false;
    var hasSpecialChar = false;
    for (var i = 0; i < passTry.length; i++) {
        if (isNaN(parseInt(passTry[i]))) hasLetter = true;
        if (!isNaN(parseInt(passTry[i]))) hasNumber = true;
        if ((passTry[i].charCodeAt() > 32 && passTry[i].charCodeAt() < 48)) hasSpecialChar = true;
    }
    if (!hasLetter) {
        feedbackP.innerText = "Password must contain at least a letter.";
        feedbackPassword.appendChild(feedbackP);
        feedbackPassword.classList.add("feedback-div-error");
        return;
    }
    if (!hasNumber) {
        feedbackP.innerText = "Password must contain at least a number.";
        feedbackPassword.appendChild(feedbackP);
        feedbackPassword.classList.add("feedback-div-error");
        return;
    }
    if (hasSpecialChar) {
        feedbackP.innerText = "Password mustn't contain special characters.";
        feedbackPassword.appendChild(feedbackP);
        feedbackPassword.classList.add("feedback-div-error");
        return;
    }
}
function emailReset() {

}
function passwordReset() {
    var feedbackPassword = document.getElementById("pass-feedback");
    feedbackPassword.innerHTML = "";
    feedbackPassword.classList.remove("feedback-div-error");
}
function submitAlert(e) {
    e.preventDefault();
    var emailInput = document.getElementById("input-email");
    var emailStatus = document.getElementById("email-fb").firstChild;
    var emailAnswer = "";
    emailStatus? emailAnswer = "Error: " + emailStatus.innerHTML : emailAnswer = emailInput.value;
    var passwordInput = document.getElementById("input-pass");
    var passwordStatus = document.getElementById("pass-feedback").firstChild;
    var passwordAnswer = "";
    passwordStatus? passwordAnswer = "Error: " + emailStatus.innerHTML : passwordAnswer = passwordInput.value;
    if (!emailInput.value) emailAnswer = "Error : Empty email field.";
    if (!passwordInput.value) passwordAnswer = "Error : Empty password field.";
    var answer = emailAnswer + "\n" + passwordAnswer;
    alert(answer);
}