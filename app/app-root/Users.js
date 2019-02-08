const localStorage = require("nativescript-localstorage");
let userNum = 0;
let User = [{
    totalpoint:0,
    route:[2, 1],
    totalNumOfRoute:2,
    masterCopyRoute:[2, 1],
    currentObj:0,
    numCompleted:0,
    password:"1234",
    TeamName:"red" },
   { totalpoint:0,
    route:[1, 2],
    totalNumOfRoute:2,
    masterCopyRoute:[1, 2],
    currentObj:0,
    numCompleted:0,
    password:"1234",
    TeamName:"green" }
];
function init () {
    let initUser = [{
        totalpoint:0,
        route:[2, 1],
        totalNumOfRoute:2,
        masterCopyRoute:[2, 1],
        currentObj:0,
        numCompleted:0,
        password:"1234",
        TeamName:"red" },
       { totalpoint:0,
        route:[1, 2],
        totalNumOfRoute:2,
        masterCopyRoute:[1, 2],
        currentObj:0,
        numCompleted:0,
        password:"1234",
        TeamName:"green" }
    ];
         console.log("in init");

        localStorage.setItemObject("user", initUser);
        localStorage.setItem("init", true);
        logOut();


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
let saveUser = function() {
    localStorage.setItemObject("user", User);
};

//gets the route for the user
let getRoute = function () {

    return localStorage.getItem("user")[userNum].route;

};
let getTotalNumOfRoute = () => localStorage.getItem("user")[userNum].totalNumOfRoute;
//remove elemete 0 from route
let removeFirstInRoute = function () {
    User[userNum].route.shift();
};
// gets the question number they are currently working on
let getCurrentObj = function () {
    setCurrentObj();
    return localStorage.getItem("user")[userNum].currentObj;

};
//sets currentObj
let setCurrentObj = function () {
    User[userNum].currentObj = localStorage.getItem("user")[userNum].route[0];
    saveUser();

};
//retruns the number of objs working on
let getNumCompleted = function () {
    // let b = localStorage.getItem("user")[userNum];
    // console.log("this obj " + JSON.stringify(b,null,4));
    return localStorage.getItem("user")[userNum].numCompleted;


};
let numCompletedPlusOne = function () {
    
    User[userNum].numCompleted++;

};
//checks passward and username
let checkPasswords = function (p, t) {
    // console.log(localStorage.getItem("user")[userNum].password+" "+localStorage.getItem("user")[userNum].TeamName);
    console.log(localStorage.getItem("user").length+" is the length of user");
    
    for (let i = 0; i < localStorage.getItem("user").length; i++) {
        console.log("checking users "+localStorage.getItem("user")[i].TeamName);
        
        if (p === localStorage.getItem("user")[i].password && t === localStorage.getItem("user")[i].TeamName) {
            console.log("checkPasswords=true");
            userNum = i;

            return true;
        
        } else {
            console.log("checkPasswords=false");


        }
    }

    return false;

};

//gets the ith question
let getQuestions = function () {
    
    return questions[localStorage.getItem("user")[userNum].route[0] - 1];

};

//gets the points
let getUserPoints = function () {
    console.log("get points " + localStorage.getItem("user")[userNum].totalpoint);

    return localStorage.getItem("user")[userNum].totalpoint;

};

//set points for user
let setUserPoints = function (newTotal) {
    console.log("points =" + newTotal);

    User[userNum].totalpoint = newTotal;
    saveUser();

};
//when they got a clue solved or ran out of trys
let finished = function() {
    numCompletedPlusOne();
    removeFirstInRoute();
    setCurrentObj();
};
let game = function() {
    if (localStorage.getItem("user")[userNum].numCompleted < localStorage.getItem("user")[userNum].totalNumOfRoute) {
        console.log("true");
        
        return true;
    } else {
        console.log("false");

        return false;
    }
};
// for progress bar
let progress = () => {
    console.log("progress is " + getNumCompleted() / getTotalNumOfRoute() * 100);
    
   return getNumCompleted() / getTotalNumOfRoute() * 100;
};

//checkes if logged in
let loggedIn = function () {

    console.log("checking if logged in");
    console.log("is logged in is -> "+localStorage.getItem("loggedIn"));
    
    
    if (localStorage.getItem("loggedIn") === "false" || localStorage.getItem("loggedIn") === null) {
        console.log("here about to fail login");
        
        return false;
    } else if (localStorage.getItem("loggedIn") === "true") {
        console.log("here about to pass login");

        return true;
    }
};
//logs in
let logIn = function() {
    localStorage.setItem("loggedIn", true);
};
//logs out
let logOut = function() {
    localStorage.setItem("loggedIn", false);
};

module.exports = {
    logIn,
    logOut,
    loggedIn,
    game,
    progress,
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
