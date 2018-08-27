import {api} from '../../components/Authentication'

export function registerRestauraunt(user, cb) {
	api.post('/api/restaurauntregister', user).then(data => {
		api.login(user.username, user.password).then(() => {
			cb()
		})
	})
}