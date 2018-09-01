import { api } from '../../components/Authentication'
import store from '../../store'

export function getDonations() {
	api.get('/api/pickups').then(data => {
		store.dispatch({
			type: 'GET_DONATIONS',
			payload: data
		})
	})
}
