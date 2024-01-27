const quiz = [
    {
        question: "What is the capital of France?",
        ans1text: "Berlin",
        ans2text: "Madrid",
        ans3text: "Paris",
        ans4text: "Rome",
        answer: "Paris",
    },
    {
        question: "Which planet is known as the Red Planet?",
        ans1text: "Venus",
        ans2text: "Mars",
        ans3text: "Jupiter",
        ans4text: "Saturn",
        answer: "Mars",
    },
    {
        question: "What is the largest mammal?",
        ans1text: "Elephant",
        ans2text: "Blue Whale",
        ans3text: "Giraffe",
        ans4text: "Hippopotamus",
        answer: "Blue Whale",
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        ans1text: "Charles Dickens",
        ans2text: "William Shakespeare",
        ans3text: "Jane Austen",
        ans4text: "Mark Twain",
        answer: "William Shakespeare",
    },
    {
        question: "What is the capital of Japan?",
        ans1text: "Beijing",
        ans2text: "Seoul",
        ans3text: "Tokyo",
        ans4text: "Bangkok",
        answer: "Tokyo",
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        ans1text: "Oxygen",
        ans2text: "Gold",
        ans3text: "Iron",
        ans4text: "Silver",
        answer: "Oxygen",
    },
    {
        question: "What is the largest ocean?",
        ans1text: "Atlantic Ocean",
        ans2text: "Indian Ocean",
        ans3text: "Southern Ocean",
        ans4text: "Pacific Ocean",
        answer: "Pacific Ocean",
    },
    {
        question: "Who painted the Mona Lisa?",
        ans1text: "Vincent van Gogh",
        ans2text: "Leonardo da Vinci",
        ans3text: "Pablo Picasso",
        ans4text: "Claude Monet",
        answer: "Leonardo da Vinci",
    },
    {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        ans1text: "China",
        ans2text: "South Korea",
        ans3text: "Japan",
        ans4text: "Vietnam",
        answer: "Japan",
    },
    {
        question: "What is the currency of Brazil?",
        ans1text: "Euro",
        ans2text: "Pound Sterling",
        ans3text: "Real",
        ans4text: "Yen",
        answer: "Real",
    },
];

const question = document.getElementById("quiz-question");
console.log(question);
console.log(question.textContent)
const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const answerElement = document.querySelectorAll(".answer");
console.log(option_a);
console.log(option_b);  
console.log(option_c);
console.log(option_d);
console.log(option_a.textContent);
console.log(option_b.textContent);
console.log(option_c.textContent);
console.log(option_d.textContent);

const submit = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

console.log(quiz[currentQuestion].question);
console.log(quiz[currentQuestion].ans1text);
console.log(quiz[currentQuestion].ans2text);
console.log(quiz[currentQuestion].ans3text);
console.log(quiz[currentQuestion].ans4text);

question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;


submit.addEventListener("click", () => {
    const checkedAns = document.querySelector('input[type="radio"]:checked')
    console.log(checkedAns);
    console.log(checkedAns.nextElementSibling.textContent);
    if( checkedAns === null){
        alert("Please select an answer");
    }else{
        if( checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer){
            score++;
        }

        currentQuestion++;
        if( currentQuestion < quiz.length){
            question.textContent = quiz[currentQuestion].question;
            option_a.textContent = quiz[currentQuestion].ans1text;
            option_b.textContent = quiz[currentQuestion].ans2text;
            option_c.textContent = quiz[currentQuestion].ans3text;
            option_d.textContent = quiz[currentQuestion].ans4text;
            checkedAns.checked = false;
        }else{
            alert("Your score is " + score + " out of " + quiz.length);
            location.reload();
        }

    }
});
