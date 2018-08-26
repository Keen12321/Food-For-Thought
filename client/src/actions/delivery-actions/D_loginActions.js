import {api} from '../../components/Authentication'

export function registerDelivery(user, cb) {
	api.post('/api/deliveryregister', user).then(data => {
		api.login(user.username, user.password).then(() => {
			cb()
		})
	})
}