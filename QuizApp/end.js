const username=document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;
finalScore.innerText = mostRecentScore;

username.addEventListener("keyup",()=>{
    // console.log(username.value);
    saveScoreBtn.disabled = !username.value;
})

saveHighScore = e =>{
    console.log("Save button clicked");
    e.preventDefault();

    const score ={
        score : mostRecentScore,
        name : username.value
    };
    highScores.push(score);
    highScores.sort((a,b) => b.score - a.score); // means if b.score > a.score put b.score before a.score in the list
    highScores.splice(5);

    localStorage.setItem("highScores",JSON.stringify(highScores));
    window.location.assign('/'); //go back to home page
    // console.log(highScores);
}