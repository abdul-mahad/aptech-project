
document.addEventListener('DOMContentLoaded', function() {
    var registrationForm = document.getElementById('registrationForm');
    var registerButton = document.getElementById('btn');
    var usernameInput = document.getElementById('uname');
    var emailInput = document.getElementById('uemail');
    var passwordInput = document.getElementById('upass');

    registrationForm.addEventListener('input', function() {
        if (usernameInput.value && emailInput.value && passwordInput.value) {
            registerButton.disabled = false;
        } else {
            registerButton.disabled = true;
        }
    });
    
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        var name = usernameInput.value;
        var email = emailInput.value;
        var pass = passwordInput.value;

        // Set values in local storage
        localStorage.setItem("myname", name);
        localStorage.setItem("myemail", email);
        localStorage.setItem("mypass", pass);

        alert("Registered successfully");

        window.location.href = 'login.html';
    });
});