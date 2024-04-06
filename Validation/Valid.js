const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  if (!validateName()) {
    displayError('nameError', 'Please enter your full name');
  } else if (!validateEmail()) {
    displayError('emailError', 'Please enter a valid email address');
  } else if (!validatePassword()) {
    displayError('passError', 'Password must be at least 8 characters long');
  } else {
    alert('Form submitted successfully!');
   
  }
});

function validateName() {
  const nameValue = nameInput.value.trim();
  return nameValue !== '';
}

function validateEmail() {
  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(emailValue);
}

function validatePassword() {
  const passwordValue = passwordInput.value.trim();
  return passwordValue.length >= 8;
}

function displayError(elementId, errorMessage) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = errorMessage;
}

 