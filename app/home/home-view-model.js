const observableModule = require("tns-core-modules/data/observable");

const SelectedPageService = require("../shared/selected-page-service");
const localStorage = require("nativescript-localstorage");
const user = require("../app-root/Users");
function HomeViewModel() {
    SelectedPageService.getInstance().updateSelectedPage("Home");

    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
        textFieldValue: "",
        progressValue:user.progress(),
        words: (localStorage.getItem("word")) ? localStorage.getItem("word") : "",
        onButtonTap(args) {
            if (this.get("textFieldValue") !== "") {
                if (this.get("textFieldValue") === "1234") {
                    user.init();
                } else {
                    localStorage.setItem("word", this.get("textFieldValue"));
                    console.log(this.get("textFieldValue"));
                    this.set("words", this.get("textFieldValue"));
                }
            }
        }

    });

    return viewModel;
}

module.exports = HomeViewModel;
