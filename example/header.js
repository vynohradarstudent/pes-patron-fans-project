$(document).ready(async function () {

    let userData = await getAuthorize();

    if  (userData != null){
        $(".auth").hide();
        $(".user-info").show();

        $("#username").text(userData.displayName);
        console.log(userData)
        if  (userData.role.name === "ADMIN"){
            $("header nav ul").append(`<li> <a href="#1"> Admin function 1 </a>  </li>`);
            $("header nav ul").append(`<li> <a href="#2"> Admin function 2 </a>  </li>`);
        }

    } else {
        $(".auth").show();
        $(".user-info").hide();
    }

    $("#logout-btn").on("click", async function () {
        localStorage.setItem("accessToken", null);
        localStorage.setItem("refreshToken", null);

        window.location.reload();
    });
});


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