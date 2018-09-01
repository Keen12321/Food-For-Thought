import express from 'express'
import sha512 from 'js-sha512'
import conn from '../db/conn'
import jwt from 'jsonwebtoken'
import config from 'config'

const router = express.Router()

router.get('/register', (req, res, next) => {
	const sql = `
		SELECT
			email, password, location, phone
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
	const location = req.body.location
	const phone = req.body.phone

	const sql = `
		UPDATE users
		SET email = ?, password = ?, location = ?, phone = ?
		WHERE id = ?
	`

	conn.query(sql, [email, password, location, phone, id], (err, results, fields) => {
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

//GETTING THE DONATIONS MAPPED TO PICKUPS PAGE
router.get('/donating', (req, res, next) => {
	const sql = `
		SELECT
		donations.dish, donations.trays, donations.id, donations.accepted, donations.reason, donations.pickup_by, users.location, users.name
		FROM
		donations
		LEFT JOIN
		users ON users.id = donations.food_id
		WHERE
		donations.accepted <> "pending"
	`

	conn.query(sql, (err, results, fields) => {
		console.log('results',results)
		res.json(results)
	})
})
//GETTING ONLY THE DONATIONS THAT ARE FLAGGED FOR PICKUP
router.get('/donating/pending', (req, res, next) => {
	const sql = `
		SELECT
		donations.dish, donations.trays, donations.id, donations.accepted, donations.reason, donations.pickup_by, users.location, users.name
		FROM
		donations
		LEFT JOIN
		users ON users.id = donations.food_id
		WHERE
		donations.accepted = "pending"
	`

	conn.query(sql, (err, results, fields) => {
		console.log('results',results)
		res.json(results)
	})
})
//GETTING ADDRESSES FROM PENDING TO BE THE WAYPOINTS
router.get('/donating/pending/addresses', (req, res, next) => {
	const sql = `
		SELECT
		location
		FROM
		users
		LEFT JOIN
		donations ON users.id = donations.food_id
		WHERE
		donations.accepted = "pending"
	`

	conn.query(sql, (err, results, fields) => {
		console.log('results',results)
		res.json(results)
	})
})



export default router
