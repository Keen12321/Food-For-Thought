import express from 'express'
import sha512 from 'js-sha512'
import conn from '../db/conn'
import jwt from 'jsonwebtoken'
import config from 'config'

const router = express.Router()

router.get('/register', (req, res, next) => {
	const sql = `
		SELECT
			email, password, address, phone
		FROM
			users
	`

	conn.query(sql, (err, results, fields) => {
		res.json(results)
	})
})

router.patch('/register', (req, res, next) => {
	console.log(req.body)
	const id = req.body.id
	const name = req.body.name
	const password = sha512(req.body.password).toString()
	const email = req.body.email
	const address = req.body.address
	const phone = req.body.phone

	const sql = `
		UPDATE users
		SET name = ?, email = ?, password = ?, address = ?, phone = ?
		WHERE id = ?
	`

	conn.query(sql, [name, email, password, address, phone, id], (err, results, fields) => {
		res.json({
			message: 'User updated'
		})
	})
})

// POSTING DONATIONS
router.post('/donating', (req, res, next) => {
	const name = req.body.name
	const trays = req.body.trays
	const sql = `
		INSERT INTO
			donations (name, trays)
		VALUES
			(?, ?)
	`

	conn.query(sql, [name, trays], (error, results, fields) => {
		let donation = req.body
		console.log(donation)
		
	})
})



export default router
