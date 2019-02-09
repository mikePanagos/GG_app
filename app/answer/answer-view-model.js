const observableModule = require("tns-core-modules/data/observable");
const frameModule = require("tns-core-modules/ui/frame");

const user = require("../app-root/Users");

function AnswerViewModel() {
    const viewModel = observableModule.fromObject({
        number: user.getQuestions().a,
        onButtonTap(args) {
            console.log("button clicked");
            user.finished();
            frameModule.topmost().navigate("route/route-page");

        }
    });

    return viewModel;
}

module.exports = AnswerViewModel;
