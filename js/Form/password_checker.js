document.querySelector('.submit_button').oneclick =checkPassword(){
    let password1 = document.querySelector('.f_password').value;
    let password2 = document.querySelector('.f_password_repeat').value;

    // If password not entered
    if (password1 === '') {
        document.getElementById("password_message").innerHTML = "Empty Password";
        return false;
    }

    // If you confirm password not entered
    else if (password2 === '') {
        document.getElementById("password_message_repeat").innerHTML = "Empty Password";
        return false;
    }

    // If Not same return False.
    else if (password1 !== password2) {
        document.getElementById("password_message_repeat").innerHTML = "Different Passwords";
        return false;
    }

    // If same return True.
    else {
        document.getElementById("password_message_repeat").innerHTML = "";
        return false;
    }

}
