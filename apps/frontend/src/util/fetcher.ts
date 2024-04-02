import axios from 'axios';

export default async function fetcher(key: string) {
  return (await axios.get(`http://localhost:8000${key}`)).data;
}