const initialState = {
	// huh?
	donate: ''
}

export default function (state = initialState, action) {
  // put magic here
 switch (action.type) {
    case 'MAKE_DONATION':
    	return {...state, donate: action.payload}
    default:
    	return state
  }
}
