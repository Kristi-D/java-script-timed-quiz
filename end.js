
var username = document.getElementById('username');
var saveScoreBtn = document.getElementById('saveScoreBtn');
var mostRecentScore = localStorage.getItem('mostRecentScore');
var finalScore = document.getElementById('finalScore');

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {

    saveScoreBtn.disabled = !username.value;

});

saveHighScore = (e) => {
    e.preventDefault();
}