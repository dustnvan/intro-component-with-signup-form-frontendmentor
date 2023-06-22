

//   event.preventDefault(); // prevent form submission
//   console.log(firstName)

//     // Check if any field is empty
//   if (firstName === "") {
//     alert("First name cannot be empty");
//     return false;
//   }
//   if (lastName === "") {
//     alert("Last name cannot be empty");
//     return false;
//   }
//   if (email === "") {
//     alert("Email cannot be empty");
//     return false;
//   }
//   if (password === "") {
//     alert("Password cannot be empty");
//     return false;
//   }

//  // Check email format using a regular expression
//  const emailPattern = /^\S+@\S+\.\S+$/;
//  if (!emailPattern.test(email.value)) {
//    alert("Email is not formatted correctly");
//    return;
//  }

//   alert("Form submitted successfully!");
// })

const form = document.getElementById("form");

function checkFields() {
  const inputs = document.querySelectorAll('input');
  let message = "You need to fill out these fields:\n";
  let empty = false;

  inputs.forEach(input => {
    const inputText = input.value.trim();

    if (inputText == '') {
      message = message + input.name + "\n";
      empty = true;
    }
  });

  if (empty) 
  { 
    alert(message);
    return true;
  }
}

form.addEventListener('submit', event => 
{
  event.preventDefault();


  if(checkFields()) return;
  form.submit();
});




// function checkEmail() {
//   if (!checkValidity(email)) {
//     alert('Looks like this is not an email')
//     return true;
//   }
// }

// submit.addEventListener("click", function () {
//   if (checkFields()) return;
//   if (checkEmail()) return;

//   alert('Free Trial Claimed')
// });
