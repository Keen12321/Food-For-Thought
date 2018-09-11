import {api} from '../components/Authentication'
import store from '../store'

export function getReportRestaurant(id) {
	api.get('/api/reportsRestaurant/' + id).then(data => {
		store.dispatch({
			type:'GET_REPORT_RESTAURANT',
			payload:data
		})
	})
}

export function getReportDelivery(id) {
	api.get('/api/reportsDelivery/' + id).then(data => {
		store.dispatch({
			type:'GET_REPORT_DELIVERY',
			payload:data
		})
	})
}
