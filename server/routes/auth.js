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
		SELECT 
			id, email, location, phone, type
		FROM 
			users 
		WHERE 
			email = ? 
		AND 
			password = ?
	`

	conn.query(sql, [email, password], (err, results, fields) => {
		if (results.length > 0) {
			const token = jwt.sign({
				"id":results[0].id, 
				"email":email, 
				"location":results[0].location, 
				"phone":results[0].phone, 
				"type":results[0].type}, 
				config.get('jwt.secret'))

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
	const name = req.body.name
	const email = req.body.email
	const password = sha512(req.body.password).toString()
	const location = req.body.location
	const phone = req.body.phone
	const type = req.body.type

	const sql = `
		INSERT INTO 
			users (name, email, password, location, phone, type)
		VALUES 
			(?, ?, ?, ?, ?, ?)
	`

	conn.query(sql, [name, email, password, location, phone, type], (err, results, fields) => {
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
		UPDATE 
			donations
		SET 
			accepted = ?, reason = ?, pickup_by = ? 
		Where 
			id = ?
	`
	conn.query(sql, [accepted, reason, pickup_by, id], (err, results, fields) => {

		res.json({
			message: 'Order updated'
		})
	})
})


export default router