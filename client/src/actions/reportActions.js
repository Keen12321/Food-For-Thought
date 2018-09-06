import axios from 'axios'
import store from '../store'

export function getReport(id) {
	axios.get('/api/reports/' + id).then(resp => {
		store.dispatch({
			type:'GET_REPORT',
			payload:resp.data
		})
	})
}

