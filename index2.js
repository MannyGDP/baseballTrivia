const questionBank = [
  {
    "base": "1st base",
    "question": "What year were the Dodgers founded?",
    "choices": ["1873", "1920", "1883", "1905"],
    "answerIndex": 2,
    "position": 0,
  },
  {
    "base": "2nd base",
    "question": "What year did the Dodgers move to Los Angeles?",
    "choices": ["1909", "1926", "1948", "1958"],
    "answerIndex": 3,
    "position": 1,
  },
  {
    "base": "3rd base",
    "question": "Which Pitcher is regarded as the best Pitcher ever?",
    "choices": ["Newcombe", "Koufax", "Valenzuela", "Kershaw"],
    "answerIndex": 1,
    "position": 2,
  },
  {
    "base": "home plate",
    "question": "How many World Series have the Dodgers won?",
    "choices": ["9", "7", "2", "4"],
    "answerIndex": 1,
    "position": 3,
  },
];

const questionContainer = document.getElementById('question-container');
const submitButton = document.getElementById('submit-button');
let selectedAnswers = [];
let currentQuestionIndex = 0;
let intervalId; // Variable to store the interval ID

function displayCurrentQuestion() {
  questionContainer.innerHTML = '';

  const currentQuestion = questionBank[currentQuestionIndex];
  const questionText = currentQuestion.question;
  const choices = currentQuestion.choices;

  const questionElement = document.createElement('div');
  questionElement.innerHTML = `
    <p>${questionText}</p>
    ${choices
      .map(
        (choice, index) => `
          <label>
            <input type="radio" name="question-${currentQuestionIndex}" value="${index}">
            ${choice}
          </label>
        `
      )
      .join('')}
  `;

  questionContainer.appendChild(questionElement);
}

// Rest of the code...

function handleNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questionBank.length) {
    displayCurrentQuestion();
  } else {
    // All questions have been displayed, go back to index page
    window.location.href = 'indextest.html';
  }
}

function collectAnswers() {
  selectedAnswers = [];

  const inputElements = document.querySelectorAll('input[type="radio"]:checked');

  inputElements.forEach((input) => {
    const questionIndex = parseInt(input.name.split('-')[1]);
    const selectedAnswerIndex = parseInt(input.value);
    const question = questionBank[questionIndex];

    const isCorrect = selectedAnswerIndex === question.answerIndex;

    let resultMessage;
    if (isCorrect) {
      resultMessage = "Correct answer! Next Batter";
      handleNextQuestion(); // Move to the next question
    } else {
      resultMessage = "Incorrect answer! Back to the Index Page";
      window.location.href = 'indextest.html'; // Go back to index page
    }

    console.log(`Question ${questionIndex + 1}: ${question.question}`);
    console.log(`Choices: ${question.choices.join(", ")}`);
    console.log(`Answer: ${resultMessage}\n`);

    // Display the result message on the page
    const resultElement = document.createElement('p');
    resultElement.textContent = resultMessage;
    questionContainer.appendChild(resultElement);
  });
}

submitButton.addEventListener('click', collectAnswers);

displayCurrentQuestion();

// Call the `handleNextQuestion` function every 5 seconds (5000 milliseconds)
intervalId = setInterval(handleNextQuestion, 5000);
