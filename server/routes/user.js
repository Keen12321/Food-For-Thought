import express from 'express'
import sha512 from 'sha512'
import conn from '../db/conn'
import jwt from 'jsonwebtoken'
import config from 'config'

const router = express.Router()

// POSTING DONATIONS
router.post('/donating', (req, res, next) => {
	const name = req.body.name
	const trays = req.body.trays
	const sql = `
		INSERT INTO
			donations (name, tray)
		VALUES
			(?, ?, ?)
	`

	conn.query(sql, [name, trays], (error, results, fields) => {
		console.log(req.body)
	})
})

export default router
