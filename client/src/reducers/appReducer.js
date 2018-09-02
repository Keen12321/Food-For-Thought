const initialState = {
	donate: [],
	mypickups: [],
	addresses: []
}

export default function (state = initialState, action) {
 switch (action.type) {
    case 'GET_DONATIONS':
    	return {...state, donate: action.payload}
    case 'GET_MYPICKUPS':
    	return {...state, mypickups: action.payload}
    case 'GET_ADDRESSES':
    	return {...state, addresses: action.payload}
    default:
    	return state
  }
}
