import readline from "readline-sync";

const questions = [
  { question: "What is the capital of France?\n", answer: "Paris" },
  { question: "What is 2 + 2?\n", answer: "4" },
  { question: "Who wrote 'Hamlet'?\n", answer: "Shakespeare" },
  { question: "What is the largest mammal?\n", answer: "Blue Whale" },
  { question: "How many continents are there?\n", answer: "7" },
  { question: "What planet is known as the Red Planet?\n", answer: "Mars" },
  { question: "What gas do plants absorb?\n", answer: "Carbon Dioxide" },
  { question: "Who painted the Mona Lisa?\n", answer: "Da Vinci" },
  { question: "What is the square root of 64?\n", answer: "8" },
  { question: "What is the boiling point of water in Celsius?\n", answer: "100" },
];

function playQuiz() {
  let score = 0;
  console.log("Welcome to the quiz game!\n");
  questions.forEach((q, index) => {
    let answer = readline.question(`${index + 1}. ${q.question}`);
    if (answer.toLowerCase() === q.answer.toLowerCase()) {
      console.log("Correct answer");
      score++;
    } else {
      console.log(`Wrong answer the correct answer is ${q.answer}`);
    }
    console.log("");
  });

  console.log(`Your final score is ${score}/${questions.length}`);
  if (score === questions.length) {
    console.log("Congratulations! You scored a perfect 10/10");
  } else {
    console.log("Good try! Play again to improve your score");
  }
}

playQuiz();