
import axios from 'axios';

export const useSignUp = () => {
    const signUp = async (username: string, password: string) => {
        try {
            const response = await axios.post(`/api/account/signup`, {
                username: username,
                password: password
            });
            return response.status;
        } catch (error) {
            // eslint-disable-next-line no-alert
            alert(error.response.data.message);
            return 500;
        }
    };

    return signUp;
};


// export const useSignUp = async (username: string, password: string) => {
//     const [resCode, setResCode] = useState(0);

//     await axios.post('http://localhost:8000/account/signup', {username: username, password: password})
//       .then(response => {
//         setResCode(response.status);
//       })
//       .catch(err => {
//         alert(err.message);
//       });

//     return resCode;
// }