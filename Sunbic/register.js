
let form= document.getElementById("register-form")
form.addEventListener("submit",(e)=>{

    e.preventDefault()

    let firstname = document.getElementById("firstname")
    let lastname = document.getElementById("lastname")
    let id = document.getElementById("username")
    let email = document.getElementById("email")
    let dob = document.getElementById("dob")
    let password = document.getElementById("password")
    let confirmpassword = document.getElementById("confirmpassword")
    let gender = document.getElementsByName("gender")
    let tos = document.getElementById("tos")
    let error = document.getElementById("error")
    error.innerHTML=""

    //validasi
    console.log(id.value)
    if(firstname.value.length<1){
        error.innerHTML="*Required to fill the first name"
        return
    }

    if(lastname.value.length<1){
        error.innerHTML="*Required to fill the last name"
        return
    }

    if(dob.value==""){
        error.innerHTML = "*Required to fill date of birth"
        return
    }

    let validGender = false
    gender.forEach((option)=>{
        if(option.checked){
            validGender = true
        }
    })
    if(!validGender){
        error.innerHTML = "*You must select a gender"
        return
    }


    if(id.value.length<4||id.value.length>20){
        error.innerHTML="*Username is invalid"
        return 
    }

    if(!validateEmail(email.value)){
        error.innerHTML = "*Email is invalid"
        return 
    }


    if(!validatePassword(password.value)){
        error.innerHTML = "*Password is invalid"
        return 
    }
    

    if(password.value!=confirmpassword.value){
        error.innerHTML ="*Password is not the same"
        return
    }

    if(!tos.checked){
        error.innerHTML = "*You must agree to the terms of service"
        return
    }

    

    let confirmResult = confirm("Are you sure you want to submit?")
    if(confirmResult){
        alert("Register Success")
        window.location.href="index.html"

    }
    else{
        alert("Register Cancelled")
    }

    

});




function validateEmail(email){
    return email.indexOf('@') != -1 && (email.endsWith('.com')||email.endsWith('.id'))
}


function validatePassword(password){
    let length = password.length
    let isAlpha = false
    let isNumeric = false
    if (length>6 && length<20){
        for (let i = 0; i < length; i++) {
            let charCode = password.charCodeAt(i)
            if(!isNaN(password[i])){
                isNumeric = true
            }
            if((charCode >= 65 && charCode <= 90)||(charCode >= 97 && charCode <= 122)){
                isAlpha = true
            }
            
        }
        if(isAlpha&& isNumeric){
            return true
        }else{
            return false
        }
    }
    else{
        return false
    }
    

    
}
