const observableModule = require("tns-core-modules/data/observable");

const user = require("../app-root/Users");

function Question2ViewModel() {
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

module.exports = Question2ViewModel;
