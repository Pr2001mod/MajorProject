const countDown = ()=>{
    timeLeft--;
    timer.textContent = timeLeft;
    if(timeLeft === 0){
        const confirmUser = confirm("Time Up!!! Do you want to play the quiz again");
        if(confirmUser){
            timeLeft = 15;
            startQuiz();
        }
        else{
            startBtn.style.display = "block";
            container.style.display = "none";
            return;
        }
    }
}
timerID = setInterval(countDown, 1000);{
}

 
const stopTimer = () =>{
clearInterval(timerID);
}

 
const shuffleQuestions = () =>{
for(let i=quiz.length-1; i>0; i--){
    const j = Math.floor(Math.random() * (i+1));
    [quiz[i], quiz[j]] = [quiz[j], quiz[i]];
}
currentQuestionIndex = 0;
showQuestions();
}

 
const startQuiz = () =>{
timeLeft = 15;
timer.style.display = "flex";
shuffleQuestions();
}

 
startBtn.addEventListener('click', ()=>{
startBtn.style.display = "none";
container.style.display = "block";
startQuiz();
});

nextBtn.addEventListener('click', () => {
const selectedChoice = document.querySelector('.choice.selected');
if (!selectedChoice && nextBtn.textContent === "Next") {
    
    displayAlert("Select your answer");
    return;
}
if (quizOver) {
    nextBtn.textContent = "Next";
    scoreCard.textContent = "";
    currentQuestionIndex = 0;
    quizOver = false;
    score = 0;
    startQuiz();
}
else {
    checkAnswer();
}
});