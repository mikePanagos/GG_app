const observableModule = require("data/observable");

function LoginViewModel() {
    const viewModel = observableModule.fromObject({
        email: "",
        password: "",

        signIn: function () {
            const email = this.email;
            const password = this.password;

            /* ***********************************************************
            * Call your custom signin logic using the email and password data.
            *************************************************************/
        }
    });

    return viewModel;
}

module.exports = LoginViewModel;
