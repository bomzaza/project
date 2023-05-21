const connectionn = require('../../server')

module.exports = (req, res) => {
    const dateStrat = req.query.dateStart
    const dateEnd = req.query.dateEnd
    const TypeRoom = req.query.TypeRoom
    //console.log({dateStrat,dateEnd ,TypeRoom})
    
    
        connectionn.query(`SELECT room.id_room as id_room, room.name_room as name_room, room.price_room as price_room,room.detail_room as detail_room, room.img as img, room_type.room_name_type as room_name_type
            FROM room
            JOIN room_type
            ON room.id_room_type = room_type.id_room_type
            WHERE room.id_room  
            NOT IN (SELECT id_room FROM reserve WHERE day_start >= '${dateStrat}' AND day_end <= '${dateEnd}') 
            AND room.id_room_type = ${TypeRoom} LIMIT 3`,
            function(err, results) {
            //console.log(results.length)
               //return res.status(200).send({data: results})
               try {
                    if(results.length > 0){
                        return res.render('UsersIndex', {email: req.session.email ,id: req.session.id_user, name_user: req.session.name_user, results})
                    }
                        return res.json({massage: err})
               } catch (error) {
                return res.status(500).json({massage: `กาก`})
               }
            }
       ) 
}