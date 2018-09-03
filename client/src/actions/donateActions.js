import { api } from '../components/Authentication'
import store from '../store'
// import { Message } from 'semantic-ui-react'

export function makeDonation(donation) {
	api.post('/api/donate', donation).then(data => {
		console.log('resp:', data)
	})
}

export function updatePickup(state) {
	api.patch('/api/donating', state).then(data => {

	})
}

export function donateForm(input) {
	if (isNaN(input)) {
		console.log(input)
	} else {
		console.log('No numbers, please.')
	}
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

export function getDonations() {
	api.get('/api/donating').then(data => {
		store.dispatch({
			type: 'GET_DONATIONS',
			payload: data
		})
	})
}