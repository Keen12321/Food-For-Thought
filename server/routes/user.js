import express from 'express'
import sha512 from 'sha512'
import conn from '../db/conn'
import jwt from 'jsonwebtoken'
import config from 'config'

const router = express.Router()

// POSTING DONATIONS
router.post('/donate', (req, res, next) => {
	const dish = req.body.dish
	const trays = req.body.trays
	const value = req.body.value
	const sql = `
		INSERT INTO
			donations (dish, trays, value)
		VALUES
			(?, ?, ?)
	`

	conn.query(sql, [dish, trays, value], (error, results, fields) => {
		let donation = req.body
		console.log(donation)
	})
})

// DONATION LISTING
router.get('/pickups', (req, res, next) => {
	const sql = `
		SELECT 
			d.dish, u.address, d.date
		FROM
			donations d, users u
		WHERE
			d.food_id = u.id
	`

	conn.query(sql, (error, results, fields) => {
		res.json(results)
	})
})

export default router
