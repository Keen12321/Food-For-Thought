import express from 'express'
import sha512 from 'sha512'
import conn from '../db/conn'
import jwt from 'jsonwebtoken'
import config from 'config'

const router = express.Router()

// POSTING DONATIONS
router.post('/donate', (req, res, next) => {
	const name = req.body.name
	const trays = req.body.trays
	const value = req.body.value
	const sql = `
		INSERT INTO
			donations (name, trays, value)
		VALUES
			(?, ?, ?)
	`

	conn.query(sql, [name, trays, value], (error, results, fields) => {
		let donation = req.body
		console.log(donation)
	})
})

export default router
