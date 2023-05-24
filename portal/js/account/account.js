document.addEventListener('DOMContentLoaded', function () {
    // Registration form submission
    document.getElementById('registrationForm').addEventListener('submit', function (e) {
        e.preventDefault();
        var fname = document.getElementById('fname').value;
        var lname = document.getElementById('lname').value;
        var username = document.getElementById('username').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        axios.post('https://jokoarts.herokuapp.com/register', { fname: fname, lname: lname, username: username, email: email, password: password })
            .then(function (response) {
                document.getElementById('message').textContent = response.data.message;
            })
            .catch(function (error) {
                console.log(error);
            });
    });

    // Login form submission
    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();
        var email = document.getElementById('loginEmail').value;
        var password = document.getElementById('loginPassword').value;

        axios.post('https://jokoarts.herokuapp.com/login', { email: email, password: password })
            .then(function (response) {
                document.getElementById('message').textContent = response.data.message;
                if (response.data.success) {
                    // Redirect to a protected page or perform any other actions upon successful login
                    window.location.href = "../../dashboard.html";
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    });
});
