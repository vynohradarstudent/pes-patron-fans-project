$(document).ready(function () {

    $("#login").on("click", function () {
        let email = $("#email").val()
        let password = $("#password").val()

        let token = login({
            email: email,
            password: password
        })

        console.log(token)
    });
});