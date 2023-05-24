$(document).ready(function () {
    // Registration form submission
    $('#registrationForm').submit(function (e) {
        e.preventDefault();
        var fname = $('#fname').val();
        var lname = $('#lname').val();
        var username = $('#username').val();
        var email = $('#email').val();
        var password = $('#password').val();

        axios({
            method: 'post',
            url: 'https://jokoarts.herokuapp.com/register',
            data: {
                fname: fname,
                lname: lname,
                username: username,
                email: email,
                password: password
            },
            headers: { 'Content-Type': 'application/json' }
        }).then(function (response) {
            $('#message').text(response.data.message);
        }).catch(function (error) {
            console.error(error);
        });
    });

    // Login form submission
    $('#loginForm').submit(function (e) {
        e.preventDefault();
        var email = $('#loginEmail').val();
        var password = $('#loginPassword').val();

        axios({
            method: 'post',
            url: 'https://jokoarts.herokuapp.com/login',
            data: { email: email, password: password },
            headers: { 'Content-Type': 'application/json' }
        }).then(function (response) {
            $('#message').text(response.data.message);
            if (response.data.success) {
                // Redirect to a protected page or perform any other actions upon successful login
                window.location.href = "dashboard.html";
            }
        }).catch(function (error) {
            console.error(error);
        });
    });
});
