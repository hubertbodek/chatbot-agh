export const messageReducer = (state = [], action) => {
	switch (action.type) {
		case 'STORE_USER_MESSAGE':
			return [...state, action.payload];
		case 'STORE_BOT_MESSAGE':
			return [...state, action.payload];
		default:
			return state;
	}
};
