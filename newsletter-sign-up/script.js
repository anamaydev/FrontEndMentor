let body = document.querySelector("body");
let signUpCard = document.querySelector(".sign-up");
let successCard = document.querySelector(".success-card");
let dismissButton = document.getElementById("success-btn");
const inputEmail = document.getElementById("email");
const displayEmail = document.querySelector(".success-card__email");
const form = document.getElementById("sign-up-form");
const errorMessage = document.querySelector(".sign-up__error-message");


// function to show success message card
function displaySuccessCard(){
  body.classList.replace("sign-up-page", "success-page");
  signUpCard.classList.add("hidden");
  successCard.classList.remove("hidden");
}

// function to show sign-up card
function displaySignUpCard(){
  body.classList.replace("success-page", "sign-up-page");
  signUpCard.classList.remove("hidden");
  successCard.classList.add("hidden");
}

function getData(eventObject){
  const data = {};
  const fields = eventObject.target.querySelectorAll("input");

  for(const field of fields){
    data[field.name] = field.value;
  }

  return data;
}

// sets error message to appropriate node
function setError(errorNode, message){
  errorNode.innerText = message;
}

function checkEmail(userEmail){
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return(emailRegex.test(userEmail));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = getData(e);
  console.log(`email is ${data.email}`);

  const isValidEmail = checkEmail(data.email);

  if(data.email === ""){
    // sets error message
    setError(errorMessage, "Email is required");

    // adds the error message and highlights the input field
    inputEmail.classList.add("sign-up__input--invalid");
    // errorMessage.classList.replace("sign-up__error-message", "sign-up__error-message--show");
    errorMessage.classList.add("sign-up__error-message--show");
  }else if(!isValidEmail){
    setError(errorMessage, "Valid email required");
    inputEmail.classList.add("sign-up__input--invalid");
    errorMessage.classList.add("sign-up__error-message--show");
  }else{
    displaySuccessCard();

    // add the user email to the success message
    displayEmail.innerHTML = data.email;

    // remove the input field highlight
    inputEmail.classList.remove("sign-up__input--invalid");

    // remove the error message
    errorMessage.classList.remove("sign-up__error-message--show");
  }
})

// going back to sign up card after clicking dismiss button
dismissButton.addEventListener("click", displaySignUpCard);