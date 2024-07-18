// const loginText = document.querySelector(".title-text .login");
// const loginForm = document.querySelector("form.login");
// const loginBtn = document.querySelector("label.login");
// const signupBtn = document.querySelector("label.signup");
// const signupLink = document.querySelector("form .signup-link a");
// const loginLink = document.querySelector("form .login-link a");
// // const togglePassword = document.querySelector("#togglePassword");

// signupBtn.onclick = (() => {
//   loginForm.style.marginLeft = "-50%";
//   loginText.style.marginLeft = "-50%";
// });
// loginBtn.onclick = (() => {
//   loginForm.style.marginLeft = "0%";
//   loginText.style.marginLeft = "0%";
// });
// signupLink.onclick = (() => {
//   signupBtn.click();
//   return false;
// });

// loginLink.onclick = (() => {
//   loginBtn.click();
//   return false;
// });


// Toggle password visibility
// togglePassword.onclick = (() => {
//   const passwordInput = togglePassword.previousElementSibling;
//   if (passwordInput.type === "password") {
//     passwordInput.type = "text";
//   } else {
//     passwordInput.type = "password";
//   }
// });

// Get all elements with the class 'toggle-password'
const togglePasswords = document.querySelectorAll('.toggle-password');

// Loop through each togglePassword element
togglePasswords.forEach(togglePassword => {
  // Add click event listener
  togglePassword.addEventListener('click', function () {
    // Get the target input field
    const targetId = this.getAttribute('data-target');
    const targetInput = document.getElementById(targetId);

    // Toggle password visibility
    if (targetInput.type === 'password') {
      targetInput.type = 'text';
    } else {
      targetInput.type = 'password';
    }
  });
});
