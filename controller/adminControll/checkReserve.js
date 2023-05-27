const Connectionn = require("../../server")
module.exports = (req, res) => {
    const dayStart = req.query.startDate
    //console.log(dayStart)
    Connectionn.query(`SELECT reserve.day_start as Sday, reserve.name as nameuser, reserve.phon as phon, room.name_room as room
    FROM reserve
    JOIN room
    ON reserve.id_room = room.id_room
    WHERE reserve.day_start >= '${dayStart}' AND reserve.status_room = '1' 
    ORDER BY Sday`,
            (err, result) => {
                res.render('check',{result})
    }
    )
}