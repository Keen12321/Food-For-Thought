import { api } from '../../components/Authentication'
// import store from '../../store'

export function makeDonation(donation) {
	api.post('/api/donating', donation.name, donation.main_tray, donation.side_tray).then(resp => {
		console.log('resp:', resp)
	})
}