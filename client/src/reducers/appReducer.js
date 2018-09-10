const initialState = {
	donate: [],
	mypickups: [],
	addresses: [],
    defaultD: []
}

export default function (state = initialState, action) {
 switch (action.type) {
    case 'GET_DONATIONS':
    	return {...state, donate: action.payload}

    case 'GET_MYPICKUPS':
    	return {...state, mypickups: action.payload}

    case 'GET_ADDRESSES':
    	return {...state, addresses: action.payload}

    case 'GET_DEFAULT':
        return{...state, defaultD: action.payload}
        
    default:
    	return state
  }
}
