import { api } from '../components/Authentication'
import store from '../store'
import io from 'socket.io-client'


export function makeDonation(donation) {
	api.post('/api/donate', donation).then(data => {
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

export function getAddresses() {
	api.get('/api/donating/pending/addresses').then(data => {
		store.dispatch({
			type: 'GET_ADDRESSES',
			payload: data
		})
	})
}

export function getMyPickups() {
	api.get('/api/donating/pending').then(data => {
		store.dispatch({
			type: 'GET_MYPICKUPS',
			payload: data
		})
	})
}
