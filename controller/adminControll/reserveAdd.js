
const Connectionn = require("../../server")
const va = require('../../utils/valuequiry')
module.exports =   (req, res) => {
            var dateStart = req.query.dateStart;
            var dateEnd = req.query.dateEnd;
            var TypeRoom = req.query.TypeRoom;
            //va.push({dateStart,dateEnd,TypeRoom})
            //console.log(va)
            Connectionn.query(`SELECT room.id_room as id_room, room.name_room as name_room, room.price_room as price_room, room_type.room_name_type as room_name_type
            FROM room
            JOIN room_type
            ON room.id_room_type = room_type.id_room_type
            WHERE room.id_room  
            NOT IN (SELECT id_room FROM reserve WHERE day_start <= '${dateStart}' AND day_end >= '${dateEnd}') 
            AND room.id_room_type = ${TypeRoom}`,
                    (err, roomAdd) => {
                    res.render('reserveAdd', {roomAdd})
            }
       ) 
            
  }