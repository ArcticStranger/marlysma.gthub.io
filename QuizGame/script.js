const QUESTIONS = [
    {
        text: 'Какое свойство CSS используется для центрирования блочного элемента по горизонтали на странице??',
        answers:['margin: 0 auto;', 'text-align: center;', 'align-items: center;', 'justify-content: center;'],
        rightIndex: 0, 
    },
    {
        text: 'В каком году появился JavaScript?',
        answers: ['1987', '1995', '2001', '2003'],
        rightIndex: 1,
    },
    {
        text: 'Какой компанией был создан JavaScript?',
        answers: ['Sun', 'Microsoft', 'Netscape', 'ORACLE'],
        rightIndex: 2,
    },
    {
        text: 'Кто является создателем языка JavaScript?',
        answers: ['Брендан Эйх', 'Тим Бернерс-Ли', 'Джеймс Гослинг', 'Райан Гослинг'],
        rightIndex: 0,
    },
    {
        text: 'За сколько дней была сделана первая версия JavaScript?',
        answers: ['10', '100', '88', '731'],
        rightIndex: 0,
    },
];

const SCREEN_NODES = document.querySelectorAll('.screen');
const ANSWERS_NODES = document.querySelectorAll('.answer');
const START_GAME_BUTTONS = document.querySelectorAll('.start-game');
const MONEY_NODES = document.querySelectorAll('.money');
const PRIZE_FOR_RIGHT_ANSWER = 5000;
const HIGHLIGHT_TIMEOUT_MS = 1500;

let activeQuestionIndex = 0;
let money = 0;

START_GAME_BUTTONS.forEach(button => {
    button.addEventListener('click', startNewGame)
})

function startNewGame() {
    showScreen(1);
    setActiveQuestion(0);
    updateMoney(0);
}

function updateMoney(newMoney) {
    money = newMoney;
    MONEY_NODES.forEach(moneyNode => {
        moneyNode.textContent = money;
    })
}

function showScreen(index) {
    SCREEN_NODES.forEach((screen, i)=>{
        screen.classList.toggle('visible', i === index);
    })
}

function setActiveQuestion(index) {
    activeQuestionIndex = index;

    const QUESTION_NODE = document.querySelector('.question');
    const activeQuestion = QUESTIONS[index];

    QUESTION_NODE.textContent = activeQuestion.text;

    activeQuestion.isChecking = false;

    setupAnswers(activeQuestion);
}

function setupAnswers(question) {
    const letters = ['A', 'B', 'C', 'D'];
    ANSWERS_NODES.forEach((answerNode, index) => {
        answerNode.textContent = `${letters[index]}. ${question.answers[index]}`;

        answerNode.addEventListener('click', () => { 
            handleAnswerClick(answerNode, question);
    })
  });
}

async function handleAnswerClick(answerNode, question) {
    if (question.isChecking){
        return;
    }

    question.isChecking = true;

    await highlightAnswer(answerNode, 'active');

    const rightAnswerNode = ANSWERS_NODES[question.rightIndex];

    const isRightAnswer = rightAnswerNode.textContent === answerNode.textContent;

    await highlightAnswer(rightAnswerNode, 'right');

    if (!isRightAnswer) {
        showScreen(2);
    }

    const isLastQuestion = activeQuestionIndex === QUESTIONS.length - 1;

    if (isLastQuestion) {
        showScreen(3);
    } else {
        setActiveQuestion(activeQuestionIndex + 1)
    }

    updateMoney(money + 5000);
}

async function highlightAnswer(answerNode, type) {
    answerNode.classList.add(type);

    await timeout(1500);

    clearClassNamesFromQuestion(answerNode);
} 

function clearClassNamesFromQuestion(answerNode) {
    ['active', 'right'].forEach(className => {
        answerNode.classList.remove(className)
    })
}

function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}