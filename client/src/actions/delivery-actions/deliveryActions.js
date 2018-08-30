import { api } from '../../components/Authentication'
import store from '../../store'

export function getDonations() {
	api.get('/api/pickups').then(resp => {
		store.dispatch({
			type: 'GET_DONATIONS',
			payload: resp.data
		})
	})
}