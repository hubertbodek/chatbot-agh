import { combineReducers } from 'redux';

// reducers
import { messageReducer } from './messageReducer';

const reducers = combineReducers({
	messages: messageReducer,
});

export default reducers;
