$(document).ready(function () {

    $("#login").on("click", async function () {
        let email = $("#email").val()
        let password = $("#password").val()

        let token = await login({
            email: email,
            password: password
        })

        console.log(token)
    });
});