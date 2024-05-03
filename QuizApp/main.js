const questions = [
    {
        question: "2+2 = ?",
        answers: [
            { text: '1', correct: false },
            { text: '2', correct: false },
            { text: '3', correct: false },
            { text: '4', correct: true },
        ]
    },
    {
        question: "2*2 = ?",
        answers: [
            { text: '1', correct: false },
            { text: '2', correct: false },
            { text: '3', correct: false },
            { text: '4', correct: true },
        ]
    },
    {
        question: "10-6 = ?",
        answers: [
            { text: '1', correct: false },
            { text: '2', correct: false },
            { text: '3', correct: false },
            { text: '4', correct: true },
        ]
    },
    {
        question: "20/5 = ?",
        answers: [
            { text: '1', correct: false },
            { text: '2', correct: false },
            { text: '3', correct: false },
            { text: '4', correct: true },
        ]
    },
]

const questionElement = document.querySelector(".question")
const answersElement = document.querySelector(".answers")
const btnElement = document.querySelector(".next")

let curIdx = 0
let curScore = 0

function startQuiz() {
    curIdx = 0
    curScore = 0
    btnElement.innerHTML = "Next"
    showQuestion()
}

function showQuestion() {
    resetState()
    let curQuestion = questions[curIdx]
    let qNo = curIdx + 1
    questionElement.innerHTML = qNo + ". " + curQuestion.question

    curQuestion.answers.forEach((answer) => {
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        answersElement.appendChild(button)

        if (answer.correct) {
            button.dataset.correct = answer.correct
        }

        button.addEventListener('click', checkAnswer)
    })
}

function resetState() {
    btnElement.style.display = "none"

    while (answersElement.firstChild) {
        answersElement.removeChild(answersElement.firstChild)
    }
}

function checkAnswer(e) {
    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct === "true"

    if (isCorrect) {
        selectedBtn.classList.add("correct")
        curScore += 1
    } else {
        selectedBtn.classList.add("incorrect")
    }

    Array.from(answersElement.children).forEach((button) => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        button.disabled = true
    })

    btnElement.style.display = "block"
}

function showScore() {
    resetState()
    questionElement.innerHTML = `You have scored ${curScore} out of ${questions.length} !!!`
    btnElement.innerHTML = "Play Again"
    btnElement.style.display = "block"
}

function handleNext() {
    curIdx += 1

    if (curIdx < questions.length) {
        showQuestion()
    } else {
        showScore()
    }
}

btnElement.addEventListener('click', () => {
    if (curIdx < questions.length) {
        handleNext()
    } else {
        startQuiz()
    }
})

startQuiz()