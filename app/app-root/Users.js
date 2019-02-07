const localStorage = require("nativescript-localstorage");

function init () {
    let User = {
        totalpoint:0,
        route:[2, 1],
        totalNumOfRoute:2,
        masterCopyRoute:[2, 1],
        currentObj:0,
        numCompleted:0,
        password:"1234",
        TeamName:"red"
     };
    localStorage.setItem("user", User);

}


let questions = [
     {
        q:"what is the opposite of left",
        a:"right"
    },
    {
        q:"what is the opposite of right",
        a:"left"
    }
];


//gets the route for the user
let getRoute = function () {

    return localStorage.getItem("user").route;

};
let getTotalNumOfRoute = () => localStorage.getItem("user").totalNumOfRoute;
//remove elemete 0 from route
let removeFirstInRoute = function () {
    localStorage.getItem("user").route.shift();
};
// gets the question number they are currently working on
let getCurrentObj = function () {
    setCurrentObj();
    return localStorage.getItem("user").currentObj;

};
//sets currentObj
let setCurrentObj = function () {
    localStorage.getItem("user").currentObj = localStorage.getItem("user").route[0];

};
//retruns the number of objs working on
let getNumCompleted = function () {
    let b = localStorage.getItem("user");
    console.log("this obj " + b);

    return localStorage.getItem("user").numCompleted;

};
let numCompletedPlusOne = function () {
    localStorage.getItem("user").numCompleted++;

};
//checks passward and username
let checkPasswords = function (p, t) {
    if (p === localStorage.getItem("user").password && t === localStorage.getItem("user").TeamName) {
        return true;
    } else {
        return false;
    }

};

//gets the ith question
let getQuestions = function (i) {
    console.log("get questions  " + JSON.stringify(questions[i], null, 4));

    return questions[i];

};

//gets the points
let getUserPoints = function () {
    console.log("get points " + localStorage.getItem("user").totalpoint);

    return localStorage.getItem("user").totalpoint;

};

//set points for user
let setUserPoints = function (newTotal) {
    console.log("points =" + newTotal);

    localStorage.getItem("user").totalpoint = newTotal;
};
//when they got a clue solved or ran out of trys
let finished = function() {
    numCompletedPlusOne();
    removeFirstInRoute();
    setCurrentObj();
};

module.exports = {
    init,
    setUserPoints,
    getUserPoints,
    getQuestions,
    checkPasswords,
    getNumCompleted,
    getCurrentObj,
    getRoute,
    numCompletedPlusOne,
    finished,
    getTotalNumOfRoute
 };
