import { api } from '../components/Authentication'
import store from '../store'

export function makeDonation(donation) {
	api.post('/api/donating', donation).then(data => {
		console.log('resp:', data)
	})
}

export function getDonations() {
	api.get('/api/donating').then(data => {
		store.dispatch({
			type: 'GET_DONATIONS',
			payload: data
		})
	})
}

export function updatePickup(state) {
	api.patch('/api/donating', state).then(data => {

	})
}