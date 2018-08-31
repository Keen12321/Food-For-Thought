const initialState = {
	report:[]
}

export default function(state = initialState, action) {
	switch (action.type) {
		case 'GET_REPORT':
			return{...state, report:action.payload}
		default:
			return state
	}
}