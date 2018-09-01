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
		SELECT id, email, address, phone, type
		FROM users 
		WHERE email = ? AND password = ?
	`

	conn.query(sql, [email, password], (err, results, fields) => {
		if (results.length > 0) {
			const token = jwt.sign({"id":results[0].id, "email":email, "address":results[0].address, "phone":results[0].phone, "type":results[0].type}, config.get('jwt.secret'))

			res.json({
				token: token
			})
		} else {
			res.status(401).json({
				message: 'Email or Password incorrect'
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

router.patch('/donating', (req, res, next) => {
	const accepted = req.body.accepted
	const id = req.body.id
	const reason = req.body.reason
	const pickup_by = req.body.pickup_by

	console.log(accepted,id,reason,pickup_by)

	const sql = `
		UPDATE donations
		SET accepted = ?, reason = ?, pickup_by = ? 
		Where id = ?
	`
	conn.query(sql, [accepted, reason, pickup_by, id], (err, results, fields) => {
		res.json({
			message: 'Order updated'
		})
	})
})


export default router