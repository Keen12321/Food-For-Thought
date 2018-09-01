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
	const dish = req.body.dish
	const trays = req.body.trays
	const sql = `
		INSERT INTO
			donations (dish, trays, accepted)
		VALUES
			(?, ?, 'false')
	`

	conn.query(sql, [dish, trays], (error, results, fields) => {
		let donation = req.body
		console.log(donation)
		
	})
})



// GET REPORTS
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



//GET CURRENT LISTINGS
	router.get('/current', (req, res, next) =>{
		const sql = `
			SELECT dish, trays, accepted
				FROM donations
				WHERE accepted = false
		`

		conn.query(sql, (error, results, fields) =>{
			res.json(results)
			console.log(results)
		})
	})

	router.post('/accepted', (req, res, next) =>{
		const sql = `
					INSTERT INTO 
						donations (accepted, userkey)
					VALUES ('true', {whatever your user key is})
				`
	})

//GETTING THE DONATIONS MAPPED TO PICKUPS PAGE
router.get('/donating', (req, res, next) => {
	const sql = `
		SELECT
		donations.dish, donations.trays, donations.id, donations.accepted, donations.reason, users.address, users.name
		FROM
		donations
		LEFT JOIN
		users ON users.id = donations.food_id
	`

	conn.query(sql, (err, results, fields) => {
		console.log('results',results)
		res.json(results)
	})
})


export default router

