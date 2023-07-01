let questionBank = [
    {
      "base": "1st base",
      "question": "What year were the Dodgers founded?",
      "choices": ["1873", "1920", "1883", "1905"],
      "answer": 2,
      "position": 0,
    },
    {
      "base": "2nd base",
      "question": "What year did the Dodgers move to Los Angeles?",
      "choices": ["1909", "1926", "1948", "1958"],
      "answer": 3,
      "position": 1,
    },
  ];
  
  const questionContainer = document.getElementById('question-container');
  const submitButton = document.getElementById('submit-button');
  let selectedAnswers = [];
  
  function displayQuestions() {
    questionContainer.innerHTML = '';
  
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
  }
  
  function collectAnswers() {
    selectedAnswers = [];
  
    let userAnswer = 2; // Assuming the user selected the first option

    for (let i = 0; i < questionBank.length; i++) {
      const question = questionBank[i];
      const isCorrect = userAnswer === question.answer;
    
      const resultMessage = isCorrect ? "Correct answer!" : "Back to the Dugout";
      console.log(resultMessage);
    }
    
  
    console.log(selectedAnswers);
  }
  
  submitButton.addEventListener('click', collectAnswers);
  
  displayQuestions();
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