import { api } from '../components/Authentication'
import store from '../store'

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
export function getAddresses(id) {
	api.get('/api/donating/pending/addresses/' + id).then(data => {
		store.dispatch({
			type: 'GET_ADDRESSES',
			payload: data
		})
	})
}
export function getMyPickups(id) {
	api.get('/api/donating/pending/' + id).then(data => {
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
export function getTime() {
	var time = new Date();
		
  	return time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
}


//POSTING DEFAULT DONATIONS TO THE defaultDonations TABLE
export function addToDefault(donation){
	api.post('/api/donation/default', donation).then(data =>{
		console.log('resp:', data)
	})
}


//GETTING YOUR OWN DEFAULT DONATIONS
export function getDefault(id) {
	api.get('/api/donation/default/' + id).then(data =>{
		store.dispatch({
			type: 'GET_DEFAULT',
			payload: data
		})
	})
}

