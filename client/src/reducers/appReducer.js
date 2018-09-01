const initialState = {
	// huh?
	donate: [],
	mypickups: [],
	allpickups: [],
	addresses: []
}

export default function (state = initialState, action) {
  // put magic here
 switch (action.type) {
    case 'GET_DONATIONS':
    	return {...state, donate: action.payload}
    case 'GET_MYPICKUPS':
    	return {...state, mypickups: action.payload}
    case 'GET_ADDRESSES':
    	return {...state, addresses: action.payload}
    case 'GET_ALLPICKUPS':
    	return {...state, allpickups: action.payload}

    default:
    	return state
  }
}
