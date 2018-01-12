// set state default to null for first run --REQUIRED--
export default (state = null, action) => {
	// set initial state when app boots; cannot be undefined
	console.log(action);
	switch (action.type) {
		case 'select_library':
			return action.payload;

		// catch all in case an action comes in that shouldn't
		default:
			return state;
	}
	return null;
};