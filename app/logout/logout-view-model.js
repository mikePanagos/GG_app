const observableModule = require("data/observable");
const frameModule = require("tns-core-modules/ui/frame");
const user = require("../app-root/Users");

function LoginViewModel() {
    const viewModel = observableModule.fromObject({
        email: "",
        password: "",

        logout: function () {
          user.logOut();
          frameModule.topmost().navigate("login/login-page");

            /* ***********************************************************
            * Call your custom signin logic using the email and password data.
            *************************************************************/
        }
    });

    return viewModel;
}

module.exports = LoginViewModel;
