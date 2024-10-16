function handleSubmit(event) {
event.preventDefault();
const errorElement = document.getElementById('error');
const firstname = document.getElementById('firstname').value;
const lastname = document.getElementById('lastname').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
  
if (!firstname) {
errorElement.textContent = "First name must not be empty";
return;
}
if (!lastname) {
errorElement.textContent = "Last name must not be empty";
return;
}
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
errorElement.textContent = "Email is badly formatted";
return;
}
const hasLetter = /[a-zA-Z]/.test(password);
const hasNumber = /[0-9]/.test(password);
    
if (password.length < 8 || !hasLetter || !hasNumber) {
errorElement.textContent = "Password must be at least 8 characters long and contain at least a letter and a number";
return;
    }
errorElement.textContent = "";
alert("Form submitted successfully!");
}
