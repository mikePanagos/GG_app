const LogoutViewModel = require("./logout-view-model");

/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
function onNavigatingTo(args) {
    
    const page = args.object;
    page.bindingContext = new LogoutViewModel();
}

function onLoginWithSocialProviderButtonTap() {
    /* ***********************************************************
    * For log in with social provider you can add your custom logic or
    * use NativeScript plugin for log in with Facebook
    * http://market.nativescript.org/plugins/nativescript-facebook
    *************************************************************/
}

function onLogButtonTap(args) {
    const button = args.object;
    const bindingContext = button.bindingContext;

    bindingContext.logout();
}

function onForgotPasswordTap() {
    /* ***********************************************************
    * Call your Forgot Password logic here.
    *************************************************************/
}

exports.onNavigatingTo = onNavigatingTo;
exports.onLoginWithSocialProviderButtonTap = onLoginWithSocialProviderButtonTap;
exports.onLogButtonTap = onLogButtonTap;
exports.onForgotPasswordTap = onForgotPasswordTap;
