function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

const nameInput = document.querySelector("#nombre");
const apellidoInput = document.querySelector("#apellido");
const email = document.querySelector("#email");
const password1Input = document.querySelector("#password1");
const password2Input = document.querySelector("#password2");
const checkboxInput = document.querySelector("#terminos")


function validarCampos() {
    if(nameInput.value === '' || apellidoInput.value === '' || email.value === '' || password1Input.value === '' || password2Input.value === '' || checkboxInput.checked === false) {
        showAlertError();
    } if (password1Input.value.length < 6 || password2Input.value.length < 6) {
        showAlertError();
    } if (password1Input.value !== password2Input.value) {
        showAlertError();
    } if (!checkboxInput.checked){
        showAlertError();
    }
   else {
    showAlertSuccess();
   }
}