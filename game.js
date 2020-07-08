var question = document.getElementById("question");
var choices = Array.from(document.getElementsByClassName('choice-text'));
var progressText = document.getElementById('progressText');
var scoreText = document.getElementById('score');


let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];


let questions = [
    {
        question: "JavaScript written under which of the following tag?",
        choice1: "<JavaScript></JavaScript>",
        choice2: "<script></script>",
        choice3: "<code></code>",
        choice4: "<head></head>",
        answer: 2
    },


    {
        question: "Variable in JavaScript declared with which of the following keyword?",
        choice1: "new",
        choice2: "int",
        choice3: "var",
        choice4: "string",
        answer: 3
    },


    {
        question: "Which of the followings are primitive data types in JavaScript?",
        choice1: "String",
        choice2: "Number",
        choice3: "Boolean",
        choice4: "All of the above",
        answer: 4
    },


    {
        question: "What is null in JavaScript",
        choice1: "Null means empty string value",
        choice2: "Null means unknown value",
        choice3: "Null means absence of a value",
        choice4: "Null means zero value",
        answer: 3
    },


    {
        question: "Which of the following is not a valid keyword in JavaScript?",
        choice1: "module",
        choice2: "function",
        choice3: "this",
        choice4: "try",
        answer: 1
    },

];


//constants
var CORRECT_Bonus = 10;
var MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {

    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        return window.location.assign("/end.html");
    }

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        var selectedChoice = e.target;
        var selectedAnswer = selectedChoice.dataset["number"];
        
        var classToApply = 'incorrect';
        if (selectedAnswer == currentQuestion.answer) {
            classToApply = 'correct';
        }

        if (classToApply === "correct") {
            incrementScore(CORRECT_Bonus);

        }
        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout( () => {  
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();
        }, 1000);
    });
});


incrementScore = num => {

    score += num;
    scoreText.innerText = score;
}
startGame();


