import {api} from '../components/Authentication'

export function restaurantRegister(user, cb) {
	api.post('/api/restaurantregister', user).then(data => {
		api.login(user.username, user.password).then(() => {
			cb()
		})
	})
}