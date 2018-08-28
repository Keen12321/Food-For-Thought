import axios from 'axios'
import store from '../../store'

export function makeDonation(donation) {
	axios.post('/api/donating', donation).then(resp => {
		console.log('resp:', resp)
	})
}