const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Invalid selection');
  }
};

let getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};
let userChoice = getUserChoice('paper');
let computerChoice = getComputerChoice();

let determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    console.log('Tie!');
  } else if (userChoice === 'rock') {
    if (computerChoice === 'scissors') {
      console.log('Win!');
    } else {
      console.log('Lose.');
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      console.log('Win!');
    } else {
      console.log('Lose.');
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
      console.log('Win!');
    } else {
      console.log('Lose.');
    }
  } else {
    console.log('Invalid selection.');
  }
};
determineWinner(userChoice, computerChoice);
console.log(`You play ${userChoice}`);
console.log(`Computer plays ${computerChoice}`);