import readlineSync from 'readline-sync';

export default function askName() {
  console.log(`Welcome to the Brain Games! 
May I have your name?`);

  const name = readlineSync.question('Your answer: ');

  console.log(`Hello, ${name}!`);
}
