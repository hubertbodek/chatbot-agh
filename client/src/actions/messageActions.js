import axios from 'axios';

export const storeUserMessage = (message) => {
	return {
		type: 'STORE_USER_MESSAGE',
		payload: {
			message: message,
			sender: 'user',
		},
	};
};



export const storeBotMessage = (message) => async (dispatch, getState) => {

	const endpoint = process.env.NODE_ENV === 'development' ? 'http://localhost:5000/api/dialogflow/textQuery' : "/api/dialogflow/textQuery"

	const response = await axios.post(
		endpoint,
		{
			text: message,
		}
	);

	// console.log(response.data);

	dispatch({
		type: 'STORE_BOT_MESSAGE',
		payload: {
			message: response.data.fulfillmentText,
			sender: 'bot',
		},
	});
};
