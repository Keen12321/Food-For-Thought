import axios from 'axios'
import store from '../store'

export function getReportRestaurant(id) {
	axios.get('/api/reportsRestaurant/' + id).then(resp => {
		store.dispatch({
			type:'GET_REPORT_RESTAURANT',
			payload:resp.data
		})
	})
}

export function getReportDelivery(id) {
	axios.get('/api/reportsDelivery/' + id).then(resp => {
		store.dispatch({
			type:'GET_REPORT_DELIVERY',
			payload:resp.data
		})
	})
}