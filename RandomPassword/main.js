const passwordBox = document.querySelector(".password")
const genBtn = document.querySelector(".btn")
const copy = document.querySelector(".copy")

function generateStrongPassword(length) {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";
    var password = "";
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    passwordBox.value = password
}

genBtn.addEventListener("click", () => {
    generateStrongPassword(12)
})

function copyPassword() {
    passwordBox.select()
    navigator.clipboard.writeText(passwordBox.value);
}

copy.addEventListener("click", () => {
    copyPassword()
})