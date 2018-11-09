//script doesn't start until page is ready;


//variables for the crystals used in the game
var crystalPoints = [1, 2, 3, 4]
var crystalA = crystalPoints[0];
var crystalB = crystalPoints[1];
var crystalC = crystalPoints[2];
var crystalD = crystalPoints[3];

//core game variables
var wins = 0;
var losses = 0;
var active = false;
var targetScore = 0;
var scoreCounter = 0;

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    //crystal values reset
    crystalA = crystalPoints[0];
    crystalB = crystalPoints[1];
    crystalC = crystalPoints[2];
    crystalD = crystalPoints[3];
    console.log(crystalA);
    console.log(crystalB);
    console.log(crystalC);
    console.log(crystalD);

}

//start button event listener. Changes to restart once it's been clicked once.
$("#startButton").click(function () {
    console.log(active);
    active = true;
    console.log(active);
    shuffle(crystalPoints);
    scoreCounter = 0;
    targetScore = Math.floor(10 + Math.random() * 90);

    $("#startButton").text("Restart");
    $("#targetScore").text("Target Score: " + targetScore);
    $("#currentScore").text("Current Score: " + scoreCounter);
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);

});

//event listeners for each individual crystal images

$("#crystal-A").click(function () {
    if (active == true) {
        scoreCounter = scoreCounter + crystalA;
        console.log(scoreCounter);
        $("#currentScore").text("Current Score:" + scoreCounter);
        scoreCheck();
    }
});

$("#crystal-B").click(function () {
    if (active == true) {
        scoreCounter = scoreCounter + crystalB;
        console.log(scoreCounter);
        $("#currentScore").text("Current Score:" + scoreCounter);
        scoreCheck();
    };
});

$("#crystal-C").click(function () {
    if (active == true) {
        scoreCounter = scoreCounter + crystalC;
        console.log(scoreCounter);
        $("#currentScore").text("Current Score:" + scoreCounter);
        scoreCheck();
    };
});

$("#crystal-D").click(function () {
    if (active == true) {
        scoreCounter = scoreCounter + crystalD;
        console.log(scoreCounter);
        $("#currentScore").text("Current Score:" + scoreCounter);
        scoreCheck();
    };
});


//function to check the score
function scoreCheck() {
    if (scoreCounter > targetScore) {
        alert("YOU WENT OVER! GAME OVER.");
        losses++;
        resetGame();

    }
    else if (scoreCounter == targetScore) {
        alert("YOU WIN!");
        wins++;
        resetGame();

    }
};

//function to reset the game
function resetGame() {
    active = false;
    targetScore = 0;
    scoreCounter = 0;

    $("#startButton").text("Play Again");
    $("#targetScore").text("Target Score: " + targetScore);
    $("#currentScore").text("Current Score: " + scoreCounter);
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
}
