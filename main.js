const phrases = [
  'Believe in yourself.',
  'You are capable of greatness.',
  'Success comes from hard work.',
  'The only limit is your imagination.',
  'Dream big and never give up.',
  'Every day is a new opportunity.',
  'Stay positive and keep moving forward.',
  'Challenges are opportunities in disguise.',
  'Your time is now.',
];

const authors = [
  'Anonymous',
  'Walt Disney',
  'Albert Einstein',
  'Oprah Winfrey',
  'Nelson Mandela',
  'Steve Jobs',
  'Eleanor Roosevelt',
  'Henry Ford',
  'Maya Angelou',
  'Confucius',
];

const themes = [
  'Perseverance',
  'Positivity',
  'Determination',
  'Courage',
  'Ambition',
  'Optimism',
  'Resilience',
  'Leadership',
  'Inspiration',
  'Wisdom',
];

const generateRandom = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const generateRandomMessage = (phrasesArr, authorsArr, themesArr) => {
  return `${generateRandom(phrasesArr)} 
   -${generateRandom(authorsArr)} 
   ${generateRandom(themesArr)}`;
};

const displayRandomMessage = () => {
  const randomMessage = generateRandomMessage(phrases, authors, themes);
  document.getElementById('message').textContent = randomMessage;
};
const generateButton = document.getElementById('generateButton');
generateButton.addEventListener('click', displayRandomMessage);

// Display a random message when the page is loaded
window.addEventListener('load', displayRandomMessage);

console.log(randomMessage);
