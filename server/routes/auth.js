import express from 'express'
import sha512 from 'js-sha512'
import conn from '../db/conn'
import jwt from 'jsonwebtoken'
import config from 'config'

const router = express.Router()

router.post('/login', (req, res, next) => {
	const email = req.body.email
	const password = sha512(req.body.password).toString()

	const sql = `
		SELECT email 
		FROM users 
		WHERE email = ? AND password = ?
	`

	conn.query(sql, [email, password], (err, results, fields) => {
		if (results.length > 0) {
			const token = jwt.sign({"email":email}, config.get('jwt.secret'))

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

router.post('/register', (req, res, next) => {
	console.log(req.body)
	const email = req.body.email
	const password = sha512(req.body.password).toString()
	const address = req.body.address
	const phone = req.body.phone
	const type = req.body.type

	const sql = `
	INSERT INTO users (email, password, address, phone, type)
	VALUES (?, ?, ?, ?, ?)
	`

	conn.query(sql, [email, password, address, phone, type], (err, results, fields) => {
		res.json({
			message: 'User created'
		})
	})
})

export default router