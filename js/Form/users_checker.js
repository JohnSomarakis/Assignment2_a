import {valid_submit_type_mail} from "./submit_form";

function checkUsers(){
    let email = form.f_email.value;
    let type  = form.f_type.value;
    let Uni   = form.f_uni.value;

    if(type === "student"){
        if(Uni ==="University_Of_Crete" && email.slice(email.length-6) === "uoc.gr"){
                valid_submit_type_mail(true);
        }else if(Uni === "EL_ME_PA" && email.slice(email.length-10) === "uoc.gr"){
                valid_submit_type_mail(true);
        }else if(Uni === "TUC" && email.slice(email.length-6) === "uoc.gr"){
                valid_submit_type_mail(true);
        }else{
            valid_submit_type_mail(false)
        }
    }
}
