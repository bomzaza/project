const Connectionn = require("../../server")

module.exports = (req, res) => {
    const dateStart = req.query.startDate
    const dateEnd = req.query.endDate
    //res.render('incomCheck',{dateStart,dateEnd})
    Connectionn.query(`SELECT count(reserve.id_room) as counttotlo, room.name_room as name_room, room.price_room as price, (count(reserve.id_room) * room.price_room) as priceall, room.id_room
    FROM reserve
    JOIN room 
    ON reserve.id_room = room.id_room
    where reserve.status_room = 1 AND (reserve.day_start BETWEEN '${dateStart}' AND '${dateEnd}')
    GROUP BY (room.id_room)`,
            (err, result) => {
                res.render('incomCheck',{dateStart,dateEnd,result})
    }
) 
}