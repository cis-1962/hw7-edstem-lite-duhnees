

//this whole thing is FUCKED


import axios from 'axios';
import useSWR from 'swr';
import fetcher from '../util/fetcher';

// export default async function handleLogin(username: string, password: string, navigate: (string) => void) {
//   try {
//     await axios.post(`http://localhost:8000/account/login`, { username, password });
//     navigate('/');
//   } catch (error) {
    // // eslint-disable-next-line no-alert
    // alert(error.message);
//   }
// }


export function useLogin() {
  const {
    error,
    isLoading,
    mutate,
  } = useSWR('/account/login', fetcher);

  const login = async (username: string, password: string) => {
    try {
      const response = await axios.post('/account/login', { username, password });
  
      if (response.status === 200) {
        mutate();
      } else {
          // eslint-disable-next-line no-alert
          alert(response.data);
      }
    } catch (error) {
        // eslint-disable-next-line no-alert
        alert(error.message);
    }
  };

  return { error, isLoading, login };
}