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

export function getCurrentDate() {
	let date = new Date()
	let currentDate = date.toLocaleDateString()
	return currentDate
}