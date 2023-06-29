let questionBank = [
{
    // key     value   (object contains key valued pairs)
    "base": "1st base",
    "question": "What year were the Dodgers founded?",
    "choices": ["1873", "1920", "1883", "1905"], 
    "answer": 2
},

{
    "base": "2nd base",
    "question": "What year did the Dodgers move to Los Angeles?",
    "choices": ["1909", "1926", "1948", "1958"],
    "answer": 3
}
];
for (let i = 0; i < questionBank.length; i++) { 
    text += questionBank[i] + "<br>";
  }
        //  variable  array- value - array in that value exp.choices
console.log(questionBank[0].choices[0])
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