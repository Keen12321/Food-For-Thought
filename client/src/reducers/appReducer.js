const initialState = {
	donate: '',
	donations: []
}

export default function (state = initialState, action) {
 	switch (action.type) {
    case 'MAKE_DONATION':
    	return {...state, donate: action.payload}
    case 'GET_DONATIONS':
    	return {...state, donations: action.payload}
    default:
    	return state
  }
}
