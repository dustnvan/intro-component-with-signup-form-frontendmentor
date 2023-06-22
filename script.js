const form = document.getElementById('form');
const inputs = document.querySelectorAll('input');
const email = document.getElementById('email');

function emptyFieldError(input) {
  const errorMessage = input.closest("div").querySelector(".error-message");
  input.classList.add('input-empty-error');
  errorMessage.style.display = 'block';
  errorMessage.textContent = `${input.name} cannt be empty`;
}

function revertFieldError(input) {
  const errorMessage = input.closest("div").querySelector(".error-message");
  input.classList.remove('input-empty-error');
  errorMessage.style.display = 'none';
}

function invalidEmailError(email) {
  const errorMessage = email.closest("div").querySelector(".error-message");

  emptyFieldError(email);
  email.style.color = 'hsl(0, 100%, 74%)';
  errorMessage.textContent = "Looks like this is not an email";
}

function revertEmailError(email) {
  revertFieldError(email);
  email.style.removeProperty("color");

}

function checkFields() {
  let empty = false;
  inputs.forEach(input => {
    const inputText = input.value.trim();

    if (!inputText) // input empty
    {
      emptyFieldError(input);
      empty = true;
    }
    else {
      revertFieldError(input);
    }
  });

  if (empty) { // there is an empty field
    return false;
  } else {
    return true;
  }
}

function checkEmail() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) // email is not valid
  {
    invalidEmailError(email)
    return false;
  }
  else {
    revertEmailError(email)
    return true;
  }

}

// Checks for empty fields or invalid email
form.addEventListener('submit', event => {
  event.preventDefault();

  let noEmpty = false;
  let emailValidity = false;

  noErrors = checkFields();

  if (email.value) emailValidity = checkEmail();
  //email not empty

  console.log(noErrors, emailValidity)
  if (noErrors && emailValidity) {
    form.submit();
    alert('form submitted!')
  }
});
