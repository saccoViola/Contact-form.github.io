document.addEventListener("DOMContentLoaded", ()=>{

    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const emailAddress = document.getElementById("email-address");
    const textArea = document.getElementById("message");
    const checkbox = document.querySelectorAll('input[type="checkbox"]');
    const radios = document.querySelectorAll('input[type="radio"]')

    const sumbitButton = document.querySelector(".submit");
    const successMessage = document.querySelector(".hidden");


    sumbitButton.addEventListener("click", (event)=>{
        event.preventDefault();
        validateInputs();       
    })

    //check if email and input are valid
    function validateInputs() { 
        successSubmit = true;

        firstNameField = firstName.value.trim();
        firstNameError = firstName.nextElementSibling;
        if(firstNameField === ""){
            firstNameError.style.display = "block";
            successSubmit = false;
            
        }else{
            firstNameError.style.display = "none";
        }

        lastNameField = lastName.value.trim();
        lastNameError = lastName.nextElementSibling;
        if(lastNameField === ""){
            lastNameError.style.display = "block";
            successSubmit = false;
         
        }else{
            lastNameError.style.display = "none";
        
        }

        emailValue = emailAddress.value.trim();
        emailError = emailAddress.nextElementSibling;
        if(emailValue === "" || !emailIsValid(emailValue)){
            emailError.style.display = "block";
            successSubmit = false;
        }else{
            emailError.style.display = "none";
        }

        textField = textArea.value.trim();
        textError = textArea.nextElementSibling;
        if(textField === ""){
            textError.style.display = "block";
            successSubmit = false;
        }else{
            textError.style.display = "none";
        }

        const queryError = document.getElementById("query-error");
        let atLeastOneChecked = false;

        radios.forEach(radio => {
            if(radio.checked) {
                atLeastOneChecked = true;
                queryError.style.display = "none";
            }
        });
        if (atLeastOneChecked) {
            successSubmit = true;
            queryError.style.display = "none";
        } else {
            successSubmit = false;
            queryError.style.display = "block";
        }

        const spanError = document.getElementById("span-error");
        checkbox.forEach(check => {
            if(check.checked) {
                checkboxChecked = true;
            }else{successSubmit = false
                spanError.style.display = "block";
            }
        });

        if(successSubmit){
            successMessage.style.display = "block";
        }else{successMessage.style.display = "none"; 
            alert("Please complete all fields!")}
    } 
   

    function emailIsValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

});
