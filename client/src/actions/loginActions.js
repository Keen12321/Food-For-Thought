import {api} from '../components/Authentication'

export function registerUser(user, cb) {
	api.post('/api/register', user).then(data => {
		api.login(user.email, user.password, user.location, user.phone).then((data) => {
			cb()
		})
	})
}

export function getUserInfo() {
	api.get('/api/register')
}

export function changeUserInfo(user) {
	api.patch('/api/register', user).then(data => {
	})
}