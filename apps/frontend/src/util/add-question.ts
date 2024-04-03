
import axios from 'axios';

export const useAddQuestion = () => {
    const addQuestion = async (questionText: string) => {
        try {
            const response = await axios.post('/questions/add', {
                questionText
            });
            return response.status;
        } catch (error) {
            // eslint-disable-next-line no-alert
            alert(error.response.data.message);
            return 500;
        }
    };

    return addQuestion;
};


