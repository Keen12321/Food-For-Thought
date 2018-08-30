import { api } from '../components/Authentication'
// import store from '../../store'

export function makeDonation(donation) {
	api.post('/api/donating', donation).then(data => {
		console.log('resp:', data)
	})
}