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
	const response = await axios.post(
		'http://localhost:5000/api/dialogflow/textQuery',
		{
			text: message,
		}
	);

	console.log(response.data);

	dispatch({
		type: 'STORE_BOT_MESSAGE',
		payload: {
			message: response.data.fulfillmentText,
			sender: 'bot',
		},
	});
};
