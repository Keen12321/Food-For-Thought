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
	const id = req.body.id
	const name = req.body.name
	const email = req.body.email
	const location = req.body.location
	const phone = req.body.phone

	const sql = `
		UPDATE 
			users
		SET 
			name = ?, email = ?, password = ?, address = ?, phone = ?
		WHERE 
			id = ?
	`
	conn.query(sql, [email, password, location, phone, id], (err, results, fields) => {
		res.json({
			message: 'User updated'
		})
	})
})


// POSTING DONATIONS
router.post('/donate', (req, res, next) => {
	const dish = req.body.dish
	const trays = req.body.trays
	const value = req.body.value
	const food_id = req.body.food_id
	const donate_time = req.body.donate_time
	const sql = `
		INSERT INTO
			donations (dish, trays, value, food_id, donate_time)
		VALUES
			(?, ?, ?, ?, ?)
	`

	conn.query(sql, [dish, trays, value, food_id, donate_time], (error, results, fields) => {
		let donation = req.body
		console.log(donation)
	})
})


// GET REPORTS
router.get('/reports/:id', (req, res, next) => {
	const sql = `
		SELECT 
			donations.dish, donations.trays, donations.value, donations.date, donations.food_id, users.id, users.name, users.EIN_id
		FROM 
			donations
		LEFT JOIN 
			users 
		ON 
			donations.food_id = users.id
		WHERE 
			donations.food_id = users.id;
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

//UPDATE PICKUP
router.patch('/donating', (req, res, next) => {
	const accepted = req.body.accepted
	const delivery_id = req.body.delivery_id
	const id = req.body.id
	const reason = req.body.reason
	const pickup_by = req.body.pickup_by

	console.log(accepted,id,reason,pickup_by)

	const sql = `
		UPDATE 
			donations
		SET 
			accepted = ?, reason = ?, pickup_by = ?, delivery_id = ?
		Where 
			id = ?
	`
	conn.query(sql, [accepted, reason, pickup_by, delivery_id, id], (err, results, fields) => {
		res.json({
			message: 'Order updated'
		})
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
			donations.accepted NOT IN ("pending", "false", "true")
	`

	conn.query(sql, (err, results, fields) => {
		res.json(results)
	})
})

//GETTING ONLY THE DONATIONS THAT ARE FLAGGED FOR PICKUP
router.get('/donating/pending/:id', (req, res, next) => {
	let id = req.params.id

	const sql = `
		SELECT
			donations.dish, donations.trays, donations.id, donations.delivery_id, donations.accepted, donations.reason, donations.pickup_by, users.location, users.name
		FROM
			donations
		LEFT JOIN
			users ON users.id = donations.food_id
		WHERE
			donations.delivery_id = ? AND donations.accepted = "pending"
	`

	conn.query(sql, [id], (err, results, fields) => {
		res.json(results)
	})
})


//GETTING ADDRESSES FROM PENDING TO BE THE WAYPOINTS
router.get('/donating/pending/addresses', (req, res, next) => {
	let id = req.params.id

	const sql = `
		SELECT
			location
		FROM
			users
		LEFT JOIN
			donations ON food_id = users.id
		WHERE
			donations.accepted = "pending"
	`

	conn.query(sql, (err, results, fields) => {
		res.json(results)
	})
})

//POSTING DEFAULT DONATIONS

router.post('/donation/default', (req, res, next) =>{
	const dish = req.body.dish
	const trays = req.body.trays
	const value = req.body.value
	const food_id = req.body.food_id
	const sql = `
		INSERT INTO
			defaultDonations (dish, trays, value, food_id)
		VALUES
			(?, ?, ?, ?)
	`

	conn.query(sql, [dish, trays, value, food_id], (error, results, fields) => {
		let donation = req.body
		console.log(donation)
	})
})

//GETTING YOUR WN DEFAULT DONATIONS 
router.get('/default/:id' ,(req, res, next) =>{
		const sql = `
		SELECT 
			defaultDonations.dish, defaultDonations.trays, defaultDonations.value, defaultDonations.food_id, users.id, users.EIN_id
		FROM 
			defaultDonations
		LEFT JOIN 
			users 
		ON 
			defaultDonations.food_id = users.id
		WHERE 
			defaultDonations.food_id = users.id;
	`

	conn.query(sql, (error, results, fields) => {
		let defaultD = []
		let id = req.params.id

		for (let i = 0; i < results.length; i++) {
			if (results[i].id == id) {
				defaultD.push(results[i])
			}
		}
		res.json(defaultD)
	})
})


export default router

