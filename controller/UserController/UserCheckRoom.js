const connectionn = require('../../server')

module.exports = (req, res) => {
    const dateStrat = req.query.dateStart
    const dateEnd = req.query.dateEnd
    const TypeRoom = req.query.TypeRoom
    //console.log({dateStrat,dateEnd ,TypeRoom})
    
    
        connectionn.query(`SELECT room.id_room as id_room, room.name_room as name_room, room.price_room as price_room,room.detail_room as detail_room,
         room.img1 as img1,room.img2 as img2,room.img3 as img3,room.img4 as img4,room.img5 as img5, 
         room_type.room_name_type as room_name_type
            FROM room
            JOIN room_type
            ON room.id_room_type = room_type.id_room_type
            WHERE room.id_room  
            NOT IN (SELECT id_room FROM reserve WHERE day_start >= '${dateStrat}' AND day_end <= '${dateEnd}') 
            AND room.id_room_type = ${TypeRoom} LIMIT 5`,
            function(err, results) {
            //console.log(results.length)
               //return res.status(200).send({data: results})
               try {
                    if(results.length > 0){
                        return res.render('UsersIndex', {email: req.session.email ,id: req.session.id_user, name_user: req.session.name_user, results})
                    }
                        return res.render('UsersIndex',{massage: "ไม่มีห้องว่างโปรด โทรเบอร์ติดต่อ 093-6079126, 098-9359469 "})
               } catch (error) {
                return res.status(500).json({massage: `กาก`})
               }
            }
       ) 
}