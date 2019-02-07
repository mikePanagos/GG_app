const observableModule = require("tns-core-modules/data/observable");

const SelectedPageService = require("../shared/selected-page-service");
const frameModule = require("tns-core-modules/ui/frame");
const user = require("../app-root/Users");
let trys = 3;
function SearchViewModel() {
    SelectedPageService.getInstance().updateSelectedPage("Route");

    const viewModel = observableModule.fromObject({

        /* Add your view model properties here */
        questionNum: (user.getNumCompleted() < user.getTotalNumOfRoute()) ? user.getNumCompleted() + 1 : "you finished",
        question:(user.getNumCompleted() < user.getTotalNumOfRoute()) ? user.getQuestions(user.getRoute()[0] - 1).q : "lo hicimos",
        textFieldValue:"",
        answer:"",
        onButtonTap(args) {
            if (user.game()) {
                const text = this.get("textFieldValue").toLowerCase();
                console.log(text);
                if (text === user.getQuestions(user.getRoute()[0] - 1).a) {
                    this.set("answer", "yes you got it");
                    console.log("correct " + user.getUserPoints() + " " + (trys * 5));
                    user.finished();
                    user.setUserPoints(user.getUserPoints() + (trys * 5));
                    trys = 3;
                    frameModule.topmost().navigate("total/total-page");
                } else {

                    trys--;
                    if (trys === 0) {
                        this.set("answer", "nope sorry and you ran out of trys");
                        user.finished();
                        trys = 3;
                        frameModule.topmost().navigate("total/total-page");
                    } else {
                        let responce = (`nope try again ${(trys)} trys left`);
                        this.set("textFieldValue", "");
                        this.set("answer", responce);

                    }

                    console.log(trys);
                }
            }
        }
    });

    return viewModel;
}

module.exports = SearchViewModel;
