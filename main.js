import inquirer from "inquirer";
import chalk from "chalk";
let userName = await inquirer.prompt([{
        name: "name",
        type: "input",
        message: chalk.greenBright.bold("Please, Enter Your Name: ")
    }]);
const quizQuestions = {
    "History": [
        { question: "Question 1: In which year did World War II end?", choices: ["A) 1943", "B) 1944", "C) 1945", "D) 1946"], correctAnswer: "C) 1945" },
        { question: "Question 2: Who was the first emperor of China?", choices: ["A) Liu Bang", "B) Qin Shi Huang", "C) Wu Zetian", "D) Kublai Khan"], correctAnswer: "B) Qin Shi Huang" },
        { question: "Question 3: The Magna Carta was signed in which year?", choices: ["A) 1215", "B) 1220", "C) 1235", "D) 1240"], correctAnswer: "A) 1215" },
        { question: "Question 4: Who was the British Prime Minister during most of World War II?", choices: ["A) Neville Chamberlain", "B) Clement Attlee", "C) Winston Churchill", "D) Harold Macmillan"], correctAnswer: "C) Winston Churchill" },
        { question: "Question 5: Which civilization built the Machu Picchu?", choices: ["A) Maya", "B) Aztec", "C) Inca", "D) Olmec"], correctAnswer: "C) Inca" }
    ],
    "Science and Technology": [
        { question: "Question 1: What is the powerhouse of the cell?", choices: ["A) Nucleus", "B) Ribosome", "C) Mitochondrion", "D) Endoplasmic Reticulum"], correctAnswer: "C) Mitochondrion" },
        { question: "Question 2: Who developed the theory of relativity?", choices: ["A) Isaac Newton", "B) Galileo Galilei", "C) Nikola Tesla", "D) Albert Einstein"], correctAnswer: "D) Albert Einstein" },
        { question: "Question 3: What is the main gas found in the Earth's atmosphere?", choices: ["A) Oxygen", "B) Hydrogen", "C) Nitrogen", "D) Carbon Dioxide"], correctAnswer: "C) Nitrogen" },
        { question: "Question 4: What is the speed of light?", choices: ["A) 150,000 km/s", "B) 250,000 km/s", "C) 300,000 km/s", "D) 350,000 km/s"], correctAnswer: "C) 300,000 km/s" },
        { question: "Question 5: Who invented the telephone?", choices: ["A) Thomas Edison", "B) Alexander Graham Bell", "C) Guglielmo Marconi", "D) Nikola Tesla"], correctAnswer: "B) Alexander Graham Bell" }
    ],
    "Literature and Art": [
        { question: "Question 1: Who wrote '1984'?", choices: ["A) Aldous Huxley", "B) J.K. Rowling", "C) George Orwell", "D) Ernest Hemingway"], correctAnswer: "C) George Orwell" },
        { question: "Question 2: The painting 'Starry Night' was created by which artist?", choices: ["A) Pablo Picasso", "B) Vincent van Gogh", "C) Claude Monet", "D) Leonardo da Vinci"], correctAnswer: "B) Vincent van Gogh" },
        { question: "Question 3: Which novel begins with the line, 'Call me Ishmael'?", choices: ["A) Moby-Dick", "B) The Great Gatsby", "C) To Kill a Mockingbird", "D) War and Peace"], correctAnswer: "A) Moby-Dick" },
        { question: "Question 4: 'The Persistence of Memory' is a famous painting by which artist?", choices: ["A) Salvador Dalí", "B) Michelangelo", "C) Henri Matisse", "D) Rembrandt"], correctAnswer: "A) Salvador Dalí" },
        { question: "Question 5: Who is the author of 'Pride and Prejudice'?", choices: ["A) Emily Brontë", "B) Mary Shelley", "C) Jane Austen", "D) Louisa May Alcott"], correctAnswer: "C) Jane Austen" }
    ],
    "World Geography": [
        { question: "Question 1: What is the largest country by land area?", choices: ["A) China", "B) United States", "C) Russia", "D) Canada"], correctAnswer: "C) Russia" },
        { question: "Question 2: Which continent is known as the 'Dark Continent'?", choices: ["A) Asia", "B) Africa", "C) South America", "D) Antarctica"], correctAnswer: "B) Africa" },
        { question: "Question 3: The Great Barrier Reef is located in which country?", choices: ["A) Indonesia", "B) Philippines", "C) Australia", "D) Thailand"], correctAnswer: "C) Australia" },
        { question: "Question 4: Which river is the longest in the world?", choices: ["A) Amazon", "B) Nile", "C) Yangtze", "D) Mississippi"], correctAnswer: "B) Nile" },
        { question: "Question 5: Mount Everest is part of which mountain range?", choices: ["A) Andes", "B) Rockies", "C) Alps", "D) Himalayas"], correctAnswer: "D) Himalayas" }
    ]
};
async function askQuestion(question, choices, correctAnswer) {
    let response = await inquirer.prompt([{
            name: "answer",
            type: "list",
            message: question,
            choices: choices
        }]);
    if (response.answer === correctAnswer) {
        console.log(chalk.green("\nCorrect Answer!\n"));
        return 20;
    }
    else {
        console.log(`${chalk.red("\nIncorrect Answer! The correct answer is")} ${chalk.bgRed(correctAnswer)}\n`);
        return 0;
    }
}
async function startQuiz() {
    console.clear();
    console.log(chalk.bgGreen.bold(`\t\t\t\t\t\tHi! ${userName.name.toUpperCase()}`));
    console.log(chalk.bold.yellow(`
    __          __  _                            _           ____        _        _____                      
    \\ \\        / / | |                          | |         / __ \\      (_)      / ____|                     
     \\ \\  /\\  / /__| | ___ ___  _ __ ___   ___  | |_ ___   | |  | |_   _ _ ____ | |  __  __ _ _ __ ___   ___ 
      \\ \\/  \\/ / _ \\ |/ __/ _ \\| '_ \` _ \\ / _ \\ | __/ _ \\  | |  | | | | | |_  / | | |_ |/ _\` | '_ \` _ \\ / _ \\
       \\  /\\  /  __/ | (_| (_) | | | | | |  __/ | || (_) | | |__| | |_| | |/ /  | |__| | (_| | | | | | |  __/
        \\/  \\/ \\___|_|\\___\\___/|_| |_| |_|\\___|  \\__\\___/   \\___\\_\\\\__,_|_/___|  \\_____|\\__,_|_| |_| |_|\\___|

`));
    let selectOption = await inquirer.prompt([{
            name: "option",
            type: "list",
            message: "Which topic would you like to choose: ",
            choices: ["History", "Science and Technology", "World Geography", "Literature and Art"]
        }]);
    console.log("Selected Option:", selectOption.option);
    quiz(selectOption.option, quizQuestions[selectOption.option]);
}
async function quiz(title, question) {
    let score = 0;
    console.clear();
    console.log(chalk.bold.bgGreen(`\n\t\t\t\t\t\tWelcome to the ${title} Quiz!\n`));
    for (let q of question) {
        score += await askQuestion(q.question, q.choices, q.correctAnswer);
    }
    console.log(chalk.bgGreen.bold(`\t\t\t\t\t\tDear ${userName.name.toUpperCase()}, Your Score is ${score}\n`));
}
startQuiz();
