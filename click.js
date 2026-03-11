//click the <img> tag, score= score+1
let score = 0
let howMuchTheScoreGoesUpEveryClick = 1
//How much the upgrade cost at first
let upgradeCost = 25
document.getElementById("home").addEventListener("click", scoreGoUp)
document.getElementById("upgrade").addEventListener("click", scoreMult)
//display core on screen
function scoreGoUp() {
    //how the score will go up
    score = score + howMuchTheScoreGoesUpEveryClick
    //when click score go up, then you see it
    document.getElementById("score").innerHTML = score
    document.getElementById("upgradeCost").innerHTML = upgradeCost
    if (score >= 25) {
        console.log('female dog')
        document.getElementById('upgrade').style.visibility = "visible"
    }

}
function scoreMult() {
    if (score >= upgradeCost) {
        score = score - upgradeCost;
        upgradeCost = upgradeCost + 5;
        howMuchTheScoreGoesUpEveryClick = howMuchTheScoreGoesUpEveryClick + 1
    }
}