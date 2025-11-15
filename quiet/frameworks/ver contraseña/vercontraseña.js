function oncheck(checkbox) {
    var passwordField = document.getElementById("passwordField");
    var labelShow = document.getElementById("label-show");

    // checkbox.checked → true si está marcado, false si no
    passwordField.type = checkbox.checked ? "text" : "password";
    labelShow.textContent = checkbox.checked ? "Ocultar " : "Show Password";
}
