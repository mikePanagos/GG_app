const app = require("tns-core-modules/application");
let c = 0;
const user = require("../app-root/Users");
const HomeViewModel = require("./home-view-model");

function onNavigatingTo(args) {
    const page = args.object;

    if (c === 0) {
        c++;
        user.init();
    }
    page.bindingContext = new HomeViewModel();
}

function onDrawerButtonTap(args) {
    const sideDrawer = app.getRootView();
    sideDrawer.showDrawer();
}

exports.onNavigatingTo = onNavigatingTo;
exports.onDrawerButtonTap = onDrawerButtonTap;
