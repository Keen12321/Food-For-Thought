const initialState = {
	donate: ''
}

export default function (state = initialState, action) {
 	switch (action.type) {
    case 'MAKE_DONATION':
    	return {...state, donate: action.payload}
    default:
    	return state
  }
}
