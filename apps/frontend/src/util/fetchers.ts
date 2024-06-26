import axios from 'axios';

export async function fetcher(url: string) {
  const response = (await axios.get(url)).data;
  return response;
}