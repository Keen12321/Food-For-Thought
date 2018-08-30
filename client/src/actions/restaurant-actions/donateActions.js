import { api } from '../../components/Authentication'
// import store from '../../store'

export function makeDonation(donation) {
	api.post('/api/donate', donation).then(data => {
		console.log('resp:', data)
	})
}