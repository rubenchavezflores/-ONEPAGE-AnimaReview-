const nameField = document.querySelector("[name=name]");
// const lastnamenameField = document.querySelector("[name=lastname]");
const emailField = document.querySelector("[name=email]");
const textareaField = document.querySelector("[name=textarea]");

const validateEmptyField = (message, e) => {
    const field = e.target;
    const fieldValue = e.target.value;
    if(fieldValue.trim().length==0){
        field.classList.add("invalid");
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = message;
    }else{
        field.classList.remove("invalid");
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = " ";
    }
}

const validateEmailFormat = e => {
    const field = e.target;
    const fieldValue = e.target.value;
    const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    if(fieldValue.trim().length > 5 && !regex.test(fieldValue)){
        field.classList.add("invalid");
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "La dirección de correo es incorrecta";
    }else{
        field.classList.remove("invalid");
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = " ";
    }
}
nameField.addEventListener("blur", (e) => validateEmptyField("Introduzca su nombre", e));
// lastnameField.addEventListener("blur", (e) => validateEmptyField("Introduzca su apellido", e));
emailField.addEventListener("blur", (e) => validateEmptyField("Introduzca un email", e));
textareaField.addEventListener("blur", (e) => validateEmptyField("Complete este campo", e));
emailField.addEventListener("input", (e) => validateEmptyField("No se puso ningún correo"));
emailField.addEventListener("input", validateEmailFormat);