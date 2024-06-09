$(document).ready(function (){
    $('.log-in button').click(async function(e){
        let data = {
            email: $('#login-email').val(),
            password: $('#login-password').val()
        }

        let token = await login(data);

        console.log(token.accessToken)

        localStorage.setItem("accessToken", token.accessToken);
        localStorage.setItem("refreshToken", token.refreshToken);
    })


    $('.sign-up button').click(async function(e) {
        let data = {
            display_name: $('#singup-username').val(),
            email: $('#singup-email').val(),
            password: $('#signup-password').val(),
            confirmPassword: $('#signup-passwordConf').val()
        }

        let token = await register(data);

        console.log(token.accessToken)

        localStorage.setItem("accessToken", token.accessToken);
        localStorage.setItem("refreshToken", token.refreshToken);
    })
})
