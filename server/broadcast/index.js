import conn from '../db/conn'

function runsocket(io) {


  io.on('connection', socket => {
  	socket.on('signin', function(name) {
  		socket.name = name
  	})
  	socket.join('donations')
    console.log('connected')

    socket.on('/delivery/pickups', function(data) {
      console.log(data)
      const sql = `INSERT INTO donations (dish, trays, food_id) 
                   VALUES (?, ?, ? )`

      conn.query(sql, [data.dish, data.trays, data.food_id], (err, results, fields) => {
        const obj=Object.assign(data, {
          name: socket.name
        })
        io.to('donations').emit('/delivery/pickups', obj)
      })
    })
  })
}

export default runsocket