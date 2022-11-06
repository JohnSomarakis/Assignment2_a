import {
    valid_submit_password_equal,
    valid_submit_password_strength
} from "./submit_form";
document.getElementById("password_message").innerHTML = "ERROR";
document.getElementById("f_password").addEventListener("change", checkPassword);
document.getElementById("f_password_repeat").addEventListener("change", checkPassword);

function checkPassword(){
    let password1 = form.f_password.value;
    let password2 = form.f_password_repeat.value;
    document.getElementById("password_message").innerHTML = "ERROR";
    //Check the strength of the password
    if(password1.includes("helmepa") || password1.includes("uoc") || password1.includes("tuc")){
        document.getElementById("password_message").innerHTML = "Illegal Input Password<br>You can't use the Words:<br>helmepa , uoc , tuc";
        valid_submit_password_strength(false);
    }else{
        if(parseFloat(password1.replace(/[^0-9]/g,'').length/password1.length)>=0.5) {
            document.getElementById("password_message").innerHTML = "Weak Password";
            valid_submit_password_strength(false);
        }else{
            if(parseInt((password1.length-password1.replace(/[-().&@?'#,*/;+]/g,'').length))>=2 &&
                parseInt((password1.length-password1.replace(/[A-Z]/g,'').length))>=1 &&
                parseInt((password1.length-password1.replace(/[a-z]/g,'').length))>=1){
                document.getElementById("password_message").innerHTML = "Strong Password";
                valid_submit_password_strength(true);
            }else{
                document.getElementById("password_message").innerHTML = "Medium Password";
                valid_submit_password_strength(true);
            }
            //Chech the Passwords
            if (password1 !== password2) {// If Not same return False.
                document.getElementById("password_message_repeat").innerHTML = "Different Passwords";
                valid_submit_password_equal(false);
            }else {// If same return True.
                document.getElementById("password_message_repeat").innerHTML = "Matching Passwords";
                valid_submit_password_equal(true);
            }
        }
    }
}