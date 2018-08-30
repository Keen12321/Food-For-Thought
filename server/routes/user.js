import express from 'express'
import sha512 from 'sha512'
import conn from '../db/conn'
import jwt from 'jsonwebtoken'
import config from 'config'

const router = express.Router()

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
router.get('/report', (req, res, next) => {
	const sql = `
		SELECT users.name, donations.date, donations.dish, donations.trays, donations.value
		FROM donations
		LEFT JOIN users ON donations.food_id = users.id
		WHERE donations.food_id = users.id;
	`
	conn.query(sql, (error, results, fields) => {

		res.json(results)
		console.log(results)
	})
})

export default router