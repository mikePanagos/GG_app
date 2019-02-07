const app = require("tns-core-modules/application");

const TotalViewModel = require("./total-view-model");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new TotalViewModel();
}

function onDrawerButtonTap(args) {
    const sideDrawer = app.getRootView();
    sideDrawer.showDrawer();
}

exports.onNavigatingTo = onNavigatingTo;
exports.onDrawerButtonTap = onDrawerButtonTap;
