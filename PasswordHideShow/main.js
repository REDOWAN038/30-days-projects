let eyeIcon = document.getElementById("eyeicon");
let password = document.getElementById("password");

password.type = "password";
eyeIcon.src = "./images/eye-close.png";

eyeIcon.onclick = function () {
    if (password.type === "password") {
        password.type = "text";
        eyeIcon.src = "./images/eye-open.png";
    } else {
        password.type = "password";
        eyeIcon.src = "./images/eye-close.png";
    }
};