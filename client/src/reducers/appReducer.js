const initialState = {
	// huh?
	donate: []
}

export default function (state = initialState, action) {
  // put magic here
 switch (action.type) {
    case 'GET_DONATIONS':
    	return {...state, donate: action.payload}
    default:
    	return state
  }
}
