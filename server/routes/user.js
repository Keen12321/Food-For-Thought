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
	const password = sha512(req.body.password).toString()
	const email = req.body.email
	const address = req.body.address
	const phone = req.body.phone

	const sql = `
		UPDATE users
		SET email = ?, password = ?, address = ?, phone = ?
		WHERE id = ?
	`

	conn.query(sql, [email, password, address, phone, id], (err, results, fields) => {
		res.json({
			message: 'User updated'
		})
	})
})

// POSTING DONATIONS
router.post('/donating', (req, res, next) => {
	const dish = req.body.dish
	const trays = req.body.trays
	const sql = `
		INSERT INTO
			donations (dish, trays)
		VALUES
			(?, ?)
	`

	conn.query(sql, [dish, trays], (error, results, fields) => {
		let donation = req.body
		console.log(donation)
		
	})
})

// GETTING REPORTS
router.get('/reports/:id', (req, res, next) => {
	const sql = `
		SELECT users.name, donations.date, donations.dish, donations.trays, donations.value, users.id
		FROM donations
		LEFT JOIN users ON donations.food_id = users.id
		WHERE donations.food_id = users.id;
	`
	conn.query(sql, (error, results, fields) => {
		let report = []
		let id = req.params.id

		for (let i = 0; i < results.length; i++) {
			if (results[i].id == id) {
				report.push(results[i])
			}
		}

		res.json(report)
	})
})

export default router