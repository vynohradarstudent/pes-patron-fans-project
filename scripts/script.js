$(document).ready(async function () {


    // LOGIN

    $('.log-in button').click(async function (e) {
        let data = {
            email: $('#login-email').val(),
            password: $('#login-password').val()
        }

        let token = await login(data);

        console.log(token.accessToken)

        localStorage.setItem("accessToken", token.accessToken);
        localStorage.setItem("refreshToken", token.refreshToken);

        let userInfo = await getMe(token.accessToken)

        $('header .profile a').html(`<p> ${userInfo.displayName} </p>`)


        let userData = await getAuthorize();

        if (userData != null) {
            console.log(userData)
            if (userData.role.name === "ADMIN") {
                $("header .navbar").append(`<a href="#1"> Admin function 1 </a>`);
                $("header .navbar").append(`<a href="#2"> Admin function 2 </a>`);
            }

        }

        $("#logout-btn").on("click", async function () {
            localStorage.setItem("accessToken", null);
            localStorage.setItem("refreshToken", null);

            window.location.reload();
        });
    })


    // REGISTRATION

    $('.sign-up button').click(async function (e) {
        let data = {
            displayName: $('#signup-username').val(),
            email: $('#signup-email').val().toLowerCase(),
            password: $('#signup-password').val(),
            confirmPassword: $('#signup-passwordConf').val()
        }

        console.log(data)


        let token = await register(data);

        console.log(token.accessToken)

        localStorage.setItem("accessToken", token.accessToken);
        localStorage.setItem("refreshToken", token.refreshToken);
    })














})

async function getAuthorize() {
    let token = {
        accessToken: localStorage.getItem("accessToken"),
        refreshToken: localStorage.getItem("refreshToken")
    }

    if (token.accessToken !== 'null' && token.refreshToken != null) {
        try {
            let userData =  getMe(token.accessToken);

            if (userData.status !== 401) {
                return userData;
            } else {
                let newTokens = await refreshToken(token.refreshToken);

                if (newTokens) {
                    localStorage.setItem("accessToken", newTokens.accessToken);
                    localStorage.setItem("refreshToken", newTokens.refreshToken);

                    let newUserData = await getMe(newTokens.accessToken);
                    return newUserData;
                }
            }
        } catch (error) {
            console.error("Error during authorization process", error);
        }
    }

    localStorage.setItem("accessToken", null);
    localStorage.setItem("refreshToken", null);

    return null;
}
