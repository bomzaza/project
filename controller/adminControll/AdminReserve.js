const room = require("../../models/room")
const connectionn = require('../../server')

module.exports =   (req, res) => {
  connectionn.query(`SELECT * FROM room_type`,
       (err, room_type) => {
        //res.json(results)
        res.render('reserve', {room_type})
        }
      ) 
}