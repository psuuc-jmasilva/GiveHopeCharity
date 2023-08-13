const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const registrationForm = document.getElementById("registrationForm"); // Define the registration form variable

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
})

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
})

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const usernameInput = document.getElementById("username");
    const registeredUsername = usernameInput.value;

    localStorage.setItem("registeredUsername", registeredUsername);

    alert(`Welcome, ${registeredUsername}! You have successfully registered.`);
    window.location.href = "dashboard.html";
});
function login() {
    const validEmail = "jsilva_21ur0233@psu.edu.ph";
    const storedNewPassword = localStorage.getItem("newPassword");
    const validPassword = storedNewPassword ? storedNewPassword : "jols110620";

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const enteredEmail = emailInput.value;
    const enteredPassword = passwordInput.value;

    if (enteredEmail === validEmail && enteredPassword === validPassword) {
        alert("Login successful. Redirecting to dashboard...");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }
}
