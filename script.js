document.addEventListener("DOMContentLoaded", ()=>{
    // const form = document.getElementById("form");
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
            console.log("nome NON inserito")
            successSubmit = false;
            
        }else{
            console.log("nome inserito")
            firstNameError.style.display = "none";
        }

        lastNameField = lastName.value.trim();
        lastNameError = lastName.nextElementSibling;
        if(lastNameField === ""){
            lastNameError.style.display = "block";
            console.log("cognome NON inserito")
            successSubmit = false;
         
        }else{
            console.log("cognome inserito")
            lastNameError.style.display = "none";
        
        }

        emailValue = emailAddress.value.trim();
        emailError = emailAddress.nextElementSibling;
        if(emailValue === "" || !emailIsValid(emailValue)){
            emailError.style.display = "block";
            console.log("l'indirizzo email NON è valido")
            successSubmit = false;
        }else{
            emailError.style.display = "none";
            console.log("l'indirizzo email è valido");
        }

        textField = textArea.value.trim();
        textError = textArea.nextElementSibling;
        if(textField === ""){
            textError.style.display = "block";
            console.log("NON hai inserito messaggio")
            successSubmit = false;
        }else{
            textError.style.display = "none";
            console.log("messaggio inserito");
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
            console.log("tutto bene!")
        }else{successMessage.style.display = "none"; 
            alert("compila tutti i campi!")}
    } 
   

    function emailIsValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

});
