const observableModule = require("tns-core-modules/data/observable");
const user = require("../app-root/Users");
const SelectedPageService = require("../shared/selected-page-service");

function TotalViewModel() {
    SelectedPageService.getInstance().updateSelectedPage("Total");

    const viewModel = observableModule.fromObject({
       
        number:" ",
        onButtonTap(args) {
            console.log("button clicked");

            let point = user.getUserPoints();
            console.log("the number is " + point);
            this.set("number", ("total is " + point));
        }
   

    });

    return viewModel;
}

module.exports = TotalViewModel;
