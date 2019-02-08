const application = require("tns-core-modules/application");
const frameModule = require("tns-core-modules/ui/frame");
const AppRootViewModel = require("./app-root-view-model");
const user = require("./Users");
function onLoaded(args) {
    const drawerComponent = args.object;
    // console.log("here");
    // user.init();

    if (!user.loggedIn()) {
        console.log("here about to go to login");
        frameModule.topmost().navigate("login/login-page");
    }
    drawerComponent.bindingContext = new AppRootViewModel();
    
}

function onNavigatingTo(args) {
    const page = args.object;
 
    
    page.bindingContext = new AppRootViewModel();
}
function onNavigationItemTap(args) {
    const component = args.object;
    const componentRoute = component.route;
    const componentTitle = component.title;
    const bindingContext = component.bindingContext;

    bindingContext.set("selectedPage", componentTitle);

    frameModule.topmost().navigate({
        moduleName: componentRoute,
        transition: {
            name: "fade"
        }
    });

    const drawerComponent = application.getRootView();
    drawerComponent.closeDrawer();
}

exports.onLoaded = onLoaded;

exports.onNavigatingTo = onNavigatingTo;

exports.onNavigationItemTap = onNavigationItemTap;
