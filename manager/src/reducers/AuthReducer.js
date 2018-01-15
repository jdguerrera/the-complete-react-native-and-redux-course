import { 
	EMAIL_CHANGED,
	PASSWORD_CHANGED
} from '../actions/types';

const INITIAL_STATE = { 
	email: '',
	password: ''
};

// redux forces immutable state. state must be updated like this
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case EMAIL_CHANGED:
			// take all properties from state and put in new object then add email property
			// return with new object is needed for redux to recognize change in state 
			return { ...state, email: action.payload };
		case PASSWORD_CHANGED: 
			return { ...state, password: action.payload };
		default:
			return state;
	}
};