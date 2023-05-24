$(document).ready(function () {
    // Registration form submission
    $('#registrationForm').submit(function (e) {
        e.preventDefault();
        var fname = $('#fname').val();
        var lname = $('#lname').val();
        var username = $('#username').val();
        var email = $('#email').val();
        var password = $('#password').val();

        $.ajax({
            type: 'POST',
            url: 'https://jokoarts.herokuapp.com/register',
            data: { fname: fname, lname: lname, username: username, email: email, password: password },
            success: function (data) {
                $('#message').text(data.message);
            },
            error: function (err) {
                console.log(err);
            }
        });
    });

    // Login form submission
    $('#loginForm').submit(function (e) {
        e.preventDefault();
        var email = $('#loginEmail').val();
        var password = $('#loginPassword').val();

        $.ajax({
            type: 'POST',
            url: 'https://jokoarts.herokuapp.com/login',
            data: { email: email, password: password },
            success: function (data) {
                $('#message').text(data.message);
                if (data.success) {
                    // Redirect to a protected page or perform any other actions upon successful login
                    window.location.href = "../../dashboard.html";
                }
            },
            error: function (err) {
                console.log(err);
            }
        });
    });
});
