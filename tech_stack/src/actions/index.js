// action needs to return an object with type property
// pass the libraryID as argument to change the state

export const selectLibrary = (libraryId) => {
	return {
		type: 'select_library',
		payload: libraryId
	};
};
