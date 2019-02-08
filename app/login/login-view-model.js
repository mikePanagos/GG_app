const observableModule = require("data/observable");
const frameModule = require("tns-core-modules/ui/frame");
const user = require("../app-root/Users");

function LoginViewModel() {
    const viewModel = observableModule.fromObject({
        email: "",
        password: "",

        signIn: function () {
            const email = this.email.toLowerCase();
            const password = this.password.toLowerCase();


            if (user.checkPasswords(password, email)) {
                user.logIn();
                frameModule.topmost().navigate("home/home-page");
            } else {
                alert("nope wrong info");
                frameModule.topmost().navigate("login/login-page");
                
            }
            

            /* ***********************************************************
            * Call your custom signin logic using the email and password data.
            *************************************************************/
        }
    });

    return viewModel;
}

module.exports = LoginViewModel;
