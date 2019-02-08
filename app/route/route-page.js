const app = require("tns-core-modules/application");;
const RouteViewModel = require("./route-view-model");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new RouteViewModel();
}

function onDrawerButtonTap(args) {
    const sideDrawer = app.getRootView();
    sideDrawer.showDrawer();
}

exports.onNavigatingTo = onNavigatingTo;
exports.onDrawerButtonTap = onDrawerButtonTap;
