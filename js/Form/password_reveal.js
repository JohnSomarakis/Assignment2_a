const f_Password_reveler = document.querySelector("#f_Password_reveler");
const f_password = document.querySelector("#f_password");

f_Password_reveler.addEventListener("click", function () {
    // toggle the type attribute
    const type = f_password.getAttribute("type") === "password" ? "text" : "password";
    f_password.setAttribute("type", type);
});

const f_Password_reveler_repeat = document.querySelector("#f_Password_reveler_repeat");
const f_password_repeat = document.querySelector("#f_password_repeat");

f_Password_reveler_repeat.addEventListener("click", function () {
    // toggle the type attribute
    const type = f_password_repeat.getAttribute("type") === "password" ? "text" : "password";
    f_password_repeat.setAttribute("type", type);
});

// prevent form submit
const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
    e.preventDefault();
});