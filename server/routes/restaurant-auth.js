import express from 'express'
import sha512 from 'sha512'
import conn from '../db/conn'
import jwt from 'jsonwebtoken'
import config from 'config'

const router = express.Router()

router.post('/restaurantlogin', (req, res, next) => {
	const username = req.body.username
	const password = sha512(req.body.password).toString('hex')

	const sql = 'SELECT username, email, address FROM Restaurant_Users WHERE username = ? AND password = ?'

	conn.query(sql, [username, password], (err, results, fields) => {
		if (results.length > 0) {
			const token = jwt.sign({"username":username, "email":results[0].email, "address":results[0].address}, config.get('jwt.secret'))

			res.json({
				token: token
			})
		} else {
			res.status(401).json({
				message: 'Username or Password incorrect'
			})
		}
	})
})

router.post('/restaurantregister', (req, res, next) => {
	const username = req.body.username
	const password = sha512(req.body.password).toString('hex')
	const email = req.body.email
	const address = req.body.address

	const sql = 'INSERT INTO Restaurant_Users (username, password, email, address) VALUES (?, ?, ?, ?)'

	conn.query(sql, [username, password, email, address], (err, results, fields) => {
		res.json({
			message: 'User created'
		})
	})
})

export default router