import axios from 'axios';

export async function fetchQuestions() {
  const response = (await axios.get('/questions')).data;
  return response;
}

export async function fetchCurrUser() {
  const response = (await axios.get('/api/account')).data;
  return response;
}