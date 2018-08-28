import express from 'express'
import sha512 from 'sha512'
import conn from '../db/conn'
import jwt from 'jsonwebtoken'
import config from 'config'

const router = express.Router()

router.post('/restaurant/donate', (req, res, next) => {
	const sql = `
		INSERT INTO
			donations (name, main_tray, side_tray, food_id)
		VALUES
			(?, ?, ?, ?)
	`

	conn.query(sql, [req.body.name, req.body.main_tray, req.body.side_tray, req.body.food_id] (error, results, fields) => {
		res.json(results)
	})
})

export default router