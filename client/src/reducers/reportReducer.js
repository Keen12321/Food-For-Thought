const initialState = {
	reportRestaurant:[],
	reportDelivery:[]
}

export default function(state = initialState, action) {
	switch (action.type) {
		case 'GET_REPORT_RESTAURANT':
			return{...state, reportRestaurant:action.payload}
		case 'GET_REPORT_DELIVERY':
			return{...state, reportDelivery:action.payload}
		default:
			return state
	}
}