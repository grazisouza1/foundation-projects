const questions = [
    {
        question: "Which one of these is not a programming language?",
        answers: [
            {text: 'JavaScript', correct: false},
            {text: 'C', correct: false},
            {text: 'HTML', correct: true},
            {text: 'Java', correct: false}
        ]
    },
    {
        question: 'What is the simbol for SELECTION on database?',
        answers: [
            {text: 'σ', correct: true},
            {text: 'π', correct: false},
            {text: 'X', correct: false},
            {text: 'U', correct: false}
        ]
    },
    {
        question: 'Which command in Java is use for print?',
        answers: [
            {text: 'print()', correct: false},
            {text: 'PublicStaticVoid()', correct: false},
            {text: 'console.log()', correct: false},
            {text: 'SystemOutPrint()', correct: true},
        ]
    },
    {
        question: 'Wich command is used to change the branch on git?',
        answers: [
            {text: 'git pull', correct: false},
            {text: 'git checkout', correct: true},
            {text: 'git log', correct: false},
            {text: 'git change', correct: false},
        ]
    }
]

const questionElement = document.querySelector('#question')
const nextButton = document.querySelector('.next-btn')
const answerButton = document.querySelector('#options-btn')

let score = 0
let currentQuestionIndex = 0

function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    nextButton.innerHTML = 'Next!';
    showQuestion();
}

function showQuestion() {
    resetState()
    let currentQuestion = questions[currentQuestionIndex]
    let questionNum = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNum + '. ' + currentQuestion.question

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add('btn')
        answerButton.appendChild(button)
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
    })
}

function resetState(){
    nextButton.style.display = "none"
    while (answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
    message.innerHTML = ''
}

function selectAnswer(e){
    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct === 'true'
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++
    } else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add("correct")
        }
        button.disabled = true
    })
    nextButton.style.display = 'block'
}

function showScore(){
    resetState()
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
    let message = document.querySelector('#message')
    switch (score) {
        case 1: 
            message.innerHTML = 'Try to study more. You can do it!'
            break

        case 2: 
            message.innerHTML = 'You got 50%! Keep trying, you are in the right way'
            break

        case 3:
            message.innerHTML = 'Thats really good! Yore great!'
            break
        
        case 4: 
            message.innerHTML = 'Thats a 100%!! Thats AMAZING!'
            break

        default:
            message.innerHTML = 'ERROR'
    }

    nextButton.innerHTML = 'Play Again'
    nextButton.style.display = 'block'
}

function handleNextButton(){
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length){
        showQuestion()
    } else {
        showScore()
    }
}

nextButton.addEventListener('click', () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton()
    } else{
        startQuiz()
    }
})

startQuiz()