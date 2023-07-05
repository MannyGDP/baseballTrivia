let questionBank = [
    {
        // key = "base" : value = "1st base" : (the object contains key valued pairs)
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

    function displayCurrentQuestion() {
        questionContainer.innerHTML = '';
      
        const currentQuestion = questionBank[currentQuestionIndex];
        const questionText = currentQuestion.question;
        const choices = currentQuestion.choices;
      
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `
          <p>${questionText}</p>
          ${choices.map((choice, index) => `
            <label>
              <input type="radio" name="question-${currentQuestionIndex}" value="${index}">
              ${choice}
            </label>
          `).join('')}
        `;
      
        questionContainer.appendChild(questionElement);
      }
      
    for (let i = 0; i < questionBank.length; i++) {
      const currentQuestion = questionBank[i];
      const questionText = currentQuestion.question;
      const choices = currentQuestion.choices;
  
      const questionElement = document.createElement('div');
      questionElement.innerHTML = `
        <p>${questionText}</p>
        ${choices.map((choice, index) => `
          <label>
            <input type="radio" name="question-${i}" value="${index}">
            ${choice}
          </label>
        `).join('')}
      `;
  
      questionContainer.appendChild(questionElement);
    }
  
  function handleNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questionBank.length) {
      displayCurrentQuestion();
    } else {
      // All questions have been displayed, do something (e.g., show results)
      collectAnswers();
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
      } else {
        resultMessage = "Back to the Dugout";
      }
  
      console.log(`Question ${questionIndex + 1}: ${question.question}`);
      console.log(`Choices: ${question.choices.join(", ")}`);
      console.log(`Answer: ${resultMessage}\n`);
    });
  }
  
  submitButton.addEventListener('click', collectAnswers);
  
//   displayQuestions();
  
  
  submitButton.addEventListener('click', handleNextQuestion);
  
  displayCurrentQuestion();

            //  variable  array- value - array in that value exp.choices
// console.log(questionBank[0].choices[0])
//  figure out how to link question with paragraph in index of ID base

// 1. loop through question 1 choices and create an input for each choice
// 1. loop through choices, make an input for each choice.

// create a function called check answer with parameter of

// let userAnswer = 2; // Assuming the user selected the first option
//     if (userAnswer = 2 === question.answer) {
//   console.log("Correct answer!");
//     } else {
//   console.log("Back to the Dugout");
// }