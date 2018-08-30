const initialState = {
	donations: [],
	donate: ''
}

export default function (state = initialState, action) {
  // put magic here
 switch (action.type) {
    case 'MAKE_DONATION':
    	return {...state, donate: action.payload}
    case 'GET_DONATIONS':
    	return {...state, donations: action.payload}
    default:
    	return state
  }
}
