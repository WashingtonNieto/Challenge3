// console.log(firstNameInput);

const firstName = document.querySelector('#firstNameInput')
// const firstName2 = document.getElementById('firstNameInput')

// console.log(firstName)
// console.log(firstName2)
const lastName = document.querySelector('#lastNameInput')
const emailAddress = document.querySelector('#emailAddressInput')
const password = document.querySelector('#passwordInput')


const firstNameError = document.querySelector('#firstNameError')
const lastNameError = document.querySelector('#lastNameError')
const emailAddressError = document.querySelector('#emailAddressError')
const passwordError= document.querySelector('#passwordError')

//const button = document.querySelector("submit");
const button = document.querySelector("#boton");

 // una escucha es una funcion que va a estar pendiente de este boton.. 
 // y cuando un evento ocurra  haga algo especifico
 button.addEventListener('click', (event) => {
  event.preventDefault();  

  // console.log('boton presionado');
  // console.log(event)

  validateEmpty(firstName.value, firstName, firstNameError, 'First Name cannot be empty');
  validateEmpty(lastName.value, lastName, lastNameError, 'Last Name cannot be empty');
  validateEmail(emailAddress.value, emailAddress, emailAddressError);
  // validateEmpty(password.value, password, passwordError, 'Password cannot be empty');
  validatePassword(password.value, password, passwordError, 'Password cannot be empty');

 });

 function validateEmail(valueInput, divInput, divError){
  let expresionRegularEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  // console.log(expresionRegularEmail.test(valueInput));
  if(expresionRegularEmail.test(valueInput)){
    hideError(divInput,divError)
  }else{
    showError(divInput,divError,'Looks like this is not an email')
  }
 }

 function validatePassword(valueInput,divInput, divError, nameInput){
  let expresionRegularPassword  = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  //console.log(expresionRegularPassword.test(valueInput));
  //console.log(valueInput,divInput)
  
  if(valueInput.length == 0){
    showError(divInput,divError, nameInput);
  }else{
    if(expresionRegularPassword.test(valueInput)){
      hideError(divInput,divError)
    }else{
      showError(divInput,divError,'Password no cumple')
    }
  }
 }

 function validateEmpty(valueInput, divInput, divError, nameInput){
  // console.log(valueInput.length)
  if (valueInput.length == 0 ){
    showError(divInput,divError, nameInput);
  }else{
    hideError(divInput,divError);
  }
 }

 function showError(divInput, divError, error){
  // que hace nuestra función showError:
  // 1) el input se pone rojo
  // 2) muestra el icono rojo de error
  // 3) muestra el mensaje
  divInput.style.border = '1px solid red';
  divError.innerHTML = `<img class="icon-error" src="./assets/images/icon-error.svg" alt="">
                        <p class="error">${error}</p>`;

 }

 function hideError(divInput, divError){
  divInput.style.border = '1px solid  hsl(246, 25%, 77%)';
  divError.innerHTML =``;
 }