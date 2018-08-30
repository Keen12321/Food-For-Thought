import axios from 'axios'
import store from '../store'

export function getReport() {
	axios.get('/api/report').then(resp => {
		store.dispatch({
			type:'GET_REPORT',
			payload:resp.data
		})
	})
}