import './style.css';
import Fetch from './fetchApi.js';

const submit = document.querySelector('#save');
const refresh = document.querySelector('#refresh');
const scoreList = document.querySelector('.scores-list');

const getScore = async () => {
  scoreList.innerHTML = '';
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:wbCdNq20zWq7s2vzZVOg/scores');
  const result = await response.json();
  const scores = result.result;
  scores.forEach((score) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${score.user}: ${score.score}`;
    scoreList.appendChild(listItem);
  });
};
refresh.addEventListener('click', getScore);

submit.addEventListener('click', (e) => {
  const user = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;

  e.preventDefault();
  const data = {
    user,
    score,
  };

  const newScore = new Fetch(data);
  newScore.addData();
});