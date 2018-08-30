import { api } from '../../components/Authentication'
// import store from '../../store'

export function makeDonation(donation) {
	api.post('/api/donate', donation).then(data => {
		console.log('resp:', data)
	})
<<<<<<< HEAD
=======
}

export function getCurrentDate() {
	let date = new Date()
	let currentDate = date.toLocaleDateString()
	return currentDate
>>>>>>> donate-feature
}