import express from 'express'
import sha512 from 'sha512'
import conn from '../db/conn'
import jwt from 'jsonwebtoken'
import config from 'config'

const router = express.Router()

router.post('/deliverylogin', (req, res, next) => {
	const username = req.body.username
	const password = sha512(req.body.password).toString('hex')

	const sql = 'SELECT username, email, address FROM Delivery_Users WHERE username = ? AND password = ?'

	conn.query(sql, [username, password], (err, results, fields) => {
		if (results.length > 0) {
			const token = jwt.sign({"username":username, "image":results[0].image}, config.get('jwt.secret'))

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

router.post('/deliveryregister', (req, res, next) => {
	const username = req.body.username
	const password = sha512(req.body.password).toString('hex')

	const sql = 'INSERT INTO Delivery_Users (username, password, email, address) VALUES (?, ?)'

	conn.query(sql, [username, password], (err, results, fields) => {
		res.json({
			message: 'User created'
		})
	})
})

export default router