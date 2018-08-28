import {api} from '../components/Authentication'

export function registerUser(user, cb) {
	api.post('/api/register', user).then(data => {
		api.login(user.email, user.password, user.address, user.phone).then((data) => {
			cb()
		})
	})
}