
import axios from 'axios';

export const useAnswerQuestion = () => {
    const answerQuestion = async (_id: string, answer: string) => {
        try {
            const response = await axios.post('/questions/answer', {
                _id: _id,
                answer: answer
            });
            return response.status;
        } catch (error) {
            // eslint-disable-next-line no-alert
            alert(error.response.data.message);
            return 500;
        }
    };

    return answerQuestion;
};


